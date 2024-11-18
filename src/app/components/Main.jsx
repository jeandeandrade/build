import Image from "next/image"
import House from '../../../public/house-main.png'

export default function Main() {
    return (
        <div className="mt-20 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] w-auto h-auto rounded-2xl py-24 px-6 mx-6 flex justify-between items-center">

            <div className="flex flex-col gap-6">
                <p className="font-semibold">Welcome to Realstate</p>
                <h1 className="text-6xl font-bold">Manage Your Property</h1>
                <p>Your will have everything nearby supermaket, buses, station, the carmen neighborhood, etc </p>
                <div>
                    <input className="py-4 px-6 rounded-l-full" type="text" name="email" id="email" />
                    <button className="bg-gray-950 text-white py-4 px-6 rounded-full ml-[-20px] hover:bg-gray-700">Get a Quote</button>
                </div>
            </div>

            <div>
                <Image src={House} width={400} alt="Main"/>                
            </div>
        </div>   
    )
}