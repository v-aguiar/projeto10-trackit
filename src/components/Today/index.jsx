import {useContext, useState, useEffect} from "react"

import UserContext from "../../contexts/UserContext"
import axios from "axios"
import dayjs from "dayjs"

import styled from "styled-components"

import Header from "../Header"
import Footer from "../Footer"
import TodayHabit from "../TodayHabit"

export default function Today() {
  const [todayHabits, setTodayHabits] = useState([])
  const [reload, setReload] = useState(true)
  const [doneRateValue, setDoneRateValue] = useState(0)

  const {token, progress, setProgress, setUserImage, setToken} = useContext(UserContext)

  // eslint-disable-next-line
  useEffect(() => checkLocalToken(), [])
  // eslint-disable-next-line
  useEffect(() => fetchTodayHabits(), [reload, progress])

  function checkLocalToken() {
    const localToken = localStorage.getItem("token")
    const localImage = localStorage.getItem("image")

    if(localToken.length > 0) {
      setToken(localToken)
      setUserImage(localImage)
      setReload(!reload)
    }
  }

  // Change dayjs weekday locale names language, so they are displayed in pt-br
  const updateLocale = require('dayjs/plugin/updateLocale')
  dayjs.extend(updateLocale)

  dayjs.updateLocale('en', {
    weekdays: [
      "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
    ]
  })

  const formatedDate = dayjs().format('dddd, DD/MM')

  function fetchTodayHabits() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const request = axios.get(URL, config)
    request.then((response) => {
      setTodayHabits(response.data)
      updateDoneRate(response.data)
    })
    request.catch((err) => {console.error(err.response)})
  }

  function reloadHabits() {
    setReload(!reload)
  }

  function updateDoneRate(currentHabits) {
    let sum = 0;
    if(currentHabits.length > 0) {
      currentHabits.forEach(({done}) => {
        if(done) sum += (100 / currentHabits.length)
      })
    }
    setDoneRateValue(sum)
    setProgress(sum)
  }

  return (
    <>
      <Header />
      <TodaySection>
        <SectionHeader>
          <span className="today-header">
            <h2>{formatedDate}</h2>
            {
              doneRateValue === 0
                ? <small>Nenhum hábito concluído ainda</small>
                : <small>{Math.floor(doneRateValue)}% dos hábitos concluídos</small>
            }

          </span>
        </SectionHeader>
        {
          (todayHabits.length > 0)
            ? todayHabits.map(({currentSequence, done, highestSequence, id, name}) => {
              return <TodayHabit reloadHabits={reloadHabits} done={done} id={id} key={id} currentSequence={currentSequence} highestSequence={highestSequence} name={name} />
            })
            : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        }
      </TodaySection>
      <Footer />
    </>
  )
}

// ********************* Component Styles 

const TodaySection = styled.section`
  width: 100%;
  height: 100%;

  margin-top: 70px;
  padding: 22px 18px 90px;

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