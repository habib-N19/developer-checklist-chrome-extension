import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import Download from '../ui/Download';
import TempPdf from './TempPdf';
import { TTasksProps } from './Tasks';
// import TempPdf from './TempPdf';
const PdfModal = ({ project }: TTasksProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <Download />
      </button>
      <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} motionPreset="slideInBottom" size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download Checklist As Pdf</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TempPdf project={project} />
          </ModalBody>
          <ModalFooter>
            <button className="" onClick={onClose}>
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PdfModal;
