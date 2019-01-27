import React from 'react';
import styled from 'styled-components'

const StyledMeetup = styled.div`
  ${(props) => `
    background-color: ${props.backgroundColor};
  `};
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
    text-align: center;
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
    width: 55%;
    margin: auto;
  }

  .meetup-informations-talks a {
    font-weight: bold;
    box-shadow: rgb(237, 28, 64, .4) 0px -5px 0px inset;
    transition: box-shadow 0.3s ease-in-out 0s;
  }

  .meetup-informations-talks a:hover {
    box-shadow: rgb(237, 28, 64, .4) 0px -28px 0px inset;
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
    font-weight: bold;
    border: 4px solid #ED1C40;
    margin-left: auto;
  }

  .meetup-subscribe a:hover {
    background-color: #ED1C40;
    color: #FCFCFC; 
  }
`

export default (props) => <StyledMeetup {...props} />;