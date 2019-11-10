import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, writeImg } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, content, image, post, postError } = useSelector(
    ({ write }) => ({
      title: write.title,
      content: write.content,
      image: write.image,
      post: write.post,
      postError: write.postError,
    }),
  );
  //포스트 등록
  const onPublish = () => {
    // if (originalPostId) {
    //   dispatch(updatePost({ title, content, img , id: originalPostId }));
    //   return;
    // }
        dispatch(
          writeImg({
            title,
            content,
            image,
          }),
        );
  };

  //취소
  const onCancel = () => {
    history.push('/main');
  };

  //성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { id } = post;
      history.push('/main');
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  
    return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
        /* isEdit={!!originalPostId} */
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
