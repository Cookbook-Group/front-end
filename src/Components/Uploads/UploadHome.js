// ImageDisplay.js
import React, { useState } from "react";
import axios from "axios";

export default function ProfileImage() {
  const [values, setValues] = useState({
    imagePreviewUrl: "",
    picFile: null,
  });
  let fileInput =  React.createRef();

  // Activates user file input to set div
  const editProfilePic = () => {
    fileInput.current.click();
  };
  // Handles the image that was input by user
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let inFile = e.target.files[0];
    reader.onloadend = () => {
      setValues({ ...values, picFile: inFile, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(inFile);
  };

  // Call the API Backend, will describe this later
  const handleSubmit = async () => {
    let  formData = new FormData();
    const imagefile = document.querySelector('#file')
    formData.append("image", values.picFile)
    // response stores the response back from the API
   const  response = await axios.post(`/storage/upload`, formData).catch((error) => {
     console.log(error)
      // alert(
      //   "Error occurred while uploading picture, try uploading a smaller image size or try again later."
      // );
      return;
    });
  };

  return (
    <div>
      <div onClick={() => editProfilePic()}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInput}
        />
        <img src={values.imagePreviewUrl} alt="..." style={{ objectFit: "cover" }} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
