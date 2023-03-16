import React from 'react'
import { height, security, trash } from '../../assets/constants/images'
import DropdownInput from '../inputs/DropdownInput'

function BasicInfoCard() {
  return (
      <div className='h-[311px] w-[100%]   flex flex-col bg-white p-[1.125rem] py-[1rem]'>
        <div className='flex flex-col lg:grid lg:grid-flow-col lg:gap-[10px]'>
          <div className='w-[100%] lg:max-w-[10.3125rem] min-w-[130px]'>
            <DropdownInput title='Category' placeholder='Safety' addNew={() => { alert('test') }} imageLeft={security} />
          </div>
          <div className='w-[100%] block  lg:max-w-[12.25rem]'>
            <DropdownInput title='Topic' text='VCA' addNew={() => { alert('test') }} imageLeft={height} />
          </div>
          <div className='w-[100%] '>
            <DropdownInput title='Valid For' text="1 Year" />
          </div>
        </div>
        <div className='flex flex-col lg:grid lg:grid-flow-col lg:gap-[10px] mt-3'>
          <div className='w-[100%] lg:max-w-[19.325rem]'>
            <DropdownInput title='Training' text='Working at height' imageRight={height} icon={trash} />
          </div>
          <div className='w-[100%] lg:flex-1'>
            <DropdownInput title='Assign To' text="Internal workers" />
          </div>
        </div>
        <div className='flex flex-col lg:grid lg:grid-flow-col lg:gap-[10px] mt-3'>
          <div className='w-[100%] lg:max-w-[10.45rem]'>
            <DropdownInput title='Departments' placeholder="Select departments" label="Optional" />
            <div className='mt-[10px]'>
              <DropdownInput title='Functions' placeholder="Select functions" label="Optional" />
            </div>
          </div>
          <div className='w-[100%] flex flex-col items-start'>
            <span className=' text-ourBlack text-[0.75rem] font-semibold'>Description</span>
            <textarea className='w-[100%] border-ourDisabledGray border-[1px] rounded-[5px]  mt-[0.44rem] min-h-[104px]' id="" cols="30" rows="4"></textarea>
          </div>
        </div>
      </div>
  )
}

export default BasicInfoCard