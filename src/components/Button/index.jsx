import styled from "styled-components"

export default function Button({value}) {
  return (
    <Input type="submit" value={value} />
  )
}

const Input = styled.input`
  outline: none;
  border: none;

  color: #fff;
  font-size: 21px;

  height: 35px;
  width: 100%;

  background-color: var(--btn-blue);

  transition: all .8s;

  &:hover {
    cursor: pointer;
    
    filter: brightness(1.2);
  }
`