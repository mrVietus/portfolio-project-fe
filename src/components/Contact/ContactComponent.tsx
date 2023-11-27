import { Button, Card, Label, TextInput, Textarea } from "flowbite-react"
import { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';


function ContactComponent() {
    const [emailValue , setEmailValue] = useState('');
    const [emailMessage , setEmailMessage] = useState('');

    const handleMailClick = () => {
        const subject = 'Message from ' + emailValue;
        const body = emailMessage;
        const mailtoString = `mailto:contact@supercrowler.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoString;
      };

    const handleOnChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmailMessage(event.target.value);
    };

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value);
    };

    return (
        <div className='flex justify-center'>
            <div className='grid w-96'>
                <Card>
                    <div className='max-w-lg'>
                        <div className='mb-2 block'>
                            <Label htmlFor='comment' value='Your message' />
                        </div>
                        <Textarea id='comment' placeholder='Leave a comment...' required rows={4} onChange={handleOnChangeTextArea}/>
                    </div>
                    <div className='pt-2'>
                        <div className='max-w-md'>
                            <div className='mb-2 block'>
                                <Label htmlFor='email3' value='Your email' />
                            </div>
                            <TextInput
                                id='email3'
                                type='email'
                                placeholder='name@gmail.com'
                                required
                                onChange={handleOnChangeInput}
                                helperText={
                                <>
                                    We’ll never share your details. Read our
                                    <a href='#' className='ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500'>
                                    Privacy Policy
                                    </a>
                                    .
                                </>
                                }
                            />
                        </div>
                    </div>
                    <Button className='mt-8' onClick={handleMailClick}>
                        Send Message
                        <HiOutlineMail className='ml-2 h-5 w-5' />
                    </Button>
                </Card>
            </div>
        </div>
  )
}

export default ContactComponent