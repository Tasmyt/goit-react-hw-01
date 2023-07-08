import styled from 'styled-components'

export const Status = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    
    background-color: ${({stat}) => (stat === 1 ? '#098d44' : 'red')};
`
export const Avatar = styled.img`
    display: block;       
    margin: auto;
`
