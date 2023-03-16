import React, { useRef } from 'react'
import { check, dice, figure, left, photo, timeExpense, timer } from '../assets/constants/images'
import BasicInfoCard from '../components/cards/BasicInfoCard'
import ImageCard from '../components/cards/ImageCard'
import QuestionCard from '../components/cards/QuestionCard'
import TimePerQuestionCard from '../components/cards/TimePerQuestionCard'
import TrainingCard from '../components/cards/TrainingCard'

function EditView() {

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className='flex flex-col items-around w-100 px-6 md:px-[4rem] lg:px-[8.25rem]'>
      <div className='flex items-center'>
        <h3 className='text-[#7C7C7C] font-semibold text-lg'>
          Edit Training “Working At Height”
        </h3>
        <div className='ml-auto'>
          <button className='text-[13px] text-[#B5B5B5] font-bold mr-[25px]'>Cancel</button>
          <button className='h-[35px] w-[147px] bg-ourOrange text-white text-[14px] font-bold rounded-[5px]'>Update & Save</button>
        </div>
      </div>
      <div className='flex flex-col lg:grid lg:grid-flow-col lg:gap-[13px]'>
        <div className='mt-3'>
          <BasicInfoCard />
        </div>
        <div className='mt-3'>
          <ImageCard />
        </div>
        <div className='mt-3'>
          <TrainingCard />
        </div>
      </div>

      <div className='bg-white px-[24px] py-[18px] mt-[14px]'>
        <div className='flex flex-col'>
          <span className='text-[#616161] font-semibold text-[13px]'>
            Training quiz
          </span>
          <span className='text-[#B4B4B4] text-[11px] font-medium mt-[6px]' >
            Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.
          </span>
          <hr className='mt-[10px] border-[#EBEBEB]' />
        </div>
        <div className='mt-[14px]'>
          <QuestionCard />
        </div>
        <div className='mt-[14px]'>
          <QuestionCard />
        </div>
        <button className='bg-[#E1EFFF] rounded-[5px] text-[#2C8EFF] font-bold text-[14px] w-[100%] h-[40px] flex justify-center items-center mt-[17px]'>
          Add Question +
        </button>
      </div>
      <div className='flex h-[100%] items-center justify-center  mb-48 '>
        <button onClick={() => scroll(250)}>
          <img src={left} alt="left" width={"64px"} className="self-center" />
        </button>
        <div className='flex mt-[14px] overflow-x-scroll p-4 scroll-smooth' ref={ref}>
          <TimePerQuestionCard title="Random questions" image={dice} count={10} />
          <TimePerQuestionCard title="Time per question" image={timer} count={50} suffix="s" />
          <TimePerQuestionCard title="Passing score" image={check} count={80} suffix="%" />
          <TimePerQuestionCard title="Webcam validation" image={photo} isToggle />
          <TimePerQuestionCard title="Time Expected" image={timeExpense} count={30} suffix="min" />
          <TimePerQuestionCard title="Attemps" image={figure} count={3} />
          <TimePerQuestionCard title="Random questions" image={dice} count={10} />
          <TimePerQuestionCard title="Time per question" image={timer} count={50} suffix="s" />
          <TimePerQuestionCard title="Passing score" image={check} count={80} suffix="%" />
          <TimePerQuestionCard title="Webcam validation" image={photo} isToggle />
          <TimePerQuestionCard title="Time Expected" image={timeExpense} count={30} suffix="min" />
          <TimePerQuestionCard title="Attemps" image={figure} count={3} />
        </div>
      </div>


    </div>
  )
}

export default EditView

