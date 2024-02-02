import { Button, TextInput } from "flowbite-react";
import { isUrlValid, prepareUrl } from "../../../Utilities/urlHelper";
import { useState } from "react";

type Props = {
    disabled: boolean;
    setUrl: (parameter: string) => void;
    setCrawlLock: (parameter: boolean) => void;
}

function UrlInputComponent({disabled, setUrl, setCrawlLock}: Props) {
    const [urlValidationText , setUrlValidationText] = useState('');
    const [validationResultType , setValidationResultType] = useState('blank');
    const [inputColor , setInputColor] = useState('gray');
    const [inputValue , setInputValue] = useState('');

    const onVerifyClick = () => {
        const preparedUrl = prepareUrl(inputValue);

        if(!isUrlValid(preparedUrl)) {
            setInputColor('failure')
            setUrlValidationText('Url: '+ inputValue + " is not valid URL.");
            setValidationResultType('notValid');
            return;
        }

        setInputColor('success');
        setUrlValidationText('Url: '+ inputValue + " is valid!");
        setValidationResultType('valid');
        setUrl(preparedUrl);
        setCrawlLock(false);
    };

    const handleOnChange = (e) => {
        if(inputColor != 'gray' || urlValidationText != '' || validationResultType != 'blank') {
            setInputColor('gray');
            setUrlValidationText('');
            setValidationResultType('blank');
            setCrawlLock(true);
        }

        setInputValue(e.target.value);
    };

    let validationResult = <></>;
    switch (validationResultType) {
        case 'valid':
            validationResult =
                <div className='flex text-green-500'>
                    <div className='break-words'>
                        <span className='font-bold'>Woho!</span> {urlValidationText}
                    </div>
                </div>;
          break;
        case 'notValid':
            validationResult =
                <div className='flex text-red-500'>
                    <div className='break-words'>
                        <span className='font-bold'>Oops!</span> {urlValidationText}
                    </div>
                </div>;
          break;
        case 'blank':
            validationResult = <></>;
          break;
      }

    return (
        <div className='grid'>
            <div className='flex'>
                <TextInput
                    id='crawl-input'
                    placeholder='www.nytimes.com/'
                    color={inputColor}
                    addon="https://"
                    onChange={handleOnChange}
                    disabled={disabled}
                    className='w-48'
                />
                <Button size='md' pill className='rounded-l-2xl' onClick={onVerifyClick} disabled={disabled}>
                    Verify URL
                </Button>
            </div>
            <div className='h-10'>
                {validationResult}
            </div>
        </div>
    )
  }

export default UrlInputComponent;