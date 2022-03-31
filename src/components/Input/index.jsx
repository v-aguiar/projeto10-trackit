import styled from "styled-components"

export default function Input({name, placeholder, type, disabled = false, onChange = () => {}}) {
  return (
    <InputComponent onChange={onChange} type={type} name={name} placeholder={placeholder} disabled={disabled} required />
  )
}

const InputComponent = styled.input`
    height: 45px;
    width: 100%;

    margin-bottom: 6px;
    padding: 0 11px;

    outline: none;
    border-radius: 5px;
    border: 2px solid var(--border-grey);

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

    &:disabled {
      background-color: var(--border-grey);
    }

    &:disabled:hover {
      outline: none;
      border: 1px solid var(--border-grey);
    }
`