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
import { useRef } from 'react';
import Download from '../ui/Download';
import TempPdf from './TempPdf';
const PdfModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <Button mt={3} ref={btnRef} onClick={onOpen}>
        <Download />
      </Button>
      <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download Checklist As Pdf</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TempPdf />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PdfModal;
