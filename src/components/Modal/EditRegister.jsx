import './styles.css'
import { useState } from 'react'
import { getToken } from '../../utils/storage'

export default function EditRegister({ closeModal, payloadId }) {
    const token = getToken()

    const [payload, setPayload] = useState({
        name: '',
        description: ''
    })

    const handleChangeInputValue = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
        <>

            <div className="modal_container">
                <div className="modal">
                    <div className="modal_header">
                        <h1>Editar Registro</h1>
                        <h1 onClick={closeModal}>+</h1>
                    </div>
                
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="value">Nome</label>
                        <input
                            name="name"
                            type="text"
                            required
                            value={payload.value}
                            onChange={handleChangeInputValue}
                        />
                        <label htmlFor="description">Descrição</label>
                        <input
                            name="description"
                            type="text"
                            required
                            value={payload.description}
                            onChange={handleChangeInputValue}
                        />
                        <div className='btn_div'>
                            <button className='confirm_button' type='submit'>
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}