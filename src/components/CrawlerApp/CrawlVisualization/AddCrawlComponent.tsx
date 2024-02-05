import { Badge, Button, Label, Modal, TextInput } from "flowbite-react";
import Crawl from "../../../interfaces/Crawl";
import { HiOutlineBookmark, HiOutlineStar } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useCreateCrawl } from "../../../services/crawlMutations";

type Props = {
    data: Crawl;
};

function AddCrawlComponent({data}: Props) {
    const [openModal, setOpenModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [crawlName, setCrawlName] = useState('');

    useEffect(() => {
        if(crawlName !== "") {
            setDisabledSubmit(false);
        } else {
            setDisabledSubmit(true);
        }
    }, [crawlName]);

    const createCrawlMutation = useCreateCrawl();

    const onSaveCrawlClick = () => {
        data.Name = crawlName;
        createCrawlMutation.mutate(data);
        setShowError(true);
    };

    const handleOnChange = (e) => {
        setCrawlName(e.target.value);
        setShowError(false);
    };

    const onCloseModalClick = () => {
        setOpenModal(false);
        setCrawlName('');
    };

    return (
        <div>
            <Button color='success' size='xl' onClick={() => setOpenModal(true)} className='rounded-full max-h-28 md:rounded-3xl md:max-h-12 md:min-w-max items-center'>
                <HiOutlineBookmark className='text-2xl' />
            </Button>
            <Modal show={openModal} size='md' onClose={() => onCloseModalClick()} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className='text-center'>
                        <HiOutlineStar className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                        <div className='flex justify-center'>
                        { createCrawlMutation.isSuccess ?
                            <div className='flex flex-col justify-center gap-4'>
                                <Badge color="success">Success Crawl was correctly added.</Badge>
                            </div> :
                            <div>
                                <div className='text-left'>
                                    <div className='mb-2 block'>
                                        <Label htmlFor='name' value='Name of your Crawl:' />
                                    </div>
                                    <TextInput
                                        id='name'
                                        placeholder='Name'
                                        value={crawlName}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                    <div className='h-10 text-center font-semibold text-red-500'>
                                    {
                                        createCrawlMutation.isError && showError ?
                                            <div>
                                                <span className='font-bold'>Error!</span> {createCrawlMutation.error?.message}
                                            </div> :
                                            null
                                    }
                                    </div>
                                </div>
                                <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                                    Are you sure you want to save crawl with name: <b>{crawlName}</b>?
                                </h3>
                                <div className='flex justify-center gap-4'>
                                    <Button color='success' onClick={() => onSaveCrawlClick()} disabled={disabledSubmit}>
                                        Save it!
                                    </Button>
                                    <Button color='failure' onClick={() => onCloseModalClick()}>
                                        No, it was a mistake!
                                    </Button>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
  }

export default AddCrawlComponent;