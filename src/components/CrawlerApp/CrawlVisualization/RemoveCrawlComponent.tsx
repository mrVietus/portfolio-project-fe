import { Button, Modal } from "flowbite-react";
import { HiTrash } from "react-icons/hi";
import { useState } from "react";
import { useDeleteCrawl } from "../../../services/crawlMutations";
import Crawl from "../../../interfaces/Crawl";

type Props = {
    id: string;
    name: string;
    removeCrawlData: React.Dispatch<React.SetStateAction<Crawl | null>>;
};

function RemoveCrawlComponent({id, name, removeCrawlData}: Props) {
    const [openModal, setOpenModal] = useState(false);
    const deleteCrawlMutation = useDeleteCrawl();

    const onSaveCrawlClick = () => {
        if(id === "" || id == null) {
            return;
        }

        deleteCrawlMutation.mutate(id);
        removeCrawlData(null);
        setOpenModal(false);
    };

    const onCloseModalClick = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button color='failure' size='xl' onClick={() => setOpenModal(true)} className='rounded-full max-h-28 md:rounded-3xl md:max-h-12 md:min-w-max items-center'>
                <HiTrash className='text-2xl' />
            </Button>
            <Modal show={openModal} size='md' onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className='text-center'>
                        <HiTrash className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                        <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                            Are you sure you want to remove crawl with name: <b>{name}</b>?
                        </h3>
                        <div className='flex justify-center gap-4'>
                            <Button color='failure' onClick={() => onSaveCrawlClick()}>
                                Remove it!
                            </Button>
                            <Button color='gray' onClick={() => onCloseModalClick()}>
                                No, it was a mistake!
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
  }

export default RemoveCrawlComponent;