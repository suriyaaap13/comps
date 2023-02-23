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

  const actionButton = <Button primary onClick={handleClose}>I Accept</Button>

  const modal = <div>
    <Modal 
      onClose = {handleClose} 
      actionButton = {actionButton}
      className = ""
    >
      I here have read all the important information and have no problem in them
    </Modal>
    
  </div>;

  document.body.classList.add('overflow-hidden');

  

  return (
    <div>
      <Button primary rounded onClick = {handleClick}>Open Modal</Button>
      {showModal && modal}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula finibus tellus nec interdum. Sed commodo lorem leo. Nullam eget purus elit. Nullam vitae felis a ligula gravida rhoncus id vel risus. Nam rutrum sollicitudin pellentesque. Integer lacinia suscipit turpis nec scelerisque. Pellentesque eleifend bibendum lorem nec posuere. Ut ornare augue velit, egestas fringilla nisi pretium ut.

      Ut quis dolor volutpat, tincidunt metus ut, mollis nibh. Nulla sit amet justo sem. Nam semper placerat est sed luctus. Nulla viverra, tortor ut rutrum varius, nibh turpis ultricies tellus, eu sodales ipsum nunc vitae lectus. Mauris vel finibus est, a mollis lacus. Quisque et dui leo. Donec non condimentum urna. Curabitur consequat neque in nulla fringilla, et posuere leo rhoncus. Quisque venenatis mollis cursus. Phasellus erat justo, efficitur maximus placerat vel, auctor ac diam. Cras lectus diam, tempus ut vestibulum a, auctor a nisi.

      Nulla in euismod diam, quis sollicitudin risus. Curabitur metus nisl, consectetur nec purus quis, rhoncus ultrices tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet tortor volutpat, ultrices ipsum non, porttitor leo. Suspendisse magna augue, scelerisque tincidunt mauris quis, fringilla iaculis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi id justo vestibulum, interdum sapien sed, iaculis purus. Vivamus interdum, odio ultricies bibendum bibendum, nibh tellus hendrerit nisl, euismod aliquet metus magna nec neque. Vivamus cursus ac orci at porttitor. Donec vitae lobortis tellus, non aliquet nulla. Maecenas imperdiet lectus nec lectus feugiat suscipit.

      Nulla malesuada diam vel molestie semper. Integer condimentum arcu eu velit commodo posuere. Donec eu facilisis enim. Praesent eget elit sagittis, ullamcorper tortor id, iaculis nisi. Proin dui mauris, sagittis eu ligula non, aliquet mollis urna. Sed elementum dolor non ex blandit imperdiet. Donec quis felis purus.

      Ut ornare imperdiet sapien, ut mattis dolor tempus at. Aliquam eros metus, pulvinar quis tempus malesuada, cursus at tellus. Fusce sed erat nec arcu placerat tincidunt. Sed eros mauris, accumsan a magna ut, consectetur commodo odio. Cras maximus vitae sapien in dignissim. Ut volutpat pellentesque libero ut tempor. Praesent sed facilisis odio, eu finibus purus. Aliquam feugiat neque et turpis cursus, et efficitur turpis porttitor. Donec tellus erat, imperdiet non varius at, vestibulum sit amet libero. Maecenas interdum est est, non fringilla lacus rutrum et. Proin cursus, ex vel pellentesque dignissim, sapien erat mattis urna, eu maximus urna purus ac urna.
    </div>
  );

}
