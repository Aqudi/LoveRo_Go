import React from 'react';
import styled from 'styled-components';

const White_Wrapper = styled.div`
    width: 285px;
    margin: 5px;
    height: 320px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.26);
    display: inline-block;
    box-sizing: border-box;
    padding: 10px;
    z-index: 900;
`;

const Image_Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    background-color: #e9ecef;
    border-radius: 12px;
    z-index:901;
`;

const TemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* flex 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: low;
  justify-content: center;
  align-items: center;
  z-index:900;
`;
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 3px;
    font-size: 18px;
    font-weight: bold;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background: rbga(255,255,255,0.9);
  border-radius: 24px;
`;

const PostViewer = ({ post, error, loading, actionButtons, onCloseButton }) => {
    console.log(post);
  if (error) {
    //에러 발생시
    if (error.reponse && error.reponse.status === 404) {
      return <White_Wrapper> 존재 하지 않는 포스트 입니다. </White_Wrapper>;
    }
    return <White_Wrapper> 로그인해주세요 </White_Wrapper>;
  }
  //로딩중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }
  const { title, content, image , created_at, updated_at } = post;
  return (
      <TemplateBlock>
    <White_Wrapper>
        <Image_Wrapper>
            <img className="main_image" src={image} alt="image_test" />
        </Image_Wrapper>
        <div className="main_title">#{title}</div>
        <div className="main_content">{content}</div>  
        {actionButtons} {onCloseButton}
    </White_Wrapper>
      </TemplateBlock>
  );
};

export default PostViewer;