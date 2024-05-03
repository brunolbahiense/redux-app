import './styles.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
import { useDispatch } from 'react-redux'
import userActionTypes from '../../redux/user/action-types'


export default function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    id: '',
    username: '',
    password: '',
    confirm_password: ''
  })

  const handleChangeInputValue = async (e) =>  setUser({...user, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 100000)
    try {
      if(user.password !== user.confirm_password) return alert('AS SENHAS DEVEM SER IDÊNTICAS')
      navigate('/')
    } catch (error) {
      console.log(error.response.data.message)
    }


    dispatch({
      type: userActionTypes.SIGNUP,
      payload:{
        id: id,
        username: user.username,
        password: user.password
      }
    })
  }

    return (
      <div className="container">
        <Header />
        <div className="signup_container">
          <h1>Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Usuário</label>
              <input 
                name="username"
                type="text" 
                required
                value={user.username}
                onChange={handleChangeInputValue}
              />
              <label htmlFor="password">Senha</label>
              <input 
                name="password" 
                type="password" 
                required
                value={user.password}
                onChange={handleChangeInputValue}
              />

              <label htmlFor="confirm_password">Confirmar Senha</label>
              <input 
                name="confirm_password"
                type="password"
                required
                value={user.confirm_password} 
                onChange={handleChangeInputValue}
              />
            <button className='signup_button'>Cadastrar</button>
          </form>
          <p className='signup_txt'>Já tem cadastro? <Link to='/'>Clique aqui!</Link></p>
        </div>
      </div>
    );
  }