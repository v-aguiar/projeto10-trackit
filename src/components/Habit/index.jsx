import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";

export default function Habit() {
  return (
    <AddHabit>
      <form >
        <label className="sr-only" htmlFor="habit">Habit description</label>
        <Input type="text" placeholder="Nome do hábito" name="habit" />

        <ul className="day-inputs">
          <li>
            <input type="radio" name="sunday" id="sunday" />
          </li>
          <li>
            <input type="radio" name="monday" id="monday" />
          </li>
          <li>
            <input type="radio" name="tuesday" id="tuesday" />
          </li>
          <li>
            <input type="radio" name="wednesday" id="wednesday" />
          </li>
          <li>
            <input type="radio" name="thursday" id="thursday" />
          </li>
          <li>
            <input type="radio" name="friday" id="friday" />
          </li>
          <li>
            <input type="radio" name="saturday" id="saturday" />
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