import {ThreeDots} from "react-loader-spinner"

import styled from "styled-components"

export default function Button({value}) {
  return (
    <>
      {
        value
          ?
          <Input type="submit" value={value} />
          :
          <Loading type="submit" >
            <ThreeDots color="white" height="10" />
          </Loading>
      }
    </>
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

  margin-bottom: 15px;

  background-color: var(--btn-blue);

  transition: all .8s;

  &:hover {
    cursor: pointer;
    
    filter: brightness(1.2);
  }
`

const Loading = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;

  height: 35px;
  width: 100%;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--btn-blue);

  transition: all .8s;
`