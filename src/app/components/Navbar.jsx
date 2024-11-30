import Logo from '../../../public/logo.svg'
import Image from 'next/image'

import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
    return (
        <div className='bg-zinc-50 w-auto h-20 flex justify-between items-center m-6 px-4 rounded-full'>
            <ul><Image src={Logo} className='ml-5' alt='Logo'/></ul>
                
            <ul className='bg-white flex gap-9 text-center p-5 items-center rounded-full'>
                <li>About us</li>
                <li>Projects</li>
                <li>Agents</li>
                <li>Services</li>
                <li>Listings</li>
                <IoIosSearch size={24}/>
            </ul>

            <ul className='flex justify-center items-center gap-9'>
                <li>Other services</li>
                <button className='border-2 border-zinc-300 px-6 py-4 rounded-full hover:bg-zinc-100'>Contact us</button>
            </ul>
        </div>
    )
}