import  Crawl from "../interfaces/Crawl";
import UseAxios from "./apiService";

export const getNewCrawl = async (url: string) => {
  return (await UseAxios().get<Crawl>(`/crawl/new?url=${url}`)).data;
}

export const getSavedCrawlsPaginated = async (pageNumber: number, itemsPerPage: number) => {
  return (await UseAxios().get<[Crawl]>(`/crawls/page/${pageNumber}/itemsperpage/${itemsPerPage}`)).data;
}

export const saveCrawl = async (crawl: Crawl) => {
  return (await UseAxios().put<Crawl>(`/crawl`, crawl)).data;
}

export const deleteCrawl = async (id: string) => {
  return (await UseAxios().delete<boolean>(`/crawl/${id}`)).data;
}
