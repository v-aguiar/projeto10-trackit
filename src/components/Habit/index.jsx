import {useContext} from "react";

import UserContext from "../../contexts/UserContext";

import styled from "styled-components";
import axios from "axios"

import trashIcon from "../../assets/img/trash-icon.svg"


export default function Habit({name, days, id}) {
  const {weekdays, token} = useContext(UserContext)

  function deleteApiHabit() {
    console.log("id: ", id)

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

    console.log("URL: ", URL)

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const request = axios.delete(URL, config)
    request.then((response) => {
      console.log("Habit deleted!: ", response)
    })
    request.catch((err) => console.error(err.response))
  }

  return (
    <CreatedHabit>
      <h3>{name}</h3>
      <ul className="day-inputs">
        {weekdays.map(({dayKey, value}) => {
          const isChecked = days.includes(value)
          return isChecked ? <li className="--checked" key={id}>{dayKey}</li> : <li key={id}>{dayKey}</li>
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

        &.--checked {
          background-color: var(--border-grey);
          color: #fff;
        }

        &:hover {
          cursor: pointer;
        }
    }
  }

  img {
    position: absolute;
    top: 11px;
    right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`