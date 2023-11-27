import { useState } from 'react';
import './index.scss';
import { Modal } from './modal';

function App() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(prev => !prev)
  }
  return (
    <div className="App">
      <button onClick={toggleModal} className="open-modal-btn">✨ Открыть окно</button>
      <Modal modal={modal} toggleModal={toggleModal}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <h3>Это модальное окно</h3>
      </Modal>
    </div>
  );
}

export default App;
