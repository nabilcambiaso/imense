import { Dropdown, DropdownItem } from '@windmill/react-ui'
import React, { useState } from 'react'
import { arrowDown } from '../../assets/constants/images';

function DropdownInput({ title = 'title', text = null, placeholder = null, addNew = null, label = null, imageLeft = null, imageRight = null, icon = null }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className='min-w-[104px]'>
      <div className='w-[100%] flex items-center'>
        <span className=' text-ourBlack text-[0.75rem] font-semibold'>{title}</span>
        {addNew != null && <button onClick={addNew} className=' text-ourBlue text-[0.81rem] font-semibold ml-auto'>Add new +</button>}
        {label && <span className=' font-semibold text-[#888888] text-[0.625rem] ml-auto'>{label}</span>}
      </div>
      <div className='mt-[0.44rem]'>
        <button className='flex justify-center items-center h-[36px] border-ourDisabledGray border-[1px] rounded-[5px] px-[0.7rem] py-[0.563rem] border-solid w-[100%]' onClick={() => { setOpenDropDown(!openDropDown) }}>
          {imageLeft && <img src={imageLeft} alt='icon' className='mr-[7px]' />}
          {text && <span className=' font-semibold text-[#313131] text-[0.75rem]'>{text}</span>}
          {placeholder && <span className=' font-normal text-[#888888] italic text-[0.75rem]'>{placeholder}</span>}
          <div className='ml-auto flex'>
            {imageRight && <img src={imageRight} alt='icon' className='mr-[10px]' />}
            <img src={icon || arrowDown} alt='arrow' />
          </div>
        </button>
        {openDropDown &&
          <Dropdown isOpen={true} onClose={() => { }}>
            <DropdownItem onClick={() => { setOpenDropDown(false) }} className="justify-between">
              <span>{text}</span>
            </DropdownItem>
          </Dropdown>
        }
      </div>
    </div>
  )
}

export default DropdownInput
