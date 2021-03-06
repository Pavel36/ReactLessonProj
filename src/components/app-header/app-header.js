import React from 'react';
import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color:#212529c7;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Pavel Gotsev</h1>
            <h2>{allPosts} notes, {liked} liked</h2>
        </Header>
    )
}

export default AppHeader;