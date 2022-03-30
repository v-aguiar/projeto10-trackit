import {Link} from "react-router-dom"

import styled from "styled-components"

export default function Header() {
  return (
    <HeaderSection>
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
    background-color: #fff;

    width: 51px;
    height: 51px;
  }
`