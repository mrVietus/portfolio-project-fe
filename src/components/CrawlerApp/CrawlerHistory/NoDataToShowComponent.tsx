type Props = {
    hasNoData: boolean;
}

function NoDataToShowComponent({ hasNoData }: Props) {
    if (!hasNoData) {
        return <></>
    }

    return (
        <div className='flex justify-center items-center pt-10 pb-5 p-4 rounded-md'>
            <div className='flex items-center'>
                <div className='pr-3 text-xl font-extrabold dark:text-white'>
                    No saved crawls...
                </div>
                <img src='cute-sad-fox.png' alt='sad fox' className='h-28 w-28 ml-auto' />
            </div>
        </div>
    )
}

export default NoDataToShowComponent;