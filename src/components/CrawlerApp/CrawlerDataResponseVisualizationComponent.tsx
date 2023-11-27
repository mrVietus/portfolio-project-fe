import { Button } from "flowbite-react";
import PageDataResponse from "../../interfaces/Responses/PageDataResponse";
import CarouselComponent from "../shared/CaruselComponent";
import CrawledDataTableComponent from "./CrawledDataTableComponent";

type MyComponentProps = {
    data: PageDataResponse;
    newSearch: () => void;
  };

  const CrawlerDataResponseVisualizationComponent: React.FC<MyComponentProps> = ({ data, newSearch }) => {
    if (data.TopWords === undefined && data.Images === undefined) {
      return <></>;
    }

    return (
      <div className='w-full px-10 text-gray-900 dark:text-white'>
        <div className='flex justify-between pt-10'>
          <h5 className='py-10 text-5xl font-bold tracking-tight'>
            Crawling results for page: <a className='text-blue-700' href={data.Url} target="_blank" rel="noopener noreferrer">{data.Url}</a>
          </h5>
          <Button size='sm' onClick={newSearch} pill className='xl:w-32 sm:w-60'>
            Crawl new page
          </Button>
        </div>
        <div className='py-5 h-96 mb-10'>
          <p className='text-2xl font-semibold pb-5'>Images:</p>
          <CarouselComponent imageUrls={data.Images} />
        </div>
        <div className='py-5'>
          <p className='text-2xl font-semibold pb-5'>Words found on this page: {data.WordsCount}</p>
        </div>
        <div className='grid'>
          <div className='grid justify-center'>
            <p className='text-4xl font-bold pb-5'>Top words on the page</p>
          </div>
          <CrawledDataTableComponent topWords={data.TopWords} />
        </div>
      </div>
    );
  };

  export default CrawlerDataResponseVisualizationComponent;