import React, { useState } from 'react'

function MultipleImageSelector() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageError, setImageError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files;
    const files = e.target.files;
    const acceptedFileTypes = ['jpg', 'png', 'jpeg', 'svg'];

    if (files) {
      const filesArray = Array.from(files);
    }



    // if (files) {
    //   const mappedValues = filesArray.map((item) => {
    //     URL.createObjectURL(file)
    //   })
    //   console.log('filesarray is ==>', mappedValues)
    // }

    return (
      <>
        {/* <div className='mx-auto w-[350px] border-black rounded-lg shadow-md mt-10 p-5'>
          <label htmlFor="multipleImageSelector">Select Images</label>
          <input type="file" multiple id='multipleImageSelector' onChange={handleImageChange} />
        </div>

        Selected Images:

        { selectedImages.map((image, index) => {
          <div>
            <h2>Images shown here:</h2>
            <img src={image ? image : placeholder}
              alt="" />
          </div>
        })
        }
        <h1>{imageError? imageError : null}</h1> */}


        <h1>Dropbox page</h1>
      </>
    )
  }
}


export default MultipleImageSelector
