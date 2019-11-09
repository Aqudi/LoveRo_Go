import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonBlock = styled.div`
    margin: 1rem;
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
            <Button onClick ={onRemoveClick}>삭제</Button>
        </PostActionButtonBlock>
        <AskRemoveModal
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
        </>
    );
};