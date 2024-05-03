import './styles.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setItem, getItem} from '../../utils/storage'
import Header from '../Header'
import { useDispatch } from 'react-redux'
import userActionTypes from '../../redux/user/action-types'
import { useSelector }  from 'react-redux'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  useEffect(() => {
    const token = getItem('token')
    if(token) navigate('/Dashboard')
  }, [navigate])

  const [form, setForm] = useState({
    username: '',
    password:''
  })

  const handleChangeInputValue = async (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('click user')

    if(form.username === currentUser.username && form.password === currentUser.password ){
      const token = Math.floor(Math.random() * 1000000000000000000000)
      setItem('token', token)
      navigate('/Dashboard')
    }else{
      alert('informações inválidas')
    }
    dispatch({
      type: userActionTypes.LOGIN,
      payload:{
        username: form.username,
        password: form.password
      }
    })
  }

  return (
    <div className='container'>
      <Header />
      <div className='hero_div'>
        <h1 className='hero_h1'>Crie suas <span>anotações</span>, <br/> e guarde-as para sempre</h1>
        <p>Organizar as suas anotações nunca foi tão fácil,  <br/> aqui você tem tudo num único lugar  <br/>e em um clique de distância.</p>
        <button onClick={() => navigate('/Signup')}>Cadastre-se</button>
      </div>

      <div className="login_container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Usuário</label>
            <input 
              type="text" 
              name="username"
              value={form.username}
              onChange={handleChangeInputValue}
            />

            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            value={form.password}
            onChange={handleChangeInputValue}
          />
          <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}