import {useEffect, useState, useContext} from "react";

import UserContext from "../../contexts/UserContext";

import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';

import Button from "../Button";
import Input from "../Input";
import DayButton from "../DayButton";
import axios from "axios";

export default function Habit({removeHabit}) {
  const [habitsName, setHabitsName] = useState({name: ""})
  const [habitsDays, setHabitsDays] = useState([])
  const [weekdays, setWeekdays] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const {userName, token} = useContext(UserContext)

  console.log("habitsDays: ", habitsDays)
  console.log("habitsName: ", habitsName)

  useEffect(() => {
    setWeekdays([
      {dayKey: "D", value: 0},
      {dayKey: "S", value: 1},
      {dayKey: "T", value: 2},
      {dayKey: "Q", value: 3},
      {dayKey: "Q", value: 4},
      {dayKey: "S", value: 5},
      {dayKey: "S", value: 6}
    ])
  }, [])

  function handleChange(e) {
    e.preventDefault()

    const value = e.target.value

    setHabitsName({...habitsName, name: value})
  }

  function postHabit() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const body = {
      name: habitsName.name,
      days: habitsDays
    }

    console.log(body)

    const request = axios.post(URL, body, config)
    request.then((response) => {
      console.log("success: ", response)
      removeHabit()
      setIsLoading(false)
    })
    request.catch((err) => {
      console.error(err.response)
      setIsLoading(false)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    postHabit()
  }

  return (
    <AddHabit>
      <form onSubmit={handleSubmit} >
        <label className="sr-only" htmlFor="habit">Habit description</label>
        <Input onChange={handleChange} value={habitsName} type="text" placeholder="Nome do hábito" name="habit" disabled={isLoading ? true : false} />

        <ul className="day-inputs">
          {weekdays.map(({dayKey, value}) => {
            const id = uuidv4();

            return <DayButton habitsDays={habitsDays} setHabitsDays={setHabitsDays} key={id} id={id} dayKey={dayKey} value={value} />
          })}
        </ul>

        <div className="habit-buttons">
          <a onClick={removeHabit}>Cancelar</a>
          <Button value={isLoading ? "" : "Salvar"} />
        </div>
      </form>
    </AddHabit>
  )
}

// ***************** Component Styles
const AddHabit = styled.section`
  background-color: #fff;
  width: 100%;
  height: 180px;

  padding: 19px 18px;
  margin-bottom: 30px;

  form {
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
    .day-inputs {
      display: flex;
    }
  
    .habit-buttons {
      display: flex;
      align-items: center;

      align-self: flex-end;
  
      width: 180px;

      a {
        margin-right: 23px;
        color: var(--btn-blue);

        &:hover {
          cursor: pointer;
        }
      }

      input { 
        margin-bottom: 0;
      }
    }
  }
`