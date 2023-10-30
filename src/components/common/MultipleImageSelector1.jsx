import React, { useState } from 'react'
import { VscCloudUpload } from 'react-icons/vsc';

function MultipleImageSelector1({ getImages }) {

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageError, setImageError] = useState('');

  if (selectedImages) {
    getImages(selectedImages)
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const acceptedFileTypes = ['jpg', 'png', 'jpeg', 'svg'];

    if (files) {
      const filesArray = Array.from(files)
      const splittedArray = filesArray.map((item) => {
        return item.type.split('/')[1]
      })

      const isValidFileType = splittedArray.every(fileType => acceptedFileTypes.includes(fileType))
      const isValidFileSize = filesArray.filter((item) => {
        return item.size > 5000000
      })

      if (isValidFileType) {
        if (isValidFileSize) {
          const mappedArray = filesArray.map((item) => item)
          console.log('mapped', mappedArray);

          setSelectedImages((prevImages => prevImages.concat(mappedArray)))
        } else {
          setSelectedImages([]);
          setImageError('Image size is too large');
        }
        if (files.length > 4) {
          alert('You can only select upto 4 images');
          setImageError('You can only select upto 4 images');
          setSelectedImages([]);
        }
        else {
          setImageError('')
        }
      } else {
        setSelectedImages([]);
        setImageError('Invalid file type');
      }
    }
  }

  return (
    <>
      <div className='py-3 px-1 border-gray-400 rounded-md border-[1px] relative w-[350px] h-[350px]'>
        <label htmlFor="multipleImageSelector" className='absolute text-2xl text-white bg-cyan-600 hover:bg-cyan-700 px-3 py-1 mx-0.5 rounded-md top-6 right-6 border-gray-300  shadow-sm'><VscCloudUpload /></label>
        <input type="file" multiple id='multipleImageSelector' onChange={handleImageChange} className='hidden' />

        {selectedImages.length > 0 ?
          <div className={'mb-4 mx-2'}>
            <img className={'h-[200px] w-full rounded'} src={selectedImages[0] ? URL.createObjectURL(selectedImages[0]) : ''} />
          </div>
          : <div className='font-semibold text-gray-400 py-3 text-[18px] ml-8'>Please choose your images</div>
        }

        <div className='w-24 ml-3 flex gap-4 justify-between shadow-sm'>
          {selectedImages.slice(1).map((item) => {
            return <img className='shadow-2xl rounded' src={URL.createObjectURL(item)} alt="" />
          })}
        </div>
        {imageError ?
          <div className='text-red-500 text-center'> {imageError} </div> : null
        }
      </div>
    </>
  )
}


export default MultipleImageSelector1
