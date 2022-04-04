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
  const [habitsAmount, setHabitsAmount] = useState(new Map())
  const [createdHabits, setCreatedHabits] = useState([])
  const [counter, setCounter] = useState(0)

  const {token, setToken, setUserImage} = useContext(UserContext)

  // eslint-disable-next-line
  useEffect(() => {checkLocalToken()}, [])
  // eslint-disable-next-line
  useEffect(() => fetchHabits(), [counter])

  function checkLocalToken() {
    const localToken = localStorage.getItem("token")
    const localImage = localStorage.getItem("image")

    if(localToken.length > 0) {
      setToken(localToken)
      setUserImage(localImage)
      reload()
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

  function addCount() {
    setCounter(counter + 1)

    addHabit(`habit${counter}`, counter)
  }

  function addHabit(k, v) {
    setHabitsAmount(new Map(habitsAmount.set(k, v)))
  }

  function removeHabit() {
    habitsAmount.delete(`habit${counter - 1}`, counter - 1)
    setCounter(counter - 1)
  }

  function reload() {
    setCounter(counter + 1)
    setCounter(counter - 1)
  }

  return (
    <>
      <Header />
      <HabitsSection>
        <SectionHeader>
          <h2>Meus hábitos</h2>
          <span onClick={addCount} className="plusBtn">
            <Button value="+" />
          </span>
        </SectionHeader>
        {
          [...habitsAmount.values()].map(value => {
            const uniqueKey = uuidv4()
            return <CreateHabit key={uniqueKey} removeHabit={removeHabit} />
          })
        }

        {
          (createdHabits.length > 0)
            ? createdHabits.map(({name, days, id}) => {
              const uniqueKey = uuidv4()
              return <Habit reload={reload} name={name} days={days} id={id} key={uniqueKey} />
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