import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: black;
  &:hover {
     background-color: black;
  }
`;

const PersonalButton = ({user, onLogout}) => {
    const showButton = () =>{
        if(localStorage.getItem('user'))
            return (
                <>
                <span>{localStorage.getItem('user') }</span>
                <StyledButton onClick ={onLogout}>로그아웃</StyledButton>
                </>
            );
        else 
            return (
                <div></div>
            );
    };
    return (
        <div>
            {showButton()}
        </div>
        );
};
export default PersonalButton;