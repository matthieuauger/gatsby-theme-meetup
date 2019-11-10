import styled from 'styled-components'

const StyledButton = styled.div`
  ${({ type }) => {
    const primaryColor = '#ED1C40'
    const lightGrey = '#4A4A4A'
    const strongGrey = '#333333'
    const lightColor = '#FCFCFC'

    const colorScheme = {
      primary: {
        borderColor: primaryColor,
        hoverBackgroundColor: primaryColor,
      },
      neutral: {
        borderColor: strongGrey,
        hoverBackgroundColor: strongGrey,
      },
    }
    return `
    a {
      display: block;
      padding: 18px 45px;
      font-size: 1.3rem;
      font-weight: bold;
      color: ${lightGrey};
      text-decoration: none;
      border: 4px solid ${colorScheme[type].borderColor};
      box-shadow: none;
    }

    a:hover {
      background-color: ${colorScheme[type].hoverBackgroundColor};
      color: ${lightColor}; 
    }
  `
  }};
`

export default StyledButton
