import { Button } from "../button"

import * as SheetPrimitive from "@radix-ui/react-dialog";



function OrderConfirm() {
    const SheetClose = SheetPrimitive.Close;

  return (
    <div className=" w-[464px] mx-auto flex flex-col items-center text-center px-4">
        <img className="mt-[108px]" src="/tree.png" alt="" />
          <h2 className=" text-2xl font-medium mt-8 mb-6 text-heading-main">Your Order is Confirmed!</h2>
          <p className=" text-body-sub">Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!</p>
          <SheetClose>
          <Button  className="md:w-[464px]  w-full  h-[56px] mt-[96px] " >Done</Button>
          </SheetClose>
    </div>
  )
}

export default OrderConfirm