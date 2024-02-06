interface Props {
    urlValidationText: string;
}

const FailureValidationComponent: React.FC<Props> = ({ urlValidationText }) => {

    return (
        <div className='flex text-red-500'>
            <div className='break-words'>
                <span className='font-bold'>Oops!</span> {urlValidationText}
            </div>
        </div>
    )
}

export default FailureValidationComponent;