import {useContext} from 'react';
import {Link} from "react-router-dom";

import UserContext from '../../contexts/UserContext';
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

import styled from "styled-components"

export default function Footer() {
  const {progress} = useContext(UserContext)

  return (
    <FooterSection>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">
        <CircularProgressbar className="progress-bar" background={true} backgroundPadding="7" value={progress} text="Hoje" />
      </Link>
      <Link to="/historico">Histórico</Link>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  font-family: 'Lexend Deca', sans-serif;
  
  width: 100%;
  height: 70px;

  padding: 0 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  a {
    text-decoration: none;
    color: var(--btn-blue);
  }

  .CircularProgressbar {
    margin: auto;

    position: absolute;
    top: -50px; left: 0; bottom: 0; right: 0;

    max-width: 85px;
    width: 25%;

    transition: all .8s;

    .CircularProgressbar-path {
      stroke: #fff;
    }

    .CircularProgressbar-trail {
      stroke: transparent;
    }

    .CircularProgressbar-text {
      fill: #fff;
    }

    .CircularProgressbar-background {
      fill: var(--btn-blue);
    }

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
  }
`