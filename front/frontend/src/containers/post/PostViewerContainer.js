import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButton from '../../components/post/PostActionButton';
import { setOriginalPost } from '../../modules/write';
import { deletePost } from '../../lib/api/post';
import client from '../../lib/api/client';
import qs from 'qs';

import styled from 'styled-components';
import Button from '../../components/common/Button';
const StyledButton = styled(Button)`
    margin: 2px;
    width:40%;
`;
const PostViewerContainer = ({ postId, history, modal, onClose, location }) => {
  //처음 마운트 될때 포스트 읽기 API 요청
    // const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, auth }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user:auth.user
    }),
  );
  // console.log(post, postId,'1');
  useEffect(() => {
    dispatch(readPost(postId));
    console.log(postId,'postid', post);
      
      //언마운트 될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onRemove = async () => {
    try {
      // client.defaults.headers.common['Authorization']='JWT '+localStorage.getItem('user-token');
      await console.log('remove~```````',postId);
      await deletePost(postId);
      onClose();
      const { page = 1 } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
      });
      history.push(`/main/?page=${page}`);
    } catch (e) {
      console.log(e);
    }
  };
      //     try{
      //     localStorage.setItem('user',auth.user.username);
      //     localStorage.setItem('user-token',auth.token);
      //      client.defaults.headers.common['Authorization']='JWT '+localStorage.getItem('user-token');

      // } catch(e){
      //     console.log('localStorage is not working');
      // }

  if(modal)return (
   <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButton onRemove={onRemove} />}
      onCloseButton={<StyledButton onClick={onClose}>닫기</StyledButton>}
    />

  );
    return <div></div>;
};

export default withRouter(PostViewerContainer);