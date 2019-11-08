import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';
import {changeField, uploadImg} from '../../modules/write';
import {useDispatch} from 'react-redux';

const Bottom_Wrapper = styled.div`
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
`;

const Image_Wrapper = styled.form`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fdf9e9;
    border-radius: 12px;
    margin-top: 12px;
    border: none;
`;

const Input_Title = styled.input`
    background-color: transparent;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    color: black;
    margin-top: 20px;
    font-size: 24px;
    font-family: "NanumSquare";
`;

const Input_Content = styled.textarea`
    background-color: transparent;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    width: 100%;
    min-height: 100px;
    color: black;
    margin-top: 10px;
    font-family: "NanumSquare";
`;

const Editor = ({title, content, image, onChangeField}) => {
    const dispatch = useDispatch();
    const onDrop = (pictureFiles, pictureBase64) => {
        // picutreFiles에 boundery 정보가 return 되고,
        // pictureBase64 에 base64 정보가 return 된다. 기본 array로 return
        // files: this.state.files.concat(pictureFiles),
        // 여기에 ajax를 넣을 수 있다.
        const data = pictureBase64[0].split(',')[1];
        console.log(data);
        dispatch(
          uploadImg({
            image,
            value: data,
          }),
        );
    };
    return (
        <Bottom_Wrapper>
            <div className="date"> 
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="write_title">오늘의 일기: </div>
            <div className="filebox">
                <label htmlFor="image"></label>
                <Image_Wrapper id="image">
                    <ImageUploader 
                        withIcon ={true}
                        buttonText='이미지파일 가져오기'
                	    onChange={onDrop}
                	    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	    maxFileSize={5242880}
                        />
                </Image_Wrapper>
            </div>
            <Input_Title 
                name="title"
                placeholder = "제목을 입력하세요"
                onChange = {onChangeField}
                
                />
            <Input_Content
                name="content"
                placeholder = "내용을 입력하세요"
                onChange = {onChangeField}
                />
        </Bottom_Wrapper>
    );
};

export default Editor;