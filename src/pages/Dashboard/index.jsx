import './styles.css'
import { useState, useEffect } from 'react'
import { getToken } from '../../utils/storage'
import api from '../../services'
import DashboarHeader from '../../components/Header/dashboard';
import AddRegister from '../../components/Modal/AddRegister';
import EditRegister from '../../components/Modal/EditRegister';
import Popup from '../../components/Popup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../redux/tasks/actions'

export default function Dashboard() {
  const dispatch = useDispatch()
  const {tasks} = useSelector(rootReducer => rootReducer.taskReducer)
  const token = getToken()
  useEffect(() => {
    getMyTasks()
  }, []);

  const [modalAdd, setModalAdd] = useState(false)
  const [modalEditReg, setModalEditReg] = useState(false)

  const [popup, setPopup] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const [transactionId, setTransactionId] = useState()
  const [MyTasks, setMyTasks] = useState([
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

  const getMyTasks = async () => {
    setMyTasks(tasks)
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

  const handleDeleteModal = async (id) => {
    dispatch( removeTask(id))
    
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
            {tasks.map(info => (
              <div className='data' key={info.id} id={info.id}>
                <div className="note">
                  <h1>{info.name}</h1>
                  <p>{info.description}</p>
                </div>
                <div className="icons">
                  <img src="/icons/edit.svg" alt="edit button" onClick={() => openModalEditReg(info.id)} />
                  <img src="/icons/bin.svg" alt="delete button" onClick={(e) => openPopup(e, info.id)} />
                  {popup && info.id === deleteId && <Popup closeModal={closeModal} handleDeleteModal={() => handleDeleteModal(info.id)} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}