import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import Login from "../ui/Auth/Login";
import { useState } from "react";
import SignUp from "../ui/Auth/SignUp";
import ForgetPassword from "../ui/Auth/ForgetPassword";
import CheckOut from "../ui/Cart/CheckOut";
import OrderConfirm from "../ui/Cart/OrderConfirm";
import Payment from "../ui/Cart/Payment";
import Cartlist from "../ui/Cart/Cartlist";

function TheHeader() {
  const [toggle, setToggle] = useState<boolean>(false); // Toggle between Login and SignUp
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false); // Controls the Sheet visibility
  const [OpenCart, setOpenCart] = useState<boolean>(false); // Controls the Sheet visibility
  const [openForgetPage, setOpenForgetPage] = useState<boolean>(false); // Controls ForgetPassword page
  const [currentStep, setCurrentStep] = useState<number>(0); // Current step in the cart flow

  const handleOpenForgetPage = () => setOpenForgetPage(!openForgetPage);

  const handleToggle = () => {
    setToggle(!toggle);
    setOpenForgetPage(false);
    setIsSheetOpen(true);
  };

  const NavLinks: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shope" },
    { title: "Categories", path: "/" },
    { title: "Blog", path: "/articles" },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <header className="flex md:px-[48px] lg:px-[100px] mt-2 items-center justify-between px-[18px] lg:h-[92px] md:h-[72px] h-[46px]">
      {/* Brand Logo */}
      <div className="w-[60px] h-[18px] md:w-[83px] md:h-[30px]">
        <img className="w-full h-full" src="/branding.svg" alt="Brand Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:block w-[321px] h-[37px]">
        <ul className="flex items-center gap-x-10 p-[10px]">
          {NavLinks.map((link, index) => (
            <li className="text-sm font-semibold" key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Cart and Get Started Buttons */}
      <div className="flex md:w-[258px] h-[62px] items-center gap-x-3">
        <Sheet open={OpenCart} onOpenChange={setOpenCart}>
          <SheetTrigger asChild>
            <div className="md:w-16 md:h-16 w-8 h-8 cursor-pointer bg-primary-50 flex items-center justify-center rounded-full">
              <img className="md:w-6 md:h-6 w-5 h-5" src="/cart.svg" alt="Cart Icon" />
            </div>
          </SheetTrigger>
          <SheetContent className="md:w-1/2 w-full mx-auto overflow-y-scroll bg-primary-50">
            <VisuallyHidden>
              <DialogTitle>Get Started Form</DialogTitle>
            </VisuallyHidden>
            <div className="relative">
              <div className="w-full flex justify-end absolute top-0 right-0">
                <Button
                  onClick={handlePrevious}
                  variant={"outline"}
                  className={`font-bold text-xl z-20 ${currentStep > 0 ? "cursor-pointer" : "cursor-not-allowed"}`}
                >
                  Back
                </Button>
              </div>

              <div className="flex justify-center">
                {currentStep === 0 && <Cartlist hanldeSetps={handleNext} />}
                {currentStep === 1 && <CheckOut hanldeSetps={handleNext} />}
                {currentStep === 2 && <Payment handleSteps={handleNext} />}
                {currentStep === 3 && <OrderConfirm />}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant={"default"} className="md:w-[166px] md:h-[65px]">
              <span>Get Started</span>
              <img src="/public/arrow-right.svg" alt="Arrow Right" />
            </Button>
          </SheetTrigger>
          <SheetContent className="md:w-1/2 w-full overflow-y-scroll mx-auto bg-primary-50">
            <VisuallyHidden>
              <DialogTitle>Get Started Form</DialogTitle>
            </VisuallyHidden>
            <div className="flex justify-center text-center">
              {toggle ? (
                openForgetPage ? (
                  <ForgetPassword handleOpenForgetPage={handleOpenForgetPage} />
                ) : (
                  <Login
                    handleToggle={handleToggle}
                    handlOpenForegePage={handleOpenForgetPage}
                  />
                )
              ) : (
                <SignUp handleToggle={handleToggle} />
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Menu Icon */}
      <div className="block lg:hidden w-6 h-6 md:w-8 md:h-8">
        <img className="w-full h-full" src="/menu.svg" alt="Menu Icon" />
      </div>
    </header>
  );
}

export default TheHeader;