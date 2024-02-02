import { useQuery } from "@tanstack/react-query"
import { getNewCrawl } from "./crawlService"

export function useNewCrawl(url: string) {
    return useQuery({
        queryKey: ['newCrawl', { url }],
        queryFn: () => getNewCrawl(url),
        enabled: false
    });
}
