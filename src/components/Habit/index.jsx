import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";

export default function Habit() {


  function handleSubmit(e) {
    e.preventDefault()

    console.log("Habit data: ", e)
  }

  return (
    <AddHabit>
      <form onSubmit={handleSubmit} >
        <label className="sr-only" htmlFor="habit">Habit description</label>
        <Input type="text" placeholder="Nome do hábito" name="habit" />

        <ul className="day-inputs">
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="sunday" />
            <label htmlFor="sunday">
              D
            </label>
          </li>
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="monday" />
            <label htmlFor="monday">
              S
            </label>
          </li>
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="tuesday" />
            <label htmlFor="tuesday">
              T
            </label>
          </li>
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="wednesday" />
            <label htmlFor="wednesday">
              Q
            </label>
          </li>
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="thursday" />
            <label htmlFor="thursday">
              Q
            </label>
          </li>
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="friday" />
            <label htmlFor="friday">
              S
            </label>
          </li>
          <li>
            <input className="sr-only" type="checkbox" name="dayInput" id="saturday" />
            <label htmlFor="saturday">
              S
            </label>
          </li>
        </ul>

        <div className="habit-buttons">
          <a>Cancelar</a>
          <Button value="Salvar" />
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

      li {
        margin-right: 5px;
        background-color: transparent;

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

        input:checked + label{
          background-color: var(--border-grey);
          color: #fff;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  
    .habit-buttons {
      display: flex;
      align-items: center;

      align-self: flex-end;
  
      width: 180px;

      a {
        margin-right: 23px;
        color: var(--btn-blue);
      }
    }
  }
`