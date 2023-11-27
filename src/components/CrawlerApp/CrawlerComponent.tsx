import { Button, Card } from "flowbite-react"
import { useState } from "react";
import delay from '../../Utilities/delayHelper';
import { getPageData } from "../../services/pageService";
import UrlInputComponent from "../shared/UrlInputComponent";
import PageDataResponse from "../../interfaces/Responses/PageDataResponse";
import { isUrlValid, prepareUrl } from "../../Utilities/urlHelper";
import CrawlerDataResponseVisualizationComponent from "./CrawlerDataResponseVisualizationComponent";

function CrawlerComponent() {
  const [crawlResponseData , setCrawlResponseData] = useState({} as PageDataResponse);
  const [loading , setLoading] = useState(false);
  const [showActionButton , setShowActionButton] = useState(true);

  const [url , setUrl] = useState('');
  const [inputColor , setInputColor] = useState('gray');
  const [error , setError] = useState('');
  const [disableInput , setDisableInput] = useState(false);

  const onGetDataClick = async () => {
    setLoading(true);
    setDisableInput(true);

    const preparedUrl = prepareUrl(url);
    if(!isUrlValid(preparedUrl)) {
      setInputColor('failure')
      setError('Url: '+ url + "is not valid URL. Please fix the URL.");
      setLoading(false);
      setDisableInput(false);
      return;
    }

    const response = await getPageData(preparedUrl);
    await delay(2500);

    if(response.WasError) {
      setInputColor('failure')
      setError('Unknown issue during crawling page: '+ url);
      setLoading(false);
      setDisableInput(false);
      return;
    }

    setCrawlResponseData(response);

    setLoading(false);
    setDisableInput(false);
    setShowActionButton(false);
  };

  const onNewSearchClick = () => {
    setShowActionButton(true);
  };

  if(showActionButton) {
    return (
      <div className='grid max-h-20 justify-center w-full dark:bg-gray-800'>
        <Card>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Crawl page to get all the data.
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              <div className='max-w-md flex-col'>
                <UrlInputComponent disabled={disableInput} inputColor={inputColor} errorText={error} setUrl={setUrl} setInputColor={setInputColor} setError={setError}/>
              </div>
            </p>
            <Button size='lg' isProcessing={loading} onClick={onGetDataClick} pill>
              Crawl Page!
            </Button>
        </Card>
    </div>
    )
  }

  return (
    <div className='dark:bg-gray-800'>
      <CrawlerDataResponseVisualizationComponent data={crawlResponseData} newSearch={onNewSearchClick} />
    </div>
  )
}

export default CrawlerComponent;