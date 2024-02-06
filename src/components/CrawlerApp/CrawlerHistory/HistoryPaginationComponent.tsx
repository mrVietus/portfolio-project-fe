import { Spinner } from "flowbite-react";
import { Fragment } from "react";

type Props = {
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    onClick: () => void;
}

function HistoryPaginationComponent({hasNextPage, isFetchingNextPage, onClick }: Props) {

    return (
        <Fragment>
        {
            hasNextPage ?
            (
                <div className='flex items-center pb-5 hover:bg-green-300 p-4 rounded-md cursor-pointer active:bg-green-500' onClick={onClick}>
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
            isFetchingNextPage ?
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
        </Fragment>
    )
  }

export default HistoryPaginationComponent;