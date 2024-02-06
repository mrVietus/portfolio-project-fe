import { useCrawl, useCrawls } from "../../../services/crawlQueries";
import HistoryEntryComponent from "./HistoryEntryComponent";
import { Fragment, useEffect, useState } from "react";
import Crawl from "../../../interfaces/Crawl";
import HistoryPaginationComponent from "./HistoryPaginationComponent";
import NoDataToShowComponent from "./NoDataToShowComponent";

type Props = {
    loadCrawlData: React.Dispatch<React.SetStateAction<Crawl | null>>;
};

function CrawlHistoryComponent({loadCrawlData}: Props) {
    const [selectedId , setSelectedId] = useState<string | null>(null);

    const crawlsQuery = useCrawls();
    const crawlByIdQuery = useCrawl(selectedId);

    useEffect(() => {
        if(crawlByIdQuery.data != null) {
            loadCrawlData(crawlByIdQuery.data);
        }
    }, [crawlByIdQuery.data]);

    return (
        <div className='flex px-2 py-2 flex-col w-full h-full dark:bg-gray-800'>
            <div className='text-xl md:text-2xl font-bold tracking-tight pb-4 text-gray-900 dark:text-white'>
                Saved Crawls
            </div>
             <div className='h-52 w-full overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-400'>
                <NoDataToShowComponent hasNoData={crawlsQuery.data == null} />
                { crawlsQuery.data?.pages.map((group, index) => (
                    <Fragment key={index}>
                        { group.Crawls.map((crawl) => (
                            <HistoryEntryComponent key={crawl.Id} Name={crawl.Name} Url={crawl.Url} WordsCount={crawl.PageWordsCount}
                                                   ImagesCount={crawl.Images.length} onClick={() => setSelectedId(crawl.Id)} />
                        ))}
                    </Fragment>
                ))}
                <HistoryPaginationComponent hasNextPage={crawlsQuery.hasNextPage} isFetchingNextPage={crawlsQuery.isFetchingNextPage}
                                            onClick={() => crawlsQuery.fetchNextPage()}/>
            </div>
        </div>
    )
  }

export default CrawlHistoryComponent;