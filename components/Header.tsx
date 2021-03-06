import {useState, useEffect} from 'react'
import { BellIcon, SearchIcon  } from '@heroicons/react/solid'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'

function Header() {
  const [isSrolled, setIsSrolled] = useState(false)
  const {logout} = useAuth()
  useEffect(() => {
   const handeScroll = () =>{
    if(window.scrollY > 0) {
      setIsSrolled(true)
    } else {
      setIsSrolled(false)
    }
   }
   window.addEventListener("scroll", handeScroll)
    return () => {
      window.removeEventListener("scroll", handeScroll)
    }
  },)
  
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6' />3
        {/* <Link href="/account"> */}
          <img
          onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
