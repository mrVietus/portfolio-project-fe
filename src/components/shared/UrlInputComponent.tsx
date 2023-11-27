import { TextInput } from "flowbite-react";

type Props = {
    disabled: boolean;
    errorText: string;
    inputColor: string;
    setUrl: (parameter: string) => void;
    setInputColor: (parameter: string) => void;
    setError: (parameter: string) => void;
}

function UrlInputComponent({disabled, errorText, inputColor, setError, setUrl, setInputColor}: Props) {

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(inputColor != 'gray') {
            setInputColor('gray');
            setError('');
        }
        setUrl(event.target.value);
    };

    return (
        <TextInput
            id='crawl-input'
            placeholder='www.nytimes.com/'
            color={inputColor}
            addon="https://"
            helperText={ errorText.length > 0 ?
                <>
                <span className="font-medium">Oops!</span> {errorText}
                </> : <></>
            }
            onChange={handleOnChange}
            disabled={disabled}
        />
    )
  }

export default UrlInputComponent;