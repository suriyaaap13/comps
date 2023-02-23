import ReactDOM from "react-dom";

export default function Modal({onClose}) {
    return ReactDOM.createPortal(
        <>
            <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
            <div className="absolute inset-40 bg-white flex justify-center items-center">I'm a modal</div>
        </>,
        document.querySelector('.modal-container')
    );
}
