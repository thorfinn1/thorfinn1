import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="/dvhcociyf/image/upload/v1642634347/metas/airbnb-clone/57b9f708-bb12-498c-bc33-769f8fc43e63_fik2hy.webp" layout="fill"
            objectFit="cover" 
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 border-2 rounded-full py-4 font-bold px-8 mt-3 bg-white border-white shadow-md hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div> 
    )
}

export default Banner
