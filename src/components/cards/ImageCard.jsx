import React from 'react'
import UploadCard from './UploadCard'

function ImageCard() {
  return (
    <div className='w-[100%] min-w-[150px]  h-[311px] p-[14px] flex flex-col bg-white'>
      <div className='flex items-start'>
        <span className=' text-left text-ourBlack text-sm font-semibold'>Image</span>
      </div>
      <div className='mt-4 h-[100%] w-[100%]'>
        <UploadCard />
      </div>
      <div className='flex items-start mt-[30px]'>
        <span className=' text-left text-ourGray text-[11px] font-semibold'>*Only JPG, PNG files are allowed. Image must be less than 2 MB</span>
      </div>
    </div>
  )
}

export default ImageCard