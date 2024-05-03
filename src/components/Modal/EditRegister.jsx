import './styles.css'
import { useState, useEffect } from 'react'
// import { format } from 'date-fns'
import { getToken } from '../../utils/storage'
// import api from '../../services'


export default function EditRegister({ closeModal, payloadId }) {
    const token = getToken()

    const [payload, setPayload] = useState({
        name: '',
        description: ''
    })

    const handleChangeInputValue = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }




    // const formatDate = (date) => {
    //     const formated = format(date, 'yyyy-MM-dd')
    //     return formated
    // }

    const getObj = async () => {
        // try {
        //     const response = await api.get(`/transacao/${payloadId}`)
        //     setPayload({
        //         value: response.data[0].valor,
        //         category: response.data[0].categoria_nome,
        //         date: formatDate(new Date(response.data[0].data_cadastro), 'yyyy-MM-dd'),
        //         description: response.data[0].descricao
        //     })

        // } catch (error) {
        //     alert(error.response.data.mensagem)
        // }
    }

    useEffect(() => {
        getObj()
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        // const id = option.findIndex(item => item.descricao === payload.category)
        // try {
        //     await api.put(`/transacao/${payloadId}`, {
        //         descricao: payload.description,
        //         valor: payload.value,
        //         data: formatDate(payload.date),
        //         categoria_id: option[id].id,
        //         tipo: type
        //     })
        //     closeModal()
        //     window.location.reload()
        // } catch (error) {
        //     alert(error.response.data.mensagem)
        // }
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