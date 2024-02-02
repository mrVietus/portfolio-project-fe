import { Button } from "flowbite-react";
import PageDataResponse from "../../../interfaces/Crawl";
import CarouselComponent from "../../shared/CaruselComponent";
import CrawledDataTableComponent from "./CrawledDataTableComponent";
import { HiOutlineBookmark } from 'react-icons/hi';

type Props = {
  data: PageDataResponse;
  saveCrawl: () => void;
};

const CrawlVisualizationComponent: React.FC<Props> = ({ data, saveCrawl }) => {
  if (data.TopWords === undefined && data.Images === undefined) {
    return (
      <div className='flex flex-col justify-center xl:flex-row xl:justify-between xl:items-center'>
        <div className='text-5xl font-bold pb-5 text-center xl:ml-52 dark:text-white'>
          No data to display..
        </div>
        <div className='justify-items-end'>
          <img src='cute-sad-fox.png' alt='sad fox' className='h-96 w-96 ml-auto'/>
        </div>
      </div>
    )
  }

  return (
    <div className='px-5 text-gray-900 dark:text-white dark:bg-gray-800'>
        <div className='flex justify-between md:items-center pt-10'>
          <h5 className='text-5xl font-bold tracking-tight'>
            Crawling results for page: <a className='text-blue-700' href={data.Url} target="_blank" rel="noopener noreferrer">{data.Url}</a>
          </h5>
          <div className='pt-10 md:pt-0'>
            <Button color='success' size='xl' onClick={saveCrawl} className='rounded-full max-h-28 md:rounded-3xl md:max-h-12 md:min-w-max items-center'>
              <HiOutlineBookmark className='text-2xl' />
            </Button>
          </div>
        </div>
        <div className='py-5'>
          <p className='text-2xl font-semibold pb-5'>Words found on this page: {data.WordsCount}</p>
        </div>
        <div className='flex-col md:flex md:flex-row md:justify-between'>
          <div className='md:py-5 w-full md:w-1/2 h-56 sm:h-64 xl:h-80 2xl:h-96 md:mt-10'>
            <CarouselComponent imageUrls={data.Images} />
          </div>
          <div className='grid mt-5 md:mt-0 md:mr-10 xl:mr-20'>
            <div className='grid justify-center'>
              <p className='md:text-2xl xl:text-4xl font-bold pb-5'>Top words on the page:</p>
            </div>
            <div className='max-h-96 w-full overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-400'>
              <CrawledDataTableComponent topWords={data.TopWords} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default CrawlVisualizationComponent;