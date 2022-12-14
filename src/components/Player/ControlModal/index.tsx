import React from 'react'
import Modal from 'react-modal';
import TopContent from './TopContent';
import Content from './Content';
import './animate.css';

interface ControlModalProps {
    open: boolean;
    onClose: () => void;
}
const customStyles = {
    content: {
      width: '100%',
      height: '100%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: 0,
      border: 'none',
      borderRadius: 0,
      transform: 'translate(-50%, -50%)',
      background: 'transparent'
    },
    overlay: {
        background: 'transparent'
    }
  };
Modal.setAppElement('#root');

const ControlModal: React.FC<ControlModalProps> = ({ open, onClose }) => {
    const [className, setClassName] = React.useState<string>('overflow-none w-full h-full bg-gray-900');

    const handleAfterOpen = () => {
        setClassName('modal-animate-open w-full h-full bg-gray-900')
    }
    const handleRequestClose = () => {
        setClassName('modal-animate-close w-full h-full bg-gray-900')
        onClose();
    }

    const handleAfterClose = () => {
        setClassName('overflow-none w-full h-full bg-gray-900')
    }
  
    return (
    <Modal
        isOpen={open}
        closeTimeoutMS={250}
        onAfterOpen={handleAfterOpen}
        onRequestClose={handleRequestClose}
        onAfterClose={handleAfterClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={className}>
            <TopContent onClose={handleRequestClose}  open={open} />
            <Content />
        </div>
      </Modal>
    )
}

export default ControlModal