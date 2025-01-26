import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle
import Login from "../ui/Auth/Login";
import { useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
function TheHeader () {
  const [toggle,SetToggle]=useState(true);
  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/" },
    { title: "Categories", path: "/" },
    { title: "Blog", path: "/" },
  ];
  const  hande=()=>{
   console.log('hi');
   
    SetToggle(!toggle)
  }

  return (
    <header className="flex md:px-[48px] lg:px-[100px] items-center justify-between px-[18px] lg:h-[92px] md:h-[72px] h-[46px]">
      <div className="w-[60px] h-[18px] md:w-[83px] md:h-[30px]">
        <img className="w-full h-full" src="/branding.svg" alt="Brand Logo" />
      </div>

      <nav className="hidden lg:block w-[321px] h-[37px]">
        <ul className="flex items-center gap-x-10 p-[10px]">
          {NavLinks.map((link, index) => (
            <li className="text-sm font-semibold" key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Part */}
      <div className="hidden lg:flex w-[258px] h-[62px] items-center gap-x-3">
        <div className="w-16 h-16 bg-primary-50 flex items-center justify-center rounded-full">
          <img className="w-6 h-6" src="/cart.svg" alt="Cart Icon" />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"default"} className="w-[166px] h-[65px]">
              <span>Get Started</span>
              <img src="/public/arrow-right.svg" alt="Arrow Right" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-primary-50">
            {/* Add DialogTitle for accessibility */}
            <VisuallyHidden>
              <DialogTitle>Get Started Form</DialogTitle>
            </VisuallyHidden>
           
           {
              toggle ? (<Login   />) : (<div className="w-[720px] text-center">
                <h2 className="  text-lg font-bold  text-heading-main">Create an account</h2>
                <div className="  my-8 flex justify-center">

                  <img src="/chair.jpg" alt="" />
                </div>
                <form className=" flex flex-col items-center gap-3">
                  <h3 className=" text-center  text-xl font-semibold ">Let's get your account set up</h3>
                  <Input className="h-[65px] w-[353px] rounded-[300px] border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500 " placeholder='Email' />
                  <Input className="h-[65px] w-[353px] rounded-[300px]  border-[1px] border-gray-custom-400 pl-5 focus:border-primary-200  outline-offset-2 focus:outline-double  focus:outline-primary-500 " placeholder='Password' />
                  <Button className=" w-[353px] h-[56px]" variant={"default"} >Create account</Button>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" className=" w-6 h-6 accent-primary-500" />
                    <label
                      htmlFor="terms"
                      className="text-sm  w-[297px]  text-start  text-gray-custom-300 leading-5  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the Terms and Conditions of Furniture and acknowledge the Privacy Policy
                    </label>
                  </div>
                  <p className=" font-semibold   cursor-pointer text-body-sub">Already have an account?<span  onClick={()=>hande} className=" text-primary-500">Login</span></p>
                </form>
              </div>)
          }   
          
            





          </SheetContent>
        </Sheet>
      </div>




      <Sheet>
        <SheetTrigger asChild>
          <div className="block lg:hidden w-6 h-6 md:w-8 md:h-8">
            <img className="w-full h-full" src="/menu.svg" alt="Menu Icon" />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-primary-50 w-2/3">
          {/* Add DialogTitle for accessibility */}
          <VisuallyHidden>
            <DialogTitle>Get Started Form</DialogTitle>
          </VisuallyHidden>

         <div className="">


         </div>

        






        </SheetContent>
      </Sheet>

      
   
    
    </header>
  );
}

export default TheHeader;