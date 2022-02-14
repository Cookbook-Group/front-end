import React from 'react';
import NewForm from '../NewForm/NewForm';

const New = ({addPost, user}) => {
  return <div>
   <NewForm addPost={addPost} user={user}/>
  </div>;
};

export default New;
