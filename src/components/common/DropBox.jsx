import React, { useState } from 'react'
import placeholder from "../../assets/images/placeholder-image.png"
import { HiOutlineCloudUpload } from "react-icons/hi";

const DropBox = ({ imageData, prevImage }) => {
    const [image, setImage] = useState();
    const [imageError, setImageError] = useState("");

    if (image) {
        imageData(image)
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        if (file.size > 5000000) {
            setImage()
            setImageError('File is To Large')
        } else {
            const acceptedImageTypes = ['jpg', 'png', 'jpeg', 'svg'];
            const fileType = file.type;
            const splittedFileType = fileType.split('/');
            const mainType = splittedFileType[1];

            if (acceptedImageTypes.includes(mainType)) {
                setImage(file)
                setImageError('')
            } else {
                setImage()
                setImageError('File format not supported.')
            }
        }
    }
    return (
        <>

            <div className={`w-full h-52 border relative rounded-md overflow-hidden border-black ${imageError ? 'border-red-500' : ''}`}>
                <label htmlFor="file" className='absolute top-4 right-4 bg-cyan-700 text-white rounded-md py-2 px-4 text-sm border-none'><HiOutlineCloudUpload /></label>
                <input type="file" name="" id="file" className='hidden' onChange={handleImage} />
                <img
                    src={
                        image
                            ? URL.createObjectURL(image)
                            : import.meta.env.VITE_IMAGE_URL + prevImage
                                ? import.meta.env.VITE_IMAGE_URL + prevImage
                                : placeholder
                    }
                    alt=""
                    className="w-full h-full bg-white object-cover"
                />
            </div>
            <div className='text-red-500 text-sm'>
                {imageError}
            </div>
        </>
    )
}

export default DropBox
