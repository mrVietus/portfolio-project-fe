interface Props {
    urlValidationText: string;
}

const SuccessValidationComponent: React.FC<Props> = ({ urlValidationText }) => {

    return (
        <div className='flex text-green-500'>
            <div className='break-words'>
                <span className='font-bold'>Woho!</span> {urlValidationText}
            </div>
        </div>
    )
}

export default SuccessValidationComponent;