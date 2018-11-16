import styled from 'styled-components'

const StyledMeetupWidget = styled.div`
  margin: 40px auto;
  max-width: 480px;
  padding: 20px 40px 10px 40px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #979797;
  font-weight: 600;

  h2 {
    color: #43933E;
  }

  .widget-contents {
    display: flex;
    direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export default StyledMeetupWidget
