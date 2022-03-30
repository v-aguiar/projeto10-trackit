import {Link} from "react-router-dom";

import Button from "../Button";
import Input from "../Input";

export default function LogIn() {
  return (
    <section className="LogIn">
      <form >
        <label className="sr-only" htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" name="email" />
        <label className="sr-only" htmlFor="password">Senha</label>
        <Input type="password" placeholder="Senha" name="password" />

        <Button value="Entrar" ></Button>
      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </section>
  )
}