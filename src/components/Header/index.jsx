import {useContext} from 'react'
import {Link} from "react-router-dom"

import UserContext from '../../contexts/UserContext';

import styled from "styled-components"

export default function Header() {
  const {userImage} = useContext(UserContext)

  return (
    <HeaderSection userImage={userImage}>
      <Link to="/">
        <h1>TrackIt</h1>
      </Link>
      <div className="image"></div>
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
  width: 100%;

  height: 70px;

  background-color: var(--header-blue);

  a {
    text-decoration: none;
  }

  h1 {
    color: #fff;
    font-family: 'Playball', cursive;
    font-size: 39px;
  }

  div {
    border-radius: 50%;
    /* background-color: #fff; */
    background-image: url(${props => props.userImage});
    background-size: contain;

    width: 51px;
    height: 51px;
  }
`