import PageConfig from "../Config/pageConfig";
import  Crawl from "../interfaces/Crawl";
import GetCrawlResponse from "../interfaces/Responses/GetCrawlsResponse";
import UseAxios from "./apiService";

export const getNewCrawl = async (url: string) => {
  return (await UseAxios().get<Crawl>(`/crawl/new?url=${url}`)).data;
};

export const getCrawlById = async (id: string) => {
  return (await UseAxios().get<Crawl>(`/crawl/${id}`)).data;
};

export const getSavedCrawlsPaginated = async ({pageParam}: {pageParam: number}) => {
  return (
    await UseAxios().get<GetCrawlResponse>(
      `/crawls/page/${pageParam + 1}/itemsperpage/${PageConfig.ItemsPerPage}`
    )
  ).data;
};

export const saveCrawl = async (crawl: Crawl) => {
  return (await UseAxios().put<Crawl>(`/crawl`, crawl)).data;
};

export const deleteCrawl = async (id: string) => {
  return (await UseAxios().delete<boolean>(`/crawl/${id}`)).data;
};
