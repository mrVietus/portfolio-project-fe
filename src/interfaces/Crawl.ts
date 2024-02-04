export interface Crawl {
    Id: string;
    Name: string;
    Url: string;
    Images: string[];
    TopWords: StringKeyNumberValueDictionary[];
    PageWordsCount: number;
    CapturedAt: string;
}

export interface StringKeyNumberValueDictionary {
    [key: string]: number;
}

export default Crawl;