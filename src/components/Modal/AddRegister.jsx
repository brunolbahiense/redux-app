import './styles.css'
import { getToken } from '../../utils/storage'
import { useState, useEffect } from 'react'
// import api from '../../services'



export default function AddRegister({ closeModal }) {
    const token = getToken()
    const id = Math.floor(Math.random() * 100000)
    const [payload, setPayload] = useState({
        id,
        name: '',
        description: ''
    })

    

    const handleChangeInputValue = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     await api.post('/transacao', {
        //         tipo: type,
        //         descricao: payload.description,
        //         valor: payload.value,
        //         data: new Date(payload.date),
        //         categoria_id: option[id].id
        //     })
        //     closeModal()
        //     window.location.reload()
        // } catch (error) {
        //     alert(error.response.data.mensagem)
        // }
        console.log('infos', payload)
        closeModal()
        // window.location.reload()
    }

    return (
        <>

            <div className="modal_container">
                <div className="modal">
                    <div className="modal_header">
                        <h1>Adicionar Registro</h1>
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