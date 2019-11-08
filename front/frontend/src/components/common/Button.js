import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { withRouter } from 'react-router-dom';

const StyledButton = styled.button`
    width: 100%;
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

const Button = ({ to, history, ...rest }) => {
  const onClick = e => {
    if (to) {
      history.push(to);
    }
    if (rest.onClick) rest.onClick(e);
  };
  return <StyledButton {...rest} onClick={onClick} />;
};
export default withRouter(Button);
