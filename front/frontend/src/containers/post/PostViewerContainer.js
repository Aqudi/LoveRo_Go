import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButton from '../../components/post/PostActionButton';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/post';

const PostViewerContainer = ({ match, history }) => {
  //처음 마운트 될때 포스트 읽기 API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(
    ({ post, loading }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    //언마운트 될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  // const onEdit = () => {
  //   dispatch(setOriginalPost(post));
  //   history.push('/write');
  // };
  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/main');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onRemove={onRemove} />}
    />
  );
};

export default withRouter(PostViewerContainer);