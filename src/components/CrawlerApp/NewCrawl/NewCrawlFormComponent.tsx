import { Button } from "flowbite-react";
import UrlInputComponent from "./UrlInputComponent";
import { useState } from "react";
import { useNewCrawl } from "../../../services/crawlQueries";
import Crawl from "../../../interfaces/Crawl";
import { HiOutlineGlobe } from 'react-icons/hi';
import InputErrorComponent from "../../shared/Errors/InputErrorComponent";

type Props = {
    setCrawlResponse: React.Dispatch<React.SetStateAction<Crawl | null>>;
};

function NewCrawlFormComponent({setCrawlResponse}: Props) {
    const [url , setUrl] = useState('');
    const [disableInput , setDisableInput] = useState(false);
    const [crawlLock , setCrawlLock] = useState(true);

    const newCrawlQuery = useNewCrawl(url);

    const onGetDataClick = async () => {
        setDisableInput(true);

        const response = await newCrawlQuery.refetch();
        if(response.isSuccess)
        {
            setCrawlResponse(response.data);
        }
        setDisableInput(false);
    };

    return (
        <div className='flex w-full h-full dark:bg-gray-800'>
            <div className='pt-5 w-1/4 md:2/5 xl:w-1/3'>
                <img src="crawling-fox.png" alt="Description of the image" />
            </div>
            <div className='w-3/4 md:3/5 xl:w-2/3'>
                <div className='flex justify-center pt-8 text-xl md:text-2xl font-bold tracking-tight pb-4 text-gray-900 dark:text-white'>
                    Crawl new page!
                </div>
                <div className='flex font-normal justify-evenly text-gray-700 dark:text-gray-400'>
                    <UrlInputComponent disabled={disableInput} setUrl={setUrl} setCrawlLock={setCrawlLock} />
                </div>
                <div className='flex pt-2 justify-center'>
                    <div className='flex flex-col items-center pt-2'>
                        <Button size='lg' isProcessing={newCrawlQuery.isLoading || newCrawlQuery.isFetching}
                                          onClick={onGetDataClick} pill disabled={crawlLock}>
                            Run crawling! <HiOutlineGlobe className='ml-2 text-2xl' />
                        </Button>
                        <div className='h-10 text-center font-semibold text-red-500'>
                            <InputErrorComponent showError={newCrawlQuery.isError}
                                                 errorMessage="An error occurred during crawling your page." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default NewCrawlFormComponent;