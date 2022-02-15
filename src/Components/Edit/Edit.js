import React from 'react'
import EditForm from '../EditForm/EditForm'
import { useParams } from "react-router-dom"

const Edit = ({post}) => {

  return (
    <EditForm post={post}/>
  )
}

export default Edit