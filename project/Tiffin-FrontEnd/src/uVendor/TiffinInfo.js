import {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')

export default function TiffinInfo({tiffin}){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [content, setContent] = useState({})
    return(
        <>
            <Modal isOpen={modalIsOpen}
                   onRequestClose={() => setModalIsOpen(false)}
                   style={{
                       overlay: {
                           position: 'fixed',
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           backgroundColor: 'rgba(0, 0, 0, 0.85)'
                       },
                       content: {
                           position: 'fixed',
                           width: '20%',
                           height: '70%',
                           top: '50%',
                           left: '50%',
                           transform: 'translate(-50%, -50%)',
                           border: '1px solid #ccc',
                           background: '#000000',
                           overflow: 'auto',
                           WebkitOverflowScrolling: 'none',
                           borderRadius: '4px',
                           outline: 'none',
                           padding: '20px',
                           display: 'flex',
                           flexWrap: 'wrap'
                       }
                   }}
            >
                <TiffinInfo user={content}/>
            </Modal>
            <div className={'MyRow'}>
                {
                    tiffin.tiffinDetails.map((td) =>
                        <>
                            <button className={'BtnItem'}
                            >{td.item.name}</button>
                            <button className={'ItemQty'}>{"x" + td.qty}</button>
                        </>)
                }
            </div>
        </>
    )
}