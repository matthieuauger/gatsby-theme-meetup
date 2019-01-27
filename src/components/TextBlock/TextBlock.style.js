import styled from 'styled-components'

const StyledTextBlock = styled.div`
  max-width: 50%;
  margin: auto;
  margin-top: 50px;
  font-size: 20px;
  line-height: 1.3em;
  
  h2 {
    font-weight: normal;
    margin-bottom: 40px;
  }

  a {
    font-weight: bold;
    box-shadow: rgb(237, 28, 64, .4) 0px -6px 0px inset;
    transition: box-shadow 0.3s ease-in-out 0s;
  }

  a:hover {
    box-shadow: rgb(237, 28, 64, .4) 0px -24px 0px inset;
  }

  .call-to-action__neutral {
    display: flex;
    padding: 0 60px;
  }

  .call-to-action__neutral a {
    display: block;
    padding: 18px 48px;
    font-size: 1.3rem;
    color: #333333;
    text-decoration: none;
    border: 4px solid #333333;
    margin: auto;
    box-shadow: none;
  }

  .call-to-action__neutral a:hover {
    background-color: #333333;
    color: #FCFCFC; 
  }
`

export default StyledTextBlock