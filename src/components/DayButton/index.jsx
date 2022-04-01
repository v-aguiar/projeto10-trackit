import styled from "styled-components"

export default function DayButton({dayKey, value, handleDaysChange, habitsDays, isLoading}) {
  const className = habitsDays.includes(value) ? "--checked" : ""

  return (
    <DayCheck isLoading={isLoading} >
      <div className={className} onClick={isLoading ? () => {} : () => handleDaysChange(value)}>{dayKey}</div>
    </DayCheck >
  )
}

// ********************* Component Styles *********************

const DayCheck = styled.li`
  div {
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

      &:hover {
        cursor: ${props => props.isLoading ? "default" : "pointer"};
      }

      &.--checked {
        background-color: var(--border-grey);
        color: #fff;
      }
  }
`