import './styles.css'
export default function Popup({ closeModal, handleDeleteModal }){
    return(
        <>
            <div className="popup_container">
            <img className='triangle'src="/triangle.svg" alt="" />
                <p>Apagar item?</p>
                <div className="popup_btn">
                    <button className='yes' onClick={handleDeleteModal}>Sim</button>
                    <button className='no' onClick={closeModal}>Nao</button>
                </div>
            </div>
        </>
    )
}