import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query"
import { getCrawlById, getNewCrawl, getSavedCrawlsPaginated } from "./crawlService"
import GetCrawlResponse from "../interfaces/Responses/GetCrawlsResponse";
import Crawl from "../interfaces/Crawl";

export function useNewCrawl(url: string) {
    return useQuery({
        queryKey: ['newCrawl', { url }],
        queryFn: () => getNewCrawl(url),
        enabled: false
    });
}

export function useCrawls() {
    return useInfiniteQuery({
        queryKey: ['crawls'],
        queryFn: getSavedCrawlsPaginated,
        initialPageParam: 0,
        maxPages: 5,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            if (lastPage.Crawls.length === 0) {
                return undefined;
            }

            return lastPageParam + 1;
        },
        getPreviousPageParam: (_, __, firstPageParam) => {
            if(firstPageParam <= 1) {
                return undefined;
            }

            return firstPageParam - 1;
        }
    });
}

export function useCrawl(id: string | null) {
    const queryClient = useQueryClient();

    return useQuery<Crawl | null>({
        queryKey: ['crawl', { id }],
        queryFn: () => getCrawlById(id!),
        enabled: !!id,
        retry: 3,
        placeholderData: () => {
            const cachedCrawls = (
                queryClient.getQueryData(["crawls"]) as {
                    pages: GetCrawlResponse[] | undefined
                }
            )?.pages?.flat(2);

            if (cachedCrawls) {
                for (const crawlResponse of cachedCrawls) {
                    const crawlFind = crawlResponse.Crawls.find((crawl) => crawl.Id === id);
                    if (crawlFind) {
                        return crawlFind;
                    }
                }
            }

            return null;
        }
    });
}