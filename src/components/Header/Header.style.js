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
`

export default StyledHeader
