import styled from 'styled-components'

const StyledTextBlock = styled.div`
  max-width: 55%;
  margin: auto;
  margin-top: 50px;
  font-size: 20px;
  line-height: 1.3em;
  margin-bottom: 50px;
  
  h2 {
    font-weight: normal;
    margin-bottom: 40px;
    text-align: center;
  }

  .text-block-content a {
    font-weight: bold;
    box-shadow: rgb(237, 28, 64, .4) 0px -6px 0px inset;
    transition: box-shadow 0.3s ease-in-out 0s;
  }

  .text-block-content a:hover {
    box-shadow: rgb(237, 28, 64, .4) 0px -24px 0px inset;
  }

  .call-to-action {
    margin-top: 50px;
    display: flex;
    padding: 0 60px;
  }

  .call-to-action a {
    margin: auto;
  }
`

export default StyledTextBlock