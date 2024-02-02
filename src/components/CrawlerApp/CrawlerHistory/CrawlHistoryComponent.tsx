import HistoryEntryComponent from "./HistoryEntryComponent";


function CrawlHistoryComponent() {

    const onClick = () => {
        console.log('load data');
    };

    return (
        <div className='flex px-4 py-2 flex-col w-full h-full dark:bg-gray-800'>
            <div className='text-xl md:text-2xl font-bold tracking-tight pb-4 text-gray-900 dark:text-white'>
                Saved Crawls
            </div>
             <div className='h-52 w-full overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-400'>
                <HistoryEntryComponent Name={"Saved Interia Page"} Url={"https://www.interia.pl"} WordsCount={100} ImagesCount={30} onClick={onClick} />
                <HistoryEntryComponent Name={"Saved Interia Page"} Url={"https://www.interia.pl"} WordsCount={100} ImagesCount={30} onClick={onClick} />
                <HistoryEntryComponent Name={"Saved Interia Page"} Url={"https://www.interia.pl"} WordsCount={100} ImagesCount={30} onClick={onClick} />
                <HistoryEntryComponent Name={"Saved Interia Page"} Url={"https://www.interia.pl"} WordsCount={100} ImagesCount={30} onClick={onClick} />
                <HistoryEntryComponent Name={"Saved Interia Page"} Url={"https://www.interia.pl"} WordsCount={100} ImagesCount={30} onClick={onClick} />
                <HistoryEntryComponent Name={"Saved Interia Page"} Url={"https://www.interia.pl"} WordsCount={100} ImagesCount={30} onClick={onClick} />
            </div>
        </div>
    )
  }

export default CrawlHistoryComponent;