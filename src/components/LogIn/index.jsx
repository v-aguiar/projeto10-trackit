import {Link} from "react-router-dom";

import Button from "../Button";

export default function LogIn() {
  return (
    <section className="LogIn">
      <form >
        <label className="sr-only" htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" required />
        <label className="sr-only" htmlFor="password">Senha</label>
        <input type="password" placeholder="Senha" name="password" required />

        <Button value="Entrar" />
      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </section>
  )
}