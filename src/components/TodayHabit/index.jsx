import {useContext} from "react"

import UserContext from "../../contexts/UserContext"
import axios from "axios"

import styled from "styled-components"

import checkIcon from "../../assets/img/checkmark-icon.svg"

export default function TodayHabit({currentSequence, done, highestSequence, id, name, reloadHabits, updateDoneRate}) {
  const {token} = useContext(UserContext)

  function handleHabitCheck() {
    done ? uncheckHabit() : checkHabit()
  }

  function checkHabit() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const request = axios.post(URL, {}, config)
    request.then((response) => {
      reloadHabits()
    })
    request.catch((err) => console.error(err.response))
  }

  function uncheckHabit() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const request = axios.post(URL, {}, config)
    request.then((response) => {
      reloadHabits()
    })
    request.catch((err) => console.error(err.response))
  }

  return (
    <HabitCard done={done} current={currentSequence} highest={highestSequence} >
      <div className="description">
        <p className="title">{name}</p>
        <small className="current">Sequência atual: {currentSequence}</small>
        <small className="highest">Seu recorde: {highestSequence}</small>
      </div>

      <div onClick={handleHabitCheck} className="check">
        <img src={checkIcon} alt="Check button" />
      </div>
    </HabitCard>
  )
}

const HabitCard = styled.article`
  height: 94px;
  width: 100%;

  padding: 13px 15px;
  margin-bottom: 10px;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .description {
    display: flex;
    flex-direction: column;

    color: var(--text-black);

    .title {
      font-size: 20px;
      margin-bottom: 7px;
    }

    small {
      font-size: 13px;
    }

    .current {
      color: ${props => props.done ? "var(--checked-green)" : "var(--text-black)"};
    }

    .highest {
      color: ${props => (props.current > 0 && props.current === props.highest) ? "var(--checked-green)" : "var(--text-black)"};
    }
  }

  .check {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 69px;
    width: 69px;

    border-radius: 5px;
    border: solid 1px var(--border-grey);

    background-color: ${props => props.done ? "var(--checked-green)" : "var(--unchecked-grey)"};

    transition: filter .5s;

    &:hover {
      cursor: pointer;
      filter: brightness(.9);
    }

    img {
      width: 35.1px;
    }
  }

`