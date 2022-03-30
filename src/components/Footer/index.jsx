import styled from "styled-components"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
  const percentage = 60

  return (
    <FooterSection>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  

`