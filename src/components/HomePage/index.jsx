import {Link, useLocation} from "react-router-dom";

import styled from "styled-components";

import LogIn from "../LogIn";
import SignUp from "../SignUp";

import logo from "../../assets/img/logo-trackit.svg"

export default function HomePage() {
  const location = useLocation()

  return (
    <HomeSection className="HomePage">
      <Link to="/">
        <img src={logo} alt="TrackIt Logo" className="logo" />
      </Link>

      {!(location.pathname.includes("cadastro")) ? <LogIn /> : <SignUp />}
    </HomeSection>
  )
}

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding: 5%;

  .logo {
    margin-top: 68px;
    margin-bottom: 33px;
  }

  input {
    height: 45px;
    width: 100%;

    margin-bottom: 6px;
    padding: 0 11px;

    outline: none;
    border-radius: 5px;
    border: 1px solid var(--border-grey);

    transition: .7s;

    &::placeholder {
      color: var(--border-grey);
    }

    &:last-child {
      margin-bottom: 25px;
    }

    &:hover {
      border: 2px solid var(--btn-blue);
    }
  }

  a {
    color: var(--btn-blue);
  }
`