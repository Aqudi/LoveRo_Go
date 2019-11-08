import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeField, initialize, } from '../../modules/write';
import Editor from '../../components/write/Editor';

const EditorContainer = () =>{
    const dispatch = useDispatch();
    const {title, content, image} = useSelector(({write})=>({
        title:write.title,
        content: write.content,
        image: write.image,
    }));
    
    const onChangeField = e => {
        const { value, name } = e.target;
        dispatch(
          changeField({
            key: name,
            value,
          }),
        );
      };
    
    //언마운트될 때 초기화
    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    },[dispatch]);
    
    return (
        <Editor 
            onChangeField={onChangeField} 
            title={title} 
            content={content} 
            image={image} 
            />
    );
};

export default EditorContainer;