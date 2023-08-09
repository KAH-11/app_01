import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer class="bg-[#011f44] mt-[200px] p-5 text-center justify-center text-white md:text-2xl text-1xl">
            
            <div class="mt-[20px]">
                <ul >
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/">Home</Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/">About</Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/">Services</Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/">Contact</Link></li>
                </ul>
            </div>

            <div class="mt-[20px]">
                <ul>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/" ><FontAwesomeIcon icon={faFacebook} /></Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                    <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] hover:p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                </ul>
            </div>

            <div class="mt-[20px]">
                <p>Copyright 2023 by KAH. All Rights Reserved.</p>
            </div>

        </footer>
     );
}
 
export default Footer;