import ReactDOM from "react-dom";

export default function Modal({onClose, children, actionButton}) {



    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
            <div className="fixed inset-40 bg-white flex justify-center items-center p-5 h-40">
                <div className="flex flex-col justify-between">
                    {children}
                    <div className="flex justify-end mt-7">
                        {actionButton}
                    </div>
                </div>
            </div>
            
        </div>,
        document.querySelector('.modal-container')
    );
}
