import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonBlock = styled.div`
    margin: 1rem;
`;

const StyledButton = styled(Button)`
    margin: 2px;
    width:40%;
`;
const PostActionButton = ({onRemove}) => {
    const [modal, setModal] = useState(false);
    
    const onRemoveClick = () => {
        setModal(true);
    };
    const onCancel= () => {
        setModal(false);
    };
    const onConfirm = () => {
        setModal(false);
        onRemove();
    };
    
    return(
        <>
        <PostActionButtonBlock>
            <StyledButton onClick ={onRemoveClick}>삭제</StyledButton>
        </PostActionButtonBlock>
        <AskRemoveModal
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
        </>
    );
};

export default PostActionButton;