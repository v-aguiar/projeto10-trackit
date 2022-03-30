import {Link} from "react-router-dom";

import Button from "../Button";

export default function SignUp() {
  return (
    <section className="SignUp">
      <form >
        <label className="sr-only" htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" required />
        <label className="sr-only" htmlFor="password">Senha</label>
        <input type="password" placeholder="Senha" name="password" required />
        <label className="sr-only" htmlFor="username">Nome</label>
        <input type="text" placeholder="Nome" name="username" required />
        <label className="sr-only" htmlFor="photo">Foto do usuário</label>
        <input type="url" name="photo" placeholder="Foto" required />

        <Button value="Cadastrar" />
      </form>
      <Link to="/">
        <p>Já é cadastrado? Faça login!</p>
      </Link>
    </section>
  )
}

