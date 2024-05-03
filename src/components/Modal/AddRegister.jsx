import './styles.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import{ addTask } from '../../redux/tasks/actions'


export default function AddRegister({ closeModal }) {   
    const dispatch = useDispatch()
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
        try {
            dispatch(addTask(payload))
            closeModal()
            //window.location.reload()
        } catch (error) {
            alert('ocorreu um erro ao adicionar a tarefa')
            closeModal()
        }
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