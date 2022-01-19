import Image from "next/image";
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon } from '@heroicons/react/solid';

 
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            
            {/* left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="https://res.cloudinary.com/dvhcociyf/image/upload/v1642284603/metas/Airbnb_Logo_B%C3%A9lo.svg_yaks61.png" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>

            {/* middle - search*/}
            <div className="flex items-center border-2 rounded-full md:shadow-lg">
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start you search" />

                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mr-2 cursor-pointer"/>
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a ahost</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div className="flex items-center border-2 rounded-full p-3 space-x-2">
                <MenuIcon className="h-7 cursor-pointer"/>
                <UserCircleIcon className="h-8 cursor-pointer"/>
                </div>
                
            </div>

        </header>
  );
}

export default Header;
