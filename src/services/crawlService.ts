import  Crawl from "../interfaces/Crawl";
import UseAxios from "./apiService";

// crawl/new (Get)
// crawls/page/{pageNumber}/itemsperpage/{itemsPerPage} (Get)
// crawl (Put)
// crawl/{id} (Delete)

export const getNewCrawl = async (url: string) => {
  return (await UseAxios().get<Crawl>(`/crawl/new?url=${url}`)).data;
}