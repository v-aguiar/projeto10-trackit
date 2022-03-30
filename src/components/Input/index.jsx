import styled from "styled-components"

export default function Input({name, placeholder, type}) {
  return (
    <InputComponent type={type} name={name} placeholder={placeholder} required />
  )
}

const InputComponent = styled.input`
    height: 45px;
    width: 100%;

    margin-bottom: 6px;
    padding: 0 11px;

    outline: none;
    border-radius: 5px;
    border: 1px solid var(--border-grey);

    transition: .7s;

    &::placeholder {
      color: var(--border-grey);
    }

    &:last-child {
      margin-bottom: 25px;
    }

    &:hover {
      border: 2px solid var(--btn-blue);
    }
`