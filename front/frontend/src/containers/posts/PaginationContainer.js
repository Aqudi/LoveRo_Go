import React from 'react';
import Pagination from '../../components/posts/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location }) => {
  const { lastPage, posts, loading, nextPage, prevPage } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));
    
  if (!posts || loading) return null;
  const { page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
    // console.log('page!!',parseInt(page, 10));

  return (
    <Pagination
      page={parseInt(page, 10)}
      lastPage={lastPage}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
export default withRouter(PaginationContainer);