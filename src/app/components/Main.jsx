import Image from "next/image"
import House from '../../../public/house-main.png'

export default function Main() {
    return (
        <div className="mt-12 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] w-auto h-auto rounded-2xl py-24 px-6 mx-6 flex justify-between items-center relative overflow-visible">

            <div className="flex flex-col gap-6 mb-16">
                <p className="font-normal">Welcome to Realstate</p>
                <h1 className="text-7xl font-semibold">Manage Your <br /> Property</h1>
                <p>Your will have everything nearby supermaket, buses, <br /> station, the carmen neighborhood, etc</p>
                <div>
                    <input className="py-4 px-4 rounded-l-full" placeholder="Enter your email" type="text" name="email" id="email" />
                    <button className="bg-zinc-800 text-white font-bold py-4 px-6 rounded-full ml-[-20px] transition-all ease-in hover:bg-gray-700">Get a Quote</button>
                </div>
            </div>

            <div className="absolute -bottom-12 right-0 z-10">
                <Image src={House} size={650} height={650} className="object-cover" alt="Main" />
            </div>
        </div>
    )
}