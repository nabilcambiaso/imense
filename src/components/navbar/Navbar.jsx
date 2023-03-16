import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownItem } from '@windmill/react-ui'
import { englishFlag, franceFlag, nederlandFlag, spainFlag, germanyFlag, logo, notification, profile, settingsIcon, policies, logoutIcon } from '../../assets/constants/images'
import { STYLES } from '../../assets/constants/styles'
function Navbar() {
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [toggleSideBar, setToggleSideBar] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleLanguageClick() {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsProfileMenuOpen(false)
      setIsLanguageMenuOpen(false)
      setIsNotificationsMenuOpen(false)

    })
  })

  const ProfileMenu = () => (
    <Dropdown
                  align="right"
                  isOpen={true}
                  onClose={() => setIsProfileMenuOpen(false)}
                  className="shadow-[0px_5px_11px_-6px_rgba(0,0,0,0.7)] w-[180px] flex flex-col items-start z-50"
                >
                  <span className='text-[12px] font-semibold text-[#313131] mt-[16px]'>BESIX Group</span>
                  <span className='font-normal text-[12px] text-[#797979] mt-[5px]'>besix.group@besix.be</span>
                  <hr className='border-[0.5px] w-[100%] my-[14px]'/>
                  <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
                    <img src={settingsIcon} alt='settings' />
                    <span className=' pl-2 text-[13px] font-normal text-[#313131]'>Profile settings</span>
                  </DropdownItem>
                  <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
                    <img src={policies} alt='policies' />
                    <span className=' pl-2 text-[13px] font-normal text-[#313131]'>Our policies</span>
                  </DropdownItem>
                  <hr className='border-[0.5px] w-[100%] my-[14px]'/>
                  <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
                    <img src={logoutIcon} alt='logout' />
                    <span className=' pl-2 text-[13px] font-normal text-[#313131]'>Log out</span>
                  </DropdownItem>
                </Dropdown>
  )

  const NotificationMenu = () => (
    <Dropdown
      align="right"
      isOpen={true}
      onClose={() => setIsNotificationsMenuOpen(false)}
      className="z-50"
    >
      <DropdownItem tag="a" href="#" className="justify-between">
        <span>notification</span>
      </DropdownItem>
    </Dropdown>
  )

  const LanguageMenu = () => (
    <Dropdown
    align="right"
    isOpen={true}
    onClose={() => setIsLanguageMenuOpen(false)}
    className="shadow-[0px_5px_11px_-6px_rgba(0,0,0,0.7)] w-[180px] flex flex-col items-start px-4 z-50"
  >
    <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
      <img src={englishFlag} alt='english flag' />
      <span className=' pl-2'>English (EN)</span>
    </DropdownItem>
    <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
      <img src={franceFlag} alt='english flag' />
      <span className=' pl-2'>Français (FR)</span>
    </DropdownItem>
    <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
      <img src={nederlandFlag} alt='english flag' />
      <span className=' pl-2'>Nederlands (NL)</span>
    </DropdownItem>
    <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
      <img src={spainFlag} alt='english flag' />
      <span className=' pl-2'>Español (ES)</span>
    </DropdownItem>
    <DropdownItem tag="a" href="#" className="flex flex-row justify-center items-center pt-3">
      <img src={germanyFlag} alt='english flag' />
      <span className=' pl-2'>Deutsch (DE)</span>
    </DropdownItem>
  </Dropdown>
  )

  return (
    <div className="bg-white mb-6 w-[100%] h-[70px] border-b px-[75px] flex justify-center sticky top-0">
      <button onClick={()=>{setToggleSideBar(!toggleSideBar)}} className="absolute left-3 h-16 w-12 border-r lg:hidden dark:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="sticky top-0 h-16  bg-white lg:py-2.5">
        <div className="flex items-center  space-x-4 px-6 2xl:container">
          <img src={logo} alt='logo' className="md:block max-w-[150px]" />
          <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Quick search ..."
                className="outline-none w-[100%] py-1.5 pl-14 pr-4 text-sm bg-gray-100 block md:hidden"
              />
          <div
            hidden
            className=' lg:flex flex-row justify-center items-center'
          >
            <div className="relative flex items-center  h-[32px] mx-10 max-w-96 min-w-[100px]">
              <span className="absolute left-4 flex items-center ">
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 fill-gray-300"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Quick search ..."
                className="outline-none w-[100%] py-1.5 pl-14 pr-4 text-sm bg-gray-100"
              />
            </div>
            <div className="relative flex items-center  justify-center h-[32px]">
              <ul className='inline-flex'>
                <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourGray'>Dashboard</a></li>
                <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourBlue'>Trainings</a></li>
                <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourGray'>Users</a></li>
                <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourGray'>More</a></li>
                <li className="relative ml-[99px]">
                  <button
                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                    onClick={handleNotificationsClick}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    <img src={notification} alt='notification' className='max-w-[18px]' />
                  </button>
                  {isNotificationsMenuOpen &&
                    <NotificationMenu/>
                  }
                </li>
                <li className="mx-[27px]">
                  <button
                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                    onClick={handleLanguageClick}
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    <img src={englishFlag} alt='english flag' className='max-w-[27px]' />
                  </button>
                  {isLanguageMenuOpen &&
                   <LanguageMenu/>
                  }
                </li>
              </ul>
            </div>
            <div>
              <button onClick={handleProfileClick} className='flex justify-center items-center'>
                <img src={profile} alt='profile' />
                <div className='ml-[6px]'>
                  <p className='text-[13px] text-ourDarkerGray font-semibold'>Blaise defloo</p>
                  <p className='text-[13px] text-ourGray font-medium'>Administrator</p>
                </div>
              </button>
              {isProfileMenuOpen &&
                <ProfileMenu/>
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        {toggleSideBar &&
        <div style={{ boxShadow: STYLES.shadow }} className={`absolute left-0 top-[101%] bg-white flex flex-col justify-start p-4 h-[90vh]`}>
        <ul>
        <div className='my-4 mb-4'>
          {isProfileMenuOpen &&
            <ProfileMenu/>
          }
          <button onClick={handleProfileClick} className='flex justify-center items-center'>
            <img src={profile} alt='profile' />
            <div className='ml-[6px]'>
              <p className='text-[13px] text-ourDarkerGray font-semibold'>Blaise defloo</p>
              <p className='text-[13px] text-ourGray font-medium'>Administrator</p>
            </div>
          </button>
        </div>
          <ul className='flex my-4'>
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={handleNotificationsClick}
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <img src={notification} alt='notification' className='max-w-[18px]' />
              </button>
              {isNotificationsMenuOpen &&
                <NotificationMenu/>
              }
            </li>
            <li className="mx-[27px]">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={handleLanguageClick}
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <img src={englishFlag} alt='english flag' className='max-w-[27px]' />
              </button>
              {isLanguageMenuOpen &&
                <LanguageMenu/>
              }
            </li>
          </ul>
          <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourGray'>Dashboard</a></li>
          <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourBlue'>Trainings</a></li>
          <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourGray'>Users</a></li>
          <li><a href="/" className='font-semibold text-[14px] mr-7 text-ourGray'>More</a></li>
        </ul>
      </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar