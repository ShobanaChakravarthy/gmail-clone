import React from 'react'
import styled,{css} from 'styled-components'

function SidebarOption({Icon,title,number,selected}) {
    return (
        <SidebarContainer selected={selected}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>            
        </SidebarContainer>
    )
}

export default SidebarOption
const SidebarContainer=styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: gray;
    >p{
        display: ${props => props.selected ? 'inline' : 'none'} ;
        font-weight: 300;
    }
    >h3{
        flex:1;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
    }
    > .MuiSvgIcon-root{
        padding: 5px;
    }
    :hover > p{
        display: inline;
    }
    :hover, :hover>p, :hover>h3{
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
    }
    
    ${props => props.selected && css`
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
        >p,>h3{
            background-color: #fcecec;
            color: #c04b37;
            font-weight: 800 !important;
        }
    `}
`