import React from 'react'
import styled, { css } from 'styled-components'

function Section({Icon,title,selected,color}) {
    return (
        <SectionContainer color={color} selected={selected}>
            <Icon/>
            <h4>{title}</h4>
        </SectionContainer>
    )
}

export default Section
const SectionContainer = styled.div`
    border-bottom: 3px solid ${props => props.color} ;
    color: ${props => props.selected && props.color} ;
    display: flex;
    align-items: center;
    border-bottom-width: 2px;
    padding: 15px;
    min-width: 200px;
    cursor: pointer;
    color: gray;
    border-width: 0 !important;

    ${props => props.selected && css`
        background-color: whitesmoke;
        border-width: 3px !important;
    `}

    :hover{
        background-color: whitesmoke;
        border-width: 3px !important;
    }
    >h4{
        font-size:14px;
        margin-left: 15px;
    }
`
