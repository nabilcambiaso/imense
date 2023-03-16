import React from 'react'
import { upload } from '../../assets/constants/images'
function UploadCard() {
  return (
    <div className='border-[2px] rounded-[3px] border-ourDisabledGray border-dashed flex flex-col justify-center items-center h-[100%] w-[100%] p-2'>
      <img src={upload} alt="upload" />
      <div className='text-ourGray font-normal text-[0.75rem] text-center'>
        <span className='block'>Drag and drop your image here
        </span>
        <span>Or
          <input type="file" id="uploadFile" name="uploadFile" hidden />
          <label for="uploadFile" className=' cursor-pointer text-ourBlue '> browse files</label>
        </span>
      </div>
    </div>
  )
}

export default UploadCard