import styled from "styled-components"

export default function Button({value}) {
  return (
    <Input type="submit" value={value} />
  )
}

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;

  color: #fff;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Lexend Deca', sans-serif;

  height: 35px;
  width: 100%;

  background-color: var(--btn-blue);

  transition: all .8s;

  &:hover {
    cursor: pointer;
    
    filter: brightness(1.2);
  }
`