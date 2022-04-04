import {useState, useContext, useEffect} from "react"

import UserContext from "../../contexts/UserContext"
import {Calendar} from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import axios from "axios"

import styled from "styled-components"

import Header from "../Header"
import Footer from "../Footer"
import dayjs from "dayjs"

export default function History() {
  const [value, setValue] = useState(new Date())
  const [history, setHistory] = useState([])

  const {setUserImage, setToken, token} = useContext(UserContext)

  // eslint-disable-next-line
  useEffect(() => checkLocalToken(), [])
  // eslint-disable-next-line
  useEffect(() => fetchHistory(), [token])

  function checkLocalToken() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    const localToken = localStorage.getItem("token")
    const localImage = localStorage.getItem("image")

    if(localToken.length > 0) {
      setToken(localToken)
      setUserImage(localImage)
    }
  }

  function fetchHistory() {
    if(token !== null && token.length > 0) {
      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }

      const request = axios.get(URL, config)
      request.then((response) => {
        setHistory(response.data)
      })
      request.catch((err) => console.error(err.response))
    }
  }

  function handleChange(nextValue) {
    setValue(nextValue)
  }

  function tileClassName({date}) {
    if(history.length > 0) {
      const matchDay = history.filter(({day, habits}) => {
        return day === dayjs(date).format("DD/MM/YYYY")
      })

      if(matchDay !== undefined && matchDay.length > 0) {
        let isDone = true

        const {habits} = matchDay[0]

        habits.forEach(({done}) => {
          if(done) {
            isDone = isDone && true
          } else {
            isDone = false
          }
        })

        return isDone ? "--done" : "--notDone"
      }
      return
    }
  }

  return (
    <>
      <Header />
      <HistorySection>
        <SectionHeader>
          <h2>Histórico</h2>
        </SectionHeader>
        <Calendar locale="pt-BR" tileClassName={tileClassName} onChange={handleChange} value={value} />
      </HistorySection>
      <Footer />
    </>
  )
}

// ********************* Component Styles 

const HistorySection = styled.section`
  height: 100%;
  width: 100%;

  margin-top: 70px;
  padding: 22px 18px 90px;

  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg-color);

  .react-calendar {
    background-color: #fff;
    height: 460px;
    max-width: 370px;

    padding: 15px 10px;

    border: none;
    border-radius: 8px;

    abbr {
      text-decoration: none;
    }

    &__month-view__days {
      height: 85%;
    }

    &__navigation__label {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
    }

    &__tile--now {
      border-radius: 0 !important;
      background-color: var(--today-yellow) !important;
      color: #000;
      &:hover.--done {
        background-color: var(--checked-green) !important;
      }
      &:hover.--notDone {
        background-color: var(--fail-red);
      }
    }

    &__tile {
      font-size: 14px;

      border-radius: 50%;
      height: 12%;

      transition: all .5s;
    }

    &__viewContainer,
    &__month-view ,
    &__month-view>div ,
    &__month-view>div>div {
      height: 100%;
    }

    .--done {
      background-color: var(--checked-green);
    }

    .--notDone {
      background-color: var(--fail-red);
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