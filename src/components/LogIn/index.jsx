import {useState, useContext} from 'react';
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

  function validateLogin(e) {
    e.preventDefault()

    setLoading(true)

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const request = axios.post(URL, data)
    request.then((response) => {
      const {image, token} = response.data

      setToken(token)
      setUserImage(image)

      console.log("response: ", response.data)

      console.log("Logged In!")
      navigate("/hoje")
    })
    request.catch((err) => {
      console.error(err.response)
      alert("Deu ruim, tente novamente!")
      setLoading(false)
    })


    // TOKEN --> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEyMiwiaWF0IjoxNjQ4NzMxMzg2fQ.IK3DuXfr4tej5yY2k5H_aC2smSlGMWTR3YAOyx5MGvE"
  }

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value

    setData({...data, [key]: value})
  }

  return (
    <section className="LogIn">
      <form onSubmit={validateLogin} >
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