import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { removeFromLocalStorage } from '../../redux/features/rootTasksSlice';

const RestoreDefault = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const handleRestore = () => {
    console.log('Restore Default');
    dispatch(removeFromLocalStorage());
    onClose();
  };
  return (
    <div className="flex px-8 py-4 items-center">
      <div className="flex-shrink mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12C3 9.19108 3 7.78661 3.67412 6.77772C3.96596 6.34096 4.34096 5.96596 4.77772 5.67412C5.78661 5 7.19108 5 10 5H14C16.8089 5 18.2134 5 19.2223 5.67412C19.659 5.96596 20.034 6.34096 20.3259 6.77772C21 7.78661 21 9.19108 21 12V12C21 14.8089 21 16.2134 20.3259 17.2223C20.034 17.659 19.659 18.034 19.2223 18.3259C18.2134 19 16.8089 19 14 19H12H10C7.19108 19 5.78661 19 4.77772 18.3259C4.34096 18.034 3.96596 17.659 3.67412 17.2223C3 16.2134 3 14.8089 3 12V12Z"
            stroke="#136DF5"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="#136DF5" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M18 10.5V13.5" stroke="#136DF5" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 10.5V13.5" stroke="#136DF5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-grow">
        <button onClick={onOpen} className="font-semibold">
          Restore Default
        </button>
        <p className="text-[#84868D]">Restore Original Setup</p>
      </div>
      <button onClick={onOpen} className="w-fit flex-shrink">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M10 20L17.3301 12.9546C17.7438 12.5569 17.9507 12.358 17.9904 12.1173C18.0032 12.0396 18.0032 11.9604 17.9904 11.8827C17.9507 11.642 17.7438 11.4431 17.3301 11.0454L10 4"
            stroke="#84868D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'red'}>Are you sure to delete all projects?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Once you reset to the default, you can not undo this action.</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" variant="primary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleRestore} variant="secondary">
              Restore to default
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RestoreDefault;
