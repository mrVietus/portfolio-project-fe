import PageDataResponse from "../interfaces/Responses/PageDataResponse";
import UseAxios from "./apiService";

export async function getPageData(url: string) {
    const response = {} as PageDataResponse;

    UseAxios().get(`api/pagedata?url=${url}`)
      .then(function (responseObject) {
        response.Url = responseObject.data.url;
        response.CapturedAt = responseObject.data.capturedAt;
        response.WordsCount = responseObject.data.pageWordsCount;
        response.TopWords = responseObject.data.topWords;
        response.Images = responseObject.data.images;
        response.WasError = false;
      })
      .catch(function (error) {
        response.WasError = true;
        response.ErrorMessage = error;
      });

    return response;
}
