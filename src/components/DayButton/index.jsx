import {useState} from "react"

import styled from "styled-components"

export default function DayButton({dayKey, value, id, habitsDays, setHabitsDays}) {
  const [isChecked, setIsChecked] = useState(false)

  const idFirst = id.split("-")[0]

  function handleChange(value) {
    setIsChecked(!isChecked)

    if(!habitsDays.includes(value)) {
      setHabitsDays([...habitsDays, value])
    }
  }

  return (
    <DayCheck >
      <input defaultChecked={isChecked} onChange={handleChange(value)} className="sr-only" type="checkbox" name="dayInput" id={idFirst} />
      <label htmlFor={idFirst}>
        {dayKey}
      </label>
    </DayCheck>
  )
}

const DayCheck = styled.li`
  margin-right: 5px;
  background-color: transparent;
  
  &:last-child {
    margin-right: 0;
  }

  input:checked + label{
    background-color: var(--border-grey);
    color: #fff;
  }

  label {
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
    margin-bottom: 15px;

    background-color: #fff;

    transition: all .5s;

    &:hover {
      cursor: pointer;
    }
  }
`