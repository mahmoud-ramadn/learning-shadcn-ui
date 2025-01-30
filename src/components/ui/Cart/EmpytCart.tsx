import { Button } from "../button";
import * as SheetPrimitive from "@radix-ui/react-dialog";

function EmpytCart() {
    



    const SheetClose = SheetPrimitive.Close;



    
    

    
    
  return (
    <div className=" flex  relative min-h-screen flex-col  items-center ">
          <h2 className=" text-2xl font-semibold text-heading-main ">Cart</h2>
          <h3 className="text-2xl font-semibold text-heading-main mb-8 mt-28">Your cart is empty</h3>
          <img src="/light.png" alt="light" />



          <SheetClose>
              <Button  className="  bg-primary-500  rounded-[300px] text-primary-50 h-[65px]">
                  SHOP ALL
              </Button>
          </SheetClose>


    </div>
  )
}

export default EmpytCart