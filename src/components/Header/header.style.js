import styled from 'styled-components'

const StyledHeader = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    img {
        width: 200px;
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
    }
    
    a {
        font-size: 1.3rem;
        color: #4A4A4A;
    }
    
    a:hover {
        color: #43933E;
    }
`

export default StyledHeader
