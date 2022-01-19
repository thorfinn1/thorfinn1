import Image from "next/image";

function MediumCard({img, title}) {
  return (
  <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
    <div className="relative h-60 w-72 sm:h-80 sm:w-80">
        <Image src={img} layout='fill' className="rounded-xl pb-5"/>
    </div>

    <div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>

  </div>
  
  );
}
 
export default MediumCard;
