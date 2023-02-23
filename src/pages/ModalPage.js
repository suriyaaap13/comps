import { useState } from 'react';
import Modal from "../components/Modal";
import Button from '../components/Button';

export default function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
      setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Button primary rounded onClick = {handleClick}>Open Modal</Button>
      {showModal && <div><Modal onClose = {handleClose} /></div>}
    </div>
  )
}
