import {useState} from "react"

import {Calendar} from "react-calendar"
import 'react-calendar/dist/Calendar.css'

import styled from "styled-components"

import Header from "../Header"
import Footer from "../Footer"
import dayjs from "dayjs"

export default function History() {
  const [value, setValue] = useState(new Date())

  function handleChange(nextValue) {
    const ihuu = dayjs(nextValue).format("dddd, DD/MM")
    console.log("nextValue: ", ihuu)
    setValue(nextValue)
  }

  return (
    <HistorySection>
      <Header />
      <SectionHeader>
        <h2>Histórico</h2>
      </SectionHeader>
      <Calendar locale="pt-BR" onChange={handleChange} value={value} />
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

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg-color);

  .react-calendar {
    background-color: #fff;

    height: 402px;
    width: 335px;

    padding: 15px 10px;

    border: none;
    border-radius: 8px;

    abbr {
      text-decoration: none;
    }

    .react-calendar__navigation__label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-calendar__tile--now {
      border-radius: 0 !important;
    }

    .react-calendar__tile {
      border-radius: 50%;
    }
  }

  h2 {
    color: var(--header-blue);
    font-size: 23px;
  }

  p {
    line-height: 23px;
  }
`

const SectionHeader = styled.div`
  align-self: flex-start;
  margin-bottom: 28px;
`