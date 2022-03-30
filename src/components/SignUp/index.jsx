import {Link} from "react-router-dom";

import Button from "../Button";
import Input from "../Input";

export default function SignUp() {
  return (
    <section className="SignUp">
      <form >
        <label className="sr-only" htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" name="email" />
        <label className="sr-only" htmlFor="password">Senha</label>
        <Input type="password" placeholder="Senha" name="password" />
        <label className="sr-only" htmlFor="username">Nome</label>
        <Input type="text" placeholder="Nome" name="username" />
        <label className="sr-only" htmlFor="photo">Foto do usuário</label>
        <Input type="url" name="photo" placeholder="Foto" />

        <Button value="Cadastrar" />
      </form>
      <Link to="/">
        <p>Já é cadastrado? Faça login!</p>
      </Link>
    </section>
  )
}

