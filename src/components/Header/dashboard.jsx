import './styles.css'
import { clear } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useSelector }  from 'react-redux'
import { useDispatch } from 'react-redux'
import userActionTypes from '../../redux/user/action-types'


export default function DashboarHeader() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  console.log('current user: ', currentUser)
  const navigate = useNavigate()
  const exit = () =>{
    dispatch({
      type: userActionTypes.LOGOUT,
    })
    clear()
    navigate('/')
  }
    return (
      <div className='dashboard_header'>
        <img src="/logo.svg" alt="an blue hexagon logo" className='logo' />
        <div className="dashboard_info">
          <p className='username'>{currentUser.username}</p>
          <img onClick={exit} src="/headerProps/exit.svg" alt="exit button" />
        </div>
    </div>
    )
  }