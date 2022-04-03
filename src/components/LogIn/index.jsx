import {useState, useContext, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

import UserContext from '../../contexts/UserContext';

import axios from 'axios';

import Input from "../Input";
import Button from "../Button";

export default function LogIn() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  const {setUserImage, setToken} = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})

    const localToken = localStorage.getItem("token")
    const localImage = localStorage.getItem("image")

    if(localToken !== null && localToken.length > 0) {
      setToken(localToken)
      setUserImage(localImage)
      navigate("/hoje")
    }
  }, [])

  function handleLogin(e) {
    e.preventDefault()

    setLoading(true)

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const request = axios.post(URL, data)
    request.then((response) => {
      const {image, token} = response.data

      setToken(token)
      setUserImage(image)

      localStorage.setItem("token", token)
      localStorage.setItem("image", image)

      navigate("/hoje")
    })
    request.catch((err) => {
      console.error(err.response)
      alert("Deu ruim, tente novamente!")
      setLoading(false)
    })
  }

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value

    setData({...data, [key]: value})
  }

  return (
    <section className="LogIn">
      <form onSubmit={handleLogin} >
        <label className="sr-only" htmlFor="email">Email</label>
        <Input onChange={handleChange("email")} value={data.email} type="email" placeholder="Email" name="email" disabled={loading ? true : false} />
        <label className="sr-only" htmlFor="password">Senha</label>
        <Input onChange={handleChange("password")} value={data.password} type="password" placeholder="Senha" name="password" disabled={loading ? true : false} />

        <Button value={loading ? "" : "Entrar"} />
      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </section>
  )
}