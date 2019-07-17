import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: #acc99d;
  margin: 50px auto 0;
  padding: 50px 0;
  text-align: center;

  p {
    color: #333333;
    font-size: 20px;
    margin-bottom: 10px;
  }

  a {
    font-weight: bold;
    box-shadow: rgba(237, 28, 64, 0.4) 0px -6px 0px inset;
    transition: box-shadow 0.3s ease-in-out 0s;
  }

  a:hover {
    box-shadow: rgba(237, 28, 64, 0.4) 0px -24px 0px inset;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 30px;

    p {
      margin-top: 0;
    }
  }
`

export default StyledFooter
