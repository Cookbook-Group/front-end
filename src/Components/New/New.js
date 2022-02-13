import React from 'react';
import NewForm from '../NewForm/NewForm';

const New = ({addPost}) => {
  return <div>
   <NewForm addPost={addPost}/>
  </div>;
};

export default New;
