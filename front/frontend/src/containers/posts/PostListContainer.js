import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import client from '../../lib/api/client';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, pageNum } = useSelector(
    ({ posts, loading, auth }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      pageNum: posts.pageNum,
      user: auth.user,
    }),
  );
  useEffect(() => {
    const { user, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
      console.log('pageListContainer',page);
      // const query = 'page=1';
      
      if(page===undefined) {
          // console.log(query, page);
          const { page = 1 } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
          });
          dispatch(listPosts({user, page}));
      }
      else 
          dispatch(listPosts({user,page}));
  }, [dispatch, location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
    />
  );
};
export default withRouter(PostListContainer);