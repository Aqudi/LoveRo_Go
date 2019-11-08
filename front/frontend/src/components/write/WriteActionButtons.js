import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  background: #2d2d2c;
  font-size: 12px;
  width : 150px;
  margin-left : 1rem;
  opacity: 90%;
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
      <>
      <ButtonWithMarginTop  onClick={onPublish}> 등록
        {/* 포스트 {isEdit ? '수정' : '등록'} */}
      </ButtonWithMarginTop>
      <ButtonWithMarginTop onClick={onCancel}>취소</ButtonWithMarginTop>
      </>
  );
};

export default WriteActionButtons;
