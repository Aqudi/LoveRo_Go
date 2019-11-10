import React,{useState} from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import PostViewerContainer from '../../containers/post/PostViewerContainer';
import { useDispatch, useSelector } from 'react-redux';
import {viewModal, viewId} from '../../modules/post';

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

const PostItem = ({ post, onClick }) => {
  const { created_at, updated_at, title, content, image , id } = post;
  console.log(id);
    
  const dispatch = useDispatch();
  const {view, modalId} = useSelector(
    ({ post }) => ({
      view: post.view,
      modalId: post.modalId,
    }),
  );  
    
  // const [modal, setModal] = useState(false);
  const click = id => {
      var value = true;
      dispatch(viewId({modalId, id}));
      dispatch(viewModal({view,value}));
        // setModal(true);
      // console.log(id, modal);
  };
  const onClose = () => {
      const value = false; 
      dispatch(viewModal({view,value}));
      // setModal(false);
  };
  return (
    <White_Wrapper >
        <Image_Wrapper>
            <img className="main_image" src={image} alt="image_null" />
        </Image_Wrapper>
        <div className="main_title" onClick= {()=>click({id})} >#{title}</div>
        <div className="main_content">{content}</div>
      </White_Wrapper>
  );
};
          // <PostViewerContainer postId={id} modal={modal} onClose={onClose}/>
const PostList = ({ posts, loading, error }) => {
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
          ))
          }
        </div>
      )}
    </Bottom_Wrapper>
  );
};

export default PostList;