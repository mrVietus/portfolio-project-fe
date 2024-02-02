export interface Crawl {
    Url: string;
    CapturedAt: string;
    WordsCount: number;
    TopWords: StringKeyNumberValueDictionary[];
    Images: string[];
    WasError: boolean;
    ErrorMessage: string;
}

export interface StringKeyNumberValueDictionary {
    [key: string]: number;
}

export default Crawl;