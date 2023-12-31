import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer class="bg-[#011f44]">
            
            <div class=" mt-10 p-5 text-center justify-center text-white md:text-2xl text-1xl 2xl:container mx-auto">

                <div class="mt-[20px]">
                    <ul >
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/">Home</Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/about">About</Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/services">Services</Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div class="mt-[20px]">
                    <ul>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/" ><FontAwesomeIcon icon={faFacebook} /></Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                        <li class="mx-2 inline"><Link class="hover:bg-[#0059BF] p-2 rounded-[10px]" href="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    </ul>
                </div>

                <div class="mt-[20px]">
                    <p>Copyright 2023 by KAH. All Rights Reserved.</p>
                </div>

            </div>

        </footer>
     );
}
 
export default Footer;