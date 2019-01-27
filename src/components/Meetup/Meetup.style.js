import styled from 'styled-components'

const StyledMeetup = styled.div`
  background-color: #F3DBD1;
  padding-top: 15px;
  padding-bottom: 30px;
  margin-bottom: 30px;

  .meetup-informations {
    display: flex;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 32px;
  }

  .meetup-name {
    padding: 30px;
  }

  .meetup-name h2 {
    margin: 0;
  }

  .meetup-informations-basic {
    width: 35%;
    border-right: 1px solid #B3B3B3;
  }

  .meetup-informations-basic-highlight {
    font-weight: bold;
  }

  .meetup-informations-basic-date {
    width: 70%;
    margin: auto;
    margin-bottom: 30px;
  }

  .meetup-informations-basic-place {
    width: 70%;
    margin: auto;
  }

  .meetup-informations-talks {
    width: 65%;
  }

  .meetup-informations-talks-one {
    width: 80%;
    margin: auto;
    margin-bottom: 30px;
  }

  .meetup-informations-talks-two {
    width: 80%;
    margin: auto;
  }

  .meetup-subscribe {
    display: flex;
    padding: 0 60px;
  }

  .meetup-subscribe a {
    display: block;
    padding: 18px 48px;
    font-size: 1.3rem;
    color: #4A4A4A;
    text-decoration: none;
    border: 4px solid #ED1C40;
    margin-left: auto;
  }

  .meetup-subscribe a:hover {
    background-color: #ED1C40;
    color: #FCFCFC; 
  }
`

export default StyledMeetup