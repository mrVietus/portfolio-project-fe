import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getNewCrawl, getSavedCrawlsPaginated } from "./crawlService"

export function useNewCrawl(url: string) {
    return useQuery({
        queryKey: ['newCrawl', { url }],
        queryFn: () => getNewCrawl(url),
        enabled: false
    });
}

export function useCrawls(pageNumber: number, itemsPerPage: number) {
    return useQuery({
        queryKey: ['crawls', { pageNumber }, { itemsPerPage }],
        queryFn: () => getSavedCrawlsPaginated(pageNumber, itemsPerPage),
        placeholderData: keepPreviousData
    });
}
