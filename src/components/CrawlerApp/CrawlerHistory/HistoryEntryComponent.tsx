import { Avatar } from "flowbite-react";

type Props = {
    Name: string;
    Url: string;
    WordsCount: number;
    ImagesCount: number;
    onClick: () => void;
}

function HistoryEntryComponent({Name, Url, WordsCount, ImagesCount, onClick}: Props) {

    return (
        <div className='flex items-center pb-5 hover:bg-blue-300 p-4 rounded-md cursor-pointer active:bg-blue-500' onClick={onClick}>
            <Avatar alt='save-crawlr-image' img='fox-save-no-bg.jpeg' rounded={true} size="lg"/>
            <div className='flex-col'>
                <div className='pl-3 text-xl font-extrabold dark:text-white'>
                    {Name}
                </div>
                <div className='flex pl-3'>
                    <div className='font-mono text-green-700 dark:text-white'>
                        {Url}
                    </div>
                    <div className='font-serif pl-2 dark:text-slate-500'>
                        Words found <b>{WordsCount}</b>
                    </div>
                    <div className='font-serif pl-2 dark:text-slate-500'>
                        Images found <b>{ImagesCount}</b>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default HistoryEntryComponent;