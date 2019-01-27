import styled from 'styled-components'

const StyledHeader = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    text-align: left;
    border-bottom: 1px solid #B3B3B3;
    padding-bottom: 20px;
    margin-bottom: 20px;

    .logo {
        width: 200px;
    }

    .app-name {
        font-family: "IBM Plex Mono";
        font-size: 40px;
        font-weight: bold;
        line-height: 52px;
    }

    .app-name-classic {
        color: #333333;
    }

    .app-name-highlight {
        color: #ED1C40;
    }

    img {
        width: 150px;
        margin-bottom: 0;
    }

    ul {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        margin-left: auto;
    }
    
    li {
        list-style: none;
        margin-left: 20px;
        font-size: 26px;
        font-weight: bold;
        line-height: 34px;
    }

    li a {
        display: block;
        padding: 18px 48px;
        font-size: 1.3rem;
        color: #4A4A4A;
        text-decoration: none;
        border: 4px solid #333333;
    }

    li.menu-item-highlight a {
        border: 4px solid #ED1C40;
    }

    li:hover {
        background-color: #333333;
    }

    li:hover a {
        color: #FCFCFC; 
    }

    li.menu-item-highlight:hover {
        background-color: #ED1C40;
    }
`

export default StyledHeader
