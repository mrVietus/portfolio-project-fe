type Props = {
    showError: boolean;
    errorMessage: string | undefined;
}

function InputErrorComponent({ showError, errorMessage }: Props) {
   if(!showError) {
        return null;
   }

    return (
        <>
            <span className='font-bold'>Error!</span> {errorMessage}
        </>
    )
}

export default InputErrorComponent;