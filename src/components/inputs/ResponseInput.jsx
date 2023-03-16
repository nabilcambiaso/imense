import React from 'react'
import { checked, unchecked, upload } from '../../assets/constants/images'

function ResponseInput({text}) {
  return (
    <div className='bg-white w-[100%] h-[37px] rounded-[5px] border-[1px] border-[#EBEBEB] p-[11px] flex items-center'>
      <span className='font-semibold text-[12px] text-[#616161]'>
        {text}
      </span>
      <div className='ml-auto flex items-center'>
        <button>
        <img src={text==="True" ? checked : unchecked} alt="checkbox" className='mr-[13px]' />
        </button>
      <button >
      <input type="file" id="uploadFile" name="uploadFile" hidden />
      <label for="uploadFile"><img src={upload} alt="upload" title='Upload image' width={"24px"} className=" cursor-pointer"/></label>
      </button>
      </div>
    </div>
  )
}

export default ResponseInput