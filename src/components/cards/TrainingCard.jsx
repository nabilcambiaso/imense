import React from 'react'
import { cancel } from '../../assets/constants/images'
import UploadCard from './UploadCard'

function TrainingCard() {
  return (
    <div className='w-[100%] min-w-[213px] h-[311px] p-[14px] flex flex-col bg-white'>
      <div className='flex items-start'>
        <span className=' text-left text-ourBlack text-sm font-semibold'>Training file</span>
      </div>
      <div className='mt-2 h-[100%] w-[100%]'>
        <UploadCard />
      </div>
      <button className=' bg-ourGreen w-[100%] min-h-[2.4rem] rounded-[5px] flex items-center px-2 my-[9px]'>
        <div className='flex flex-col items-start '>
          <span className='text-[10px] font-semibold text-white block'>Completed</span>
          <span className='text-[11px] font-bold text-white block mt-[-0.3rem]' >workingAtHeight.pdf</span>
        </div>
        <img src={cancel} alt="cancel" className=' ml-auto' />
      </button>
      <div className='flex items-start'>
        <span className=' text-left text-ourGray text-[11px] font-semibold'>*Only Video, PDF and SlideShow
          files are allowed.</span>
      </div>
      <div className='flex justify-center items-center'>
        <hr className=' border-ourDisabledGray w-[100%]' />
        <span className='px-[5px] text-[0.688rem] font-bold text-ourSlightDarkGray'>OR</span>
        <hr className=' border-ourDisabledGray w-[100%]' />
      </div>
      <div className='flex items-start mt-2'>
        <span className=' text-left text-ourBlack text-sm font-semibold'>Media URL</span>
      </div>
      <div className='flex items-start mt-2'>
        <input className='h-7 w-[100%] rounded-[0.315rem] border-ourDisabledGray border-[1px] text-[#bbbbbb] text-[0.7rem] text-center' type="url" placeholder='https://youtu.be/1g4hoZx8-o4' />
      </div>
    </div>
  )
}

export default TrainingCard