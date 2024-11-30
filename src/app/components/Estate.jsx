import estate from '../../../public/estate.jpeg'
import Image from "next/image"

export default function Estate() {
    return (
        <div className="mx-20 my-20">
            <div className="w-auto text-center mb-12">
                <h1 className="text-5xl font-bold">We are a global, boutique real <br/> estate brokerage</h1>
            </div>

           <div className='flex gap-8 mx-12'>
            <div className="flex flex-col gap-4 w-full mt-12">
                <h2 className="font-semibold text-4xl">The transfer of real estate</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet <br/> sit pellentesque sollicitudin. Egestas faucibus lacus diam in <br/> senectus consectetur. Mattis elit adipiscing quisque tellus <br/> scelerisque vehicula ante nunc. Tellus consequat nisl quis <br/> nisl justo.
                </p>
                <div className='flex gap-10'>
                    <button className='mt-10 px-10 py-5 rounded-full bg-zinc-700 text-white hover:bg-zinc-600 transition-all ease-in'>Book Now!</button>
                    <button className='mt-10 px-10 py-5 rounded-full bg-white border border-zinc-300 text-black hover:bg-zinc-50 transition-all ease-in'>Read More</button>
                </div>
                <div className='flex gap-24 mt-16'>
                    <div>
                        <h2 className='text-6xl font-bold mb-1'>12+</h2>
                        <p>Customers</p>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold mb-1'>14+</h2>
                        <p>Offices</p>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold mb-1'>10+</h2>
                        <p>Students</p>
                    </div>
                </div>
            </div>
                <div className='w-full ml-32 saturate-150'>
                    <Image src={estate} className='object-cover  w-auto h-auto' alt='estate image'/>
                </div>
           </div>
        </div>
    )
}