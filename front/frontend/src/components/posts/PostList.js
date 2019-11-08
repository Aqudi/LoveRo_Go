import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const PostListBlock = styled.div`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  /*맨 위 포스트는 padding top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hober {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { created_at, updated_at, title, content, image , id } = post;
  console.log(post);
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/main/${id}`}>{title}</Link>
      </h2>
         생성일: {new Date(created_at)} 
         수정일: {new Date(updated_at)} 
      <p> {content} </p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error }) => {
  //에러 발생시
  if (error) {
    console.log(error);
    return <PostListBlock> 에러가 발생 했습니다. </PostListBlock>;
  }
  return (
    <PostListBlock>
      {!loading && posts && (
        <div>
          {posts.map(post => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;