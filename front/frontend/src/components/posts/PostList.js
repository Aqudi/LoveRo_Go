import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Bottom_Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
`;

const White_Wrapper = styled.div`
    width: 235px;
    margin: 5px;
    height: 300px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.26);
    display: inline-block;
    box-sizing: border-box;
    padding: 10px;
`;

const Image_Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    background-color: #e9ecef;
    border-radius: 12px;
`;

const PostItem = ({ post }) => {
  const { created_at, updated_at, title, content, image , id } = post;
    
  console.log(post);
  return (
    <White_Wrapper>
        <Image_Wrapper>
            <img className="main_image" src={image} alt="image_test" />
        </Image_Wrapper>
        <div className="main_title">#{title}</div>
        <div className="main_content">{content}</div>
    </White_Wrapper>
  );
};

const PostList = ({ posts, loading, error, history }) => {
    
    console.log(posts);
  // const clickPost = (id) => {
  //     history.push(`/main/${id}`);
  // };
  //에러 발생시
  if (error) {
    console.log(error);
    return <Bottom_Wrapper> 에러가 발생 했습니다. </Bottom_Wrapper>;
  }
  return (
    <Bottom_Wrapper>
      {!loading && posts && (
        <div>   
          {posts.map(post => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      )}          
          {/*<White_Wrapper>
        <Image_Wrapper>
            <img className="main_image" 
            src="http://item.ssgcdn.com/16/88/15/item/1000021158816_i1_202.jpg"             alt="image_test" />
        </Image_Wrapper>
             <div className="main_title">#1 따뜻한 어느 날 오후</div>
             <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 </div>
    </White_Wrapper> */}
    </Bottom_Wrapper>
  );
};

export default PostList;