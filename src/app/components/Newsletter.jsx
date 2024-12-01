import newsletter from '../../../public/newsletter.png'
import Image from "next/image"

export default function Newsletter() {
    return (
        <div className='mt-12 mb-20 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] w-auto h-auto rounded-2xl py-6 px-6 mx-6 flex justify-between items-center relative overflow-visible'>
            <div className='flex flex-col gap-6 mb-32 mt-8'>
                <h1 className='font-semibold text-6xl'>Subscribe Our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit <br/> pellentesque sollicitudin. Egestas faucibus lacus diam in senectus <br/> consectetur. Mattis elit adipiscing quisque tellus scelerisque <br/> vehicula ante nunc.</p>
                <div>
                    <input className='py-4 px-4 rounded-l-full' placeholder="Enter your email" type="text" name="email" id="email" />
                    <button className='bg-zinc-800 text-white font-bold py-4 px-6 rounded-full ml-[-20px] transition-all ease-in hover:bg-gray-700'>Get a Quote</button>
                </div>
            </div>

            <div className='absolute -bottom-12 right-0 z-10'>
                <Image src={newsletter} sizes={570} height={570} alt='newsletter' />
            </div>
        </div>
    )
}