import React, { useState } from 'react'
import { info, mines, plus } from '../../assets/constants/images'
import { STYLES } from '../../assets/constants/styles'
import ToggleSwitch from '../toggle/ToggleSwitch';

function TimePerQuestionCard({ count = 60, title, suffix, image, isToggle = false }) {

  const [counter, setCounter] = useState(count);
  const [checked, setChecked] = useState(true);
  const [size, setSize] = useState("default");
  const [disabled, setDisabled] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ boxShadow: STYLES.shadow }} className='min-w-[176px] h-[156px] bg-white rounded-[5px] p-[10px] ml-[10px]'
    >
      <img src={info} alt="info" className='ml-auto' />
      <div className='w-[100%] flex flex-col justify-center items-center' >
        <img src={image} alt="icons" />
        <span className=' text-[12px] text-[#313131] font-semibold mt-[12.84px]'>{title}</span>
      </div>
      {
        isToggle ?
          <div className='flex justify-center items-center mt-[18px]'>
            <ToggleSwitch
              checked={checked}
              size={size}
              disabled={disabled}
              onChange={handleChange}
            />
          </div>
          :
          <div className='flex justify-center items-center mt-[18px]'>
            <button onClick={() => { setCounter((prev) => (prev - 1)) }}>
              <img src={mines} alt="minus" width={"30px"} />
            </button>
            <div className='flex justify-center items-center w-[76px] h-[30] border-[#2C8EFF] border-[1px] rounded-[5px] text-[14px] font-semibold text-[#2C8EFF] mx-[4px]'>
              <span>
                {counter}
              </span>
              <span>{suffix}</span>
            </div>
            <button onClick={() => { setCounter((prev) => (prev + 1)) }}>
              <img src={plus} alt="plus" width={"30px"} />
            </button>
          </div>
      }

    </div>
  )
}

export default TimePerQuestionCard