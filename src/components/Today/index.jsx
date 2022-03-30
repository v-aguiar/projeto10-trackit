import styled from "styled-components"

import Header from "../Header"
import Button from "../Button"
import Footer from "../Footer"

export default function Today() {
  return (
    <TodaySection>
      <Header />
      <SectionHeader>
        <span className="today-header">
          <h2>Quarta, 30/03</h2>
          <small>Nenhum hábito concluído ainda</small>
        </span>
        <span className="plusBtn">
          <Button value="+" />
        </span>
      </SectionHeader>
      <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      <Footer />
    </TodaySection>
  )
}

// ********************* Component Styles 

const TodaySection = styled.section`
  height: 100vh;
  width: 100%;

  margin-top: 70px;
  margin-bottom: 28px;
  padding: 22px 18px 0;

  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 18px;

  background-color: var(--bg-color);

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

  .today-header {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: flex-start;

    small {
      margin-top: 10px;
      font-size: 17px;
      
      color: var(--text-grey);
    }
  }
`