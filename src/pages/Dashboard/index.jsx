import './styles.css'
import { useState, useEffect } from 'react'
import { getToken } from '../../utils/storage'
import api from '../../services'
import DashboarHeader from '../../components/Header/dashboard';
import AddRegister from '../../components/Modal/AddRegister';
import EditRegister from '../../components/Modal/EditRegister';
import Popup from '../../components/Popup';

export default function Dashboard() {
  const token = getToken()
  useEffect(() => {
    getTransactions()
  }, []);

  const [modalAdd, setModalAdd] = useState(false)
  const [modalEditReg, setModalEditReg] = useState(false)

  const [popup, setPopup] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const [transactionId, setTransactionId] = useState()
  const [transactions, setTransactions] = useState([
   {
    id: 1,
    name: 'fazer o front',
    description: 'tenho que montar todo o front retirando codigo legado'
   }
  ])

  const closeModal = () => {
    setModalAdd(false)
    setModalEditReg(false)
    setPopup(false)
  }

  const openModalAdd = () => {
    closeModal()
    setModalAdd(true)
  }
  const openModalEditReg = id => {
    closeModal()
    setModalEditReg(true)
    setTransactionId(id)
  }

  const getTransactions = async () => {
    try {
      const response = await api.get('/transacao')
      setTransactions(response.data)
    } catch (error) {
      console.log(error.response.data.mensagem)
    }
  }


  const deleteTransaction = async (id) => {
    try {
      await api.delete(`/transacao/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error.response.data.mensagem)
    }
  }


  const openPopup = async (e, id) => {
    setPopup(!popup)
    setDeleteId(id)
  }

  const handleDeleteModal = async () => {
    deleteTransaction(deleteId)
  }



  return (
    <div className="dashboard_container">
      
      {modalAdd && <AddRegister closeModal={closeModal} />}
      {modalEditReg && <EditRegister closeModal={closeModal} transactionId={transactionId} />}
      <DashboarHeader />
      <div className="dashboard">
        <div className='note_div'>
          <div className="note_data">
            <div className="data_header">
              <p>Tarefas</p>
              <button onClick={openModalAdd}>Nova Tarefa</button>
            </div>
            <div></div>
            {transactions.map(info => (
              <div className='data' key={info.id}>
                <div className="note">
                  <h1>{info.name}</h1>
                  <p>{info.description}</p>
                </div>
                <div className="icons">
                  <img src="/icons/edit.svg" alt="edit button" onClick={() => openModalEditReg(info.id)} />
                  <img src="/icons/bin.svg" alt="delete button" onClick={(e) => openPopup(e, info.id)} />
                  {popup && info.id === deleteId && <Popup closeModal={closeModal} handleDeleteModal={handleDeleteModal} />}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="resume">
          <div className="resume_data">
            <p className='resume_title'>Resumo</p>
            <div>
              <p>Entradas</p>
              <p className="deposit">{formatValue(extract.entrada)}</p>
            </div>
            <div>
              <p>Saidas</p>
              <p className="withdraw">{formatValue(extract.saida)}</p>
            </div>
            <div className='total_div'>
              <p>Saldo</p>
              <p className="total">{formatValue(extract.entrada - extract.saida)}</p>
            </div>
          </div>
          <button onClick={openModalAdd}>Adicionar Registro</button>
        </div> */}
      </div>

    </div>
  )
}