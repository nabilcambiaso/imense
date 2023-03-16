import React from 'react'
import { close } from '../../assets/constants/images'
import QuestionTextInput from '../inputs/QuestionTextInput'
import ResponseInput from '../inputs/ResponseInput'
import UploadCard from './UploadCard'

function QuestionCard() {
  return (
    <div className='bg-[#F8F8F8] w-[100%] px-[30px] py-[22px] mt-4 flex flex-col md:grid md:grid-flow-col md:gap-[13px] flex-nowrap'>
      <div className='w-[100%] md:max-w-[662px]'>
        <div className='w-100 flex'>
          <span>Question 1</span>
          <button className='ml-auto'>
            <img src={close} alt="close" />
          </button>
        </div>
        <div>
          <div className='mt-[10px]'>
            <QuestionTextInput text="Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive." />
          </div>
          <div className='mt-[10px]'>
            <ResponseInput text="True" />
          </div>
          <div className='mt-[10px]'>
            <ResponseInput text="False" />
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[186px] md:max-w-[294px]'>
      <div className='w-[100%] flex items-center mb-[9px]'>
        <span className=' text-ourBlack text-[0.75rem] font-semibold'>Question Image</span>
       <span className=' font-semibold text-[#888888] text-[0.625rem] ml-auto'>Optional</span>
      </div>
      <div className='h-[161px]'>
      <UploadCard/>
      </div>
      </div>
    </div>
  )
}

export default QuestionCard