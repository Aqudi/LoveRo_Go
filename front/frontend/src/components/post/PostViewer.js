import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[5]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    //에러 발생시
    if (error.reponse && error.reponse.status === 404) {
      return <PostViewerBlock> 존재 하지 않는 포스트 입니다. </PostViewerBlock>;
    }
    return <PostViewerBlock> 로그인해주세요 </PostViewerBlock>;
  }
  //로딩중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { title, content, image , created_at, updated_at } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <b>{user.username}</b>
        <SubInfo
          username={user.username}
          created_at={created_at}
          updated_at={updated_at}
          hasMarginTop
        />
      </PostHead>
    </PostViewerBlock>
  );
};

export default PostViewer;