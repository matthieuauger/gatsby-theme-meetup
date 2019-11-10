import React from 'react'
import { Link } from 'gatsby'
import StyledButton from './Button.style'

const Button = ({ url, text, type, internal = false }) => (
  <StyledButton type={type}>
    {!internal && <a href={url}>{text}</a>}

    {internal && <Link to={url}>{text}</Link>}
  </StyledButton>
)

export default Button
