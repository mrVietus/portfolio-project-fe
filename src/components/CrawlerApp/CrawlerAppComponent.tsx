import { useState } from "react";
import Crawl from "../../interfaces/Crawl";
import NewCrawlFormComponent from "./NewCrawl/NewCrawlFormComponent";
import CrawlHistoryComponent from "./CrawlerHistory/CrawlHistoryComponent";
import CrawlVisualizationComponent from "./CrawlVisualization/CrawlVisualizationComponent";

function CrawlerAppComponent() {
    const [data , setCrawlResponseData] = useState<Crawl | null>(null);

    return (
        <div className='container mx-auto bg-slate-200 dark:bg-slate-700'>
           <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                <div className='bg-gray-100 p-4 col-span-1 lg:col-span-2 dark:bg-slate-800'>
                    <NewCrawlFormComponent setCrawlResponse={setCrawlResponseData} />
                </div>
                <div className='bg-gray-100 p-4 col-span-1 lg:col-span-2 dark:bg-slate-800'>
                    <CrawlHistoryComponent loadCrawlData={setCrawlResponseData} />
                </div>
                <div className='bg-gray-100 p-4 col-span-1 lg:col-span-4 dark:bg-slate-800'>
                    <CrawlVisualizationComponent data={data} clearCrawlData={setCrawlResponseData} />
                </div>
            </div>
        </div>
  )
}

export default CrawlerAppComponent