import styled from "styled-components"

import checkIcon from "../../assets/img/checkmark-icon.svg"

export default function TodayHabit({currentSequence, done, highestSequence, id, name}) {
  return (
    <HabitCard done={done}>
      <div className="description">
        <p className="title">{name}</p>
        <small>Sequência atual: {currentSequence}</small>
        <small>Seu recorde: {highestSequence}</small>
      </div>

      <div className="check">
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