import React from 'react';
import NewForm from '../NewForm/NewForm';

const New = ({addPost, user, uploadedImageUrl, setUploadedImageUrl}) => {
  return <div>
   <NewForm addPost={addPost} user={user} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
  </div>;
};

export default New;
