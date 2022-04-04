import {useState, useEffect, useContext} from "react"

import UserContext from "../../contexts/UserContext"

import {v4 as uuidv4} from 'uuid';
import axios from "axios"

import styled from "styled-components"

import Header from "../Header"
import Button from "../Button"
import Footer from "../Footer"
import Habit from "../Habit"
import CreateHabit from "../CreateHabit"

export default function Habits() {
  const [createdHabits, setCreatedHabits] = useState([])
  const [reload, setReload] = useState(true)
  const [openCreateHabit, setOpenCreateHabit] = useState(false)
  const [hideCreateHabit, setHideCreateHabit] = useState(false)

  const {token, setToken, setUserImage} = useContext(UserContext)

  // eslint-disable-next-line
  useEffect(() => {checkLocalToken()}, [])
  // eslint-disable-next-line
  useEffect(() => fetchHabits(), [reload])

  function checkLocalToken() {
    const localToken = localStorage.getItem("token")
    const localImage = localStorage.getItem("image")

    if(localToken.length > 0) {
      setToken(localToken)
      setUserImage(localImage)
      reloadComponent()
    }
  }

  function fetchHabits() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const request = axios.get(URL, config)
    request.then((response) => {
      setCreatedHabits(response.data)
    })
    request.catch((err) => {
      console.error(err.response)
    })
  }

  function openCreate() {
    (hideCreateHabit) ? setHideCreateHabit(false) : setOpenCreateHabit(true)
  }

  function removeHabit(e) {
    e.preventDefault()

    setHideCreateHabit(true)
  }

  function reloadComponent() {
    setReload(!reload)
  }

  return (
    <>
      <Header />
      <HabitsSection>
        <SectionHeader hideCreateHabit={hideCreateHabit}>
          <h2>Meus hábitos</h2>
          <span onClick={openCreate} className="plusBtn">
            <Button value="+" />
          </span>
        </SectionHeader >
        {
          (openCreateHabit) ? <CreateHabit hideCreateHabit={hideCreateHabit} removeHabit={removeHabit} setOpenCreateHabit={setOpenCreateHabit} /> : <></>




          // [...habitsAmount.values()].map(value => {
          //   const uniqueKey = uuidv4()
          //   return <CreateHabit key={uniqueKey} removeHabit={removeHabit} />
          // })
        }

        {
          (createdHabits.length > 0)
            ? createdHabits.map(({name, days, id}) => {
              const uniqueKey = uuidv4()
              return <Habit reload={reloadComponent} name={name} days={days} id={id} key={uniqueKey} />
            })
            : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        }
      </HabitsSection>
      <Footer />
    </>
  )
}

// ********************* Component Styles *********************

const HabitsSection = styled.section`
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
`