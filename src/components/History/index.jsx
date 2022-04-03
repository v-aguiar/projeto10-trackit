import {Calendar} from "react-calendar"
import styled from "styled-components"

import Header from "../Header"
import Button from "../Button"
import Footer from "../Footer"

export default function History() {
  return (
    <HistorySection>
      <Header />
      <SectionHeader>
        <h2>Histórico</h2>
        <span className="plusBtn">
          <Button value="+" />
        </span>
      </SectionHeader>
      <Calendar />
      <Footer />
    </HistorySection>
  )
}

// ********************* Component Styles 

const HistorySection = styled.section`
  height: 100vh;
  width: 100%;

  margin-top: 70px;
  margin-bottom: 28px;
  padding: 22px 18px 0;

  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 18px;

  background-color: var(--bg-color);

  .Calendar {
    background-color: #fff;

    height: 402px;
    width: 100%;
  }

  h2 {
    color: var(--header-blue);
    font-size: 23px;
  }

  span {
    width: 35px;

    border: none;
    border-radius: 5px;
    
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    line-height: 23px;
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;
`