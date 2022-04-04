import {useState, useContext} from "react";

import UserContext from "../../contexts/UserContext";

import {v4 as uuidv4} from 'uuid';
import axios from "axios";

import styled from "styled-components";

import Button from "../Button";
import Input from "../Input";
import DayButton from "../DayButton";

export default function CreateHabit({setOpenCreateHabit, removeHabit, hideCreateHabit}) {
  const [habitsName, setHabitsName] = useState({name: ""})
  const [habitsDays, setHabitsDays] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState("")

  const {token, weekdays} = useContext(UserContext)

  function handleChange(e) {
    e.preventDefault()

    const value = e.target.value

    setHabitsName({...habitsName, name: value})
  }

  function handleDaysChange(value) {
    if(!habitsDays.includes(value)) {
      setHabitsDays([...habitsDays, value])
      setErrors("")
    } else {
      const filteredArray = habitsDays.filter((habitDay) => habitDay !== value)
      setHabitsDays(filteredArray)
    }
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

    const request = axios.post(URL, body, config)
    request.then(() => {
      setOpenCreateHabit(false)
      setIsLoading(false)
    })
    request.catch((err) => {
      console.error(err.response)
      alert("Ops, deu ruim! Por favor, tente novamente...")
      setIsLoading(false)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(habitsDays.length > 0) {
      setIsLoading(true)
      postHabit()
    } else {
      setErrors("Selecione pelo menos um dia...")
    }
  }

  return (
    <AddHabit hideCreateHabit={hideCreateHabit} >
      <form onSubmit={handleSubmit} >
        <label className="sr-only" htmlFor="habit">Habit description</label>
        <Input onChange={handleChange} value={habitsName} type="text" placeholder="Nome do hábito" name="habit" disabled={isLoading ? true : false} />
        {errors ? <small className="err">{errors}</small> : <></>}

        <ul className="day-inputs">
          {weekdays.map(({dayKey, value}) => {
            const id = uuidv4();
            return <DayButton isLoading={isLoading} handleDaysChange={handleDaysChange} habitsDays={habitsDays} key={id} dayKey={dayKey} value={value} />
          })}
        </ul>

        <div className="habit-buttons">
          <button onClick={(e) => removeHabit(e)}>Cancelar</button>
          <Button value={isLoading ? "" : "Salvar"} />
        </div>
      </form>
    </AddHabit>
  )
}

// ********************* Component Styles *********************

const AddHabit = styled.section`
  background-color: #fff;
  width: ${props => props.hideCreateHabit ? "1px !important" : "100%"};
  height: ${props => props.hideCreateHabit ? "1px !important" : "180px"};
  visibility: ${props => props.hideCreateHabit ? "hidden" : "visible"};
  opacity: ${props => props.hideCreateHabit ? "0" : "1"};
  position: ${props => props.hideCreateHabit ? "absolute !important" : "initial"};

  padding: 19px 18px;
  margin-bottom: 30px;

  form {
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .err {
      color: var(--fail-red);
      font-size: 10px;
    }
  
    .day-inputs {
      display: flex;

      li:first-child div {
        margin-left: 0;
      }
    }
  
    .habit-buttons {
      display: flex;
      align-items: center;

      align-self: flex-end;
  
      width: 180px;

      input {
        font-size: 18px;
        margin-left: 5px;
      }

      button{
        border: none;

        background-color: transparent;
        color: var(--btn-blue);
        font-size: 18px;

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