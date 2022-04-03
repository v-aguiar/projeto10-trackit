import {useContext, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"

import UserContext from '../../contexts/UserContext';

import styled from "styled-components"

export default function Header() {
  const [isLogout, setIsLogout] = useState(false)

  const {userImage} = useContext(UserContext)

  const navigate = useNavigate()

  function showLogout() {
    setIsLogout(!isLogout)
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("image")

    navigate("/")

    setIsLogout(false)
  }

  return (
    <HeaderSection userImage={userImage}>
      <Link to="/">
        <h1>TrackIt</h1>
      </Link>
      <div onClick={showLogout} className="image"></div>

      {isLogout ? <div onClick={logout} className="logout">SAIR</div> : <></>}

    </HeaderSection>
  )
}

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 18px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 70px;

  background-color: var(--header-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  .logout {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-size: 10px;
    color: var(--fail-red);

    position: fixed;
    top: 70px;
    right: 10px;

    height: 30px;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .5s;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: #fff;
    font-family: 'Playball', cursive;
    font-size: 39px;
  }

  .image {
    border-radius: 50%;
    background-image: url(${props => props.userImage});
    background-size: contain;

    width: 51px;
    height: 51px;

    &:hover {
      cursor: pointer;
    }
  }
`