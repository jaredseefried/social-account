import React from "react";


function Upload() {
  
  return (
    <>
      <form className='upload-steps' >
        <label>
          Upload file:
          <input type='file' />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}

export default Upload;