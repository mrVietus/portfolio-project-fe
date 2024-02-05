import { useCrawl, useCrawls } from "../../../services/crawlQueries";
import HistoryEntryComponent from "./HistoryEntryComponent";
import { Fragment, useEffect, useState } from "react";
import { Spinner } from 'flowbite-react';
import Crawl from "../../../interfaces/Crawl";

type Props = {
    loadCrawlData: React.Dispatch<React.SetStateAction<Crawl>>;
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
        <div className='flex px-4 py-2 flex-col w-full h-full dark:bg-gray-800'>
            <div className='text-xl md:text-2xl font-bold tracking-tight pb-4 text-gray-900 dark:text-white'>
                Saved Crawls
            </div>
             <div className='h-52 w-full overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-400'>
                { crawlsQuery.data?.pages.map((group, index) => (
                    <Fragment key={index}>
                        { group.Crawls.map((crawl) => (
                            <HistoryEntryComponent key={crawl.Id} Name={crawl.Name} Url={crawl.Url} WordsCount={crawl.PageWordsCount}
                                                   ImagesCount={crawl.Images.length} onClick={() => setSelectedId(crawl.Id)} />
                        ))}
                    </Fragment>
                ))}
                {
                    crawlsQuery.hasNextPage ?
                    (
                        <div className='flex items-center pb-5 hover:bg-green-300 p-4 rounded-md cursor-pointer active:bg-green-500' onClick={() => crawlsQuery.fetchNextPage()}>
                            <div className='flex-col w-full'>
                                <div className='pl-3 text-xl text-center font-extrabold dark:text-white'>
                                    Load next page..
                                </div>
                            </div>
                        </div>
                    ) :
                    null
                }
                {
                    crawlsQuery.isFetchingNextPage ?
                    (
                        <div className='flex pb-5 p-4 rounded-md justify-center items-center'>
                            <div className='flex'>
                                <div className='pl-3 text-xl font-extrabold dark:text-white'>
                                    Loading...
                                </div>
                                <div className='pl-3'>
                                    <Spinner color='info' aria-label='Loading crawls' />
                                </div>
                            </div>
                        </div>
                    ) :
                    null
                }
            </div>
        </div>
    )
  }

export default CrawlHistoryComponent;