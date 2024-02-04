import { Button, Label, Modal, TextInput } from "flowbite-react";
import Crawl from "../../../interfaces/Crawl";
import { HiOutlineBookmark, HiOutlineStar } from "react-icons/hi";
import { useState } from "react";
import { useCreateCrawl } from "../../../services/crawlMutations";

type Props = {
    data: Crawl;
};

function AddCrawlComponent({data}: Props) {
    const [openModal, setOpenModal] = useState(false);
    const [crawlName, setCrawlName] = useState('');
    const [error, setError] = useState('');
    const createCrawlMutation = useCreateCrawl();

    const onSaveCrawlClick = () => {
        if(crawlName == '') {
            setError('Providing crawl name is required to save it!');
            return;
        }

        data.Name = crawlName;
        createCrawlMutation.mutate(data);

        setOpenModal(false);
        setCrawlName('');
        setError('')
    };

    const onCloseModalClick = () => {
        setOpenModal(false);
        setCrawlName('');
        setError('');
    };

    return (
        <div>
            <Button color='success' size='xl' onClick={() => setOpenModal(true)} className='rounded-full max-h-28 md:rounded-3xl md:max-h-12 md:min-w-max items-center'>
                <HiOutlineBookmark className='text-2xl' />
            </Button>
            <Modal show={openModal} size='md' onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className='text-center'>
                        <HiOutlineStar className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                        <div className='text-left'>
                            <div className='mb-2 block'>
                                <Label htmlFor='name' value='Name of your Crawl:' />
                            </div>
                            <TextInput
                                id='name'
                                placeholder='Name'
                                value={crawlName}
                                onChange={(event) => setCrawlName(event.target.value)}
                            />
                            <div className='h-10 text-center font-semibold text-red-500'>
                            {
                                error !== '' ?
                                    <div>
                                        <span className='font-bold'>Error!</span> {error}
                                    </div> :
                                    null
                            }
                            </div>
                        </div>
                        <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                            Are you sure you want to save crawl with name: <b>{crawlName}</b>?
                        </h3>
                        <div className='flex justify-center gap-4'>
                            <Button color='success' onClick={() => onSaveCrawlClick()}>
                                Save it!
                            </Button>
                            <Button color='failure' onClick={() => onCloseModalClick()}>
                                No, it was a mistake!
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
  }

export default AddCrawlComponent;