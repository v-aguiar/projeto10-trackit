import {useContext} from "react";

import UserContext from "../../contexts/UserContext";

import {v4 as uuidv4} from "uuid";
import axios from "axios"

import styled from "styled-components";

import trashIcon from "../../assets/img/trash-icon.svg"

export default function Habit({name, days, id, reload}) {
  const {weekdays, token} = useContext(UserContext)

  function deleteApiHabit() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const confirmDelete = window.confirm("Você deseja mesmo excluir esse hábito?")

    if(confirmDelete) {
      const request = axios.delete(URL, config)
      request.then((response) => {
        reload()
      })
      request.catch((err) => console.error(err.response))
    } else {
      return
    }
  }

  return (
    <CreatedHabit>
      <h3>{name}</h3>
      <ul className="day-inputs">
        {weekdays.map(({dayKey, value}) => {
          const isChecked = days.includes(value)
          const uniqueId = uuidv4()
          return isChecked ? <li className="--checked" key={uniqueId}>{dayKey}</li> : <li key={uniqueId}>{dayKey}</li>
        })}
      </ul>
      <img onClick={deleteApiHabit} src={trashIcon} alt="Remove habit" />
    </CreatedHabit>
  )
}

// ***************** Component Styles

const CreatedHabit = styled.article`
  background-color: #fff;
  width: 100%;
  height: 91px;

  padding: 19px 18px;
  margin-bottom: 10px;

  position: relative;

  .day-inputs {
    display: flex;

    li {
      outline: none;
      border: solid 2px var(--border-grey);
      border-radius: 5px;

      color: var(--border-grey);
      font-size: 20px;
      font-weight: 400;
      font-family: 'Lexend Deca', sans-serif;

      height: 35px;
      width: 35px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 10px 0 10px 5px;

      background-color: #fff;

      transition: all .5s;

      &:first-child {
        margin-left: 0;
      }

      &.--checked {
        background-color: var(--border-grey);
        color: #fff;
      }
    }
  }

  img {
    position: absolute;
    top: 11px;
    right: 10px;
    transition: .5s;

    &:hover {
      cursor: pointer;
      
      width: 15px;

    }
  }
`