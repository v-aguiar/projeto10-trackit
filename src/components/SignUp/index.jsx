import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";

import Button from "../Button";
import Input from "../Input";

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  const navigate = useNavigate()

  function validateSignUp(e) {
    e.preventDefault()

    setLoading(true)

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

    console.log("data: ", data)

    const request = axios.post(URL, data)
    request.then(() => {
      console.log("Signed Up!")
      navigate("/")
    })
    request.catch((err) => {
      console.error(err.response)
      alert("Deu ruim, tente novamente!")
      setLoading(false)
    })

    // email: "pracatum@teste.com"
    // image: "https://pracatum.png"
    // name: "Pracatum"
    // password: "pracatum"
  }

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value

    setData({...data, [key]: value})
  }

  return (
    <section className="SignUp">
      <form onSubmit={validateSignUp} >
        <label className="sr-only" htmlFor="email">Email</label>
        <Input onChange={handleChange("email")} value={data.email} type="email" placeholder="Email" id="email" disabled={loading ? true : false} />
        <label className="sr-only" htmlFor="password">Senha</label>
        <Input onChange={handleChange("password")} value={data.password} type="password" placeholder="Senha" id="password" disabled={loading ? true : false} />
        <label className="sr-only" htmlFor="username">Nome</label>
        <Input onChange={handleChange("name")} value={data.name} type="text" placeholder="Nome" id="username" disabled={loading ? true : false} />
        <label className="sr-only" htmlFor="image">Foto do usuário</label>
        <Input onChange={handleChange("image")} value={data.image} type="url" id="image" placeholder="Foto" disabled={loading ? true : false} />

        <Button value={loading ? "" : "Cadastrar"}></Button>
      </form>
      <Link to="/">
        <p>Já é cadastrado? Faça login!</p>
      </Link>
    </section>
  )
}

