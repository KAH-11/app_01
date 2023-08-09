import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

import { useState } from 'react';


const Navbar = () => {

    const [isLiked, setIsLiked] = useState(true);

    const handleIconClick = () => {

        let list = document.querySelector('ul');

        if(isLiked === true){
            list.classList.add('top-[80px]');
            list.classList.add('opacity-100');
            list.classList.remove('hidden');
            list.classList.add('text-center');
        }
        else{
            list.classList.remove('top-[80px]');
            list.classList.remove('opacity-100');
            list.classList.add('hidden');
            list.classList.remove('text-center');
        }

        setIsLiked((prevIsLiked) => !prevIsLiked);
    };


    return ( 
        <>
        <nav class="bg-[#011F44]">

            <div class="p-5 shadow text-white md:flex md:items-center md:justify-between 2xl:container mx-auto">

                <div class="flex justify-between items-center">

                    <span class="md:text-3xl text-2xl cursor-pointer">
                        MegaStore
                    </span>

                    <span>
                        <i class="text-white text-2xl cursor-pointer mx-2 md:hidden block"><FontAwesomeIcon icon={isLiked ? faBars : faXmark} onClick={handleIconClick}/></i>
                    </span>

                </div> 

                <ul class="md:text-2xl text-1xl md:flex md:items-center md:block hidden md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li class="mx-4 my-6 md:my-0">
                        <Link href="/" class="hover:bg-[#0059BF] p-2 rounded-[10px]">Home</Link>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <Link href="/" class="hover:bg-[#0059BF] p-2 rounded-[10px]">About</Link>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <Link href="/" class="hover:bg-[#0059BF] p-2 rounded-[10px]">Services</Link>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <Link href="/" class="hover:bg-[#0059BF] p-2 rounded-[10px]">Contact</Link>
                    </li>
                </ul>

            </div>

        </nav>
        </>
    );
}
export default Navbar;