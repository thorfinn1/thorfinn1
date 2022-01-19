import Columns from "./Columns";

function Footer() {
  return (
      <div className="pb-20">
        <div className="flex-column space-y-10 md:space-y-0 px-10 md:flex justify-left md:space-x-44 md:px-36 pt-10 pb-10  max-w-7xl mx-auto px-8 sm:px-16">
                <Columns 
                title="Support"
                p1="Help Center"
                p2="This site is"
                p3="Not real"
                p4="It's a clone"
                />  

                <Columns 
                title="Community"
                p1="Accessibility"
                p2="Privacy policy"
                p3="Terms and conditions"
                />

                <Columns 
                title="Hosting"
                p1="Try Hosting"
                p2="Or let me build"
                p3="A site for you"
                />

                <Columns 
                title="About"
                p1="Newsroom"
                p2="Our Team"
                p3="Careers"
                p4="Investors"
                />
            </div>
            <div className="max-w-7xl mx-auto px-10 pt-20 sm:px-16 flex justify-center">
                <h2>Designed &amp; Developed by <a href="https://atlasvirtual.ca/" className="underline cursor-pointer hover:text-orange-600">Zia</a></h2>
        </div>
    </div>
 );
}

export default Footer;
