import React from 'react'

function QuestionTextInput({text}) {
  return (
    <div className='bg-white w-[100%] min-h-[37px] rounded-[5px] border-[1px] border-[#EBEBEB] px-[16px] py-[11px] flex items-center'>
    <span className='font-semibold text-[12px] text-[#616161]'>
      {text}
    </span>
  </div>
  )
}

export default QuestionTextInput