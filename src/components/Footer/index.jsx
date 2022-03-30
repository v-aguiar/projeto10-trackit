import {Link} from "react-router-dom";

import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

import styled from "styled-components"

export default function Footer() {
  const percentage = 60

  return (
    <FooterSection>
      <Link to="/habitos">Hábitos</Link>
      <CircularProgressbar className="progress-bar" background={true} backgroundPadding="7" value={percentage} text="Hoje" />
      <Link to="/historico">Histórico</Link>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  
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