import Image from "next/image";

function LargeCard({img, title, description, button}) {
  return ( 
    <div className="relative py-16 cursor-pointer">
        
        <div className="relative h-96 w-auto min-w-[300px]">
            <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
        </div>

        <div className="absolute top-1/4 left-12 w-72"> 
            <h3 className="text-4xl">{title}</h3>
            <p className=" font-semibold pt-3">{description}</p>
            <button className="my-5 py-2 px-4 align-middle text-sm text-white bg-gray-900 rounded-md">{button}</button>
        </div>

    </div> 
  );
}

export default LargeCard;
