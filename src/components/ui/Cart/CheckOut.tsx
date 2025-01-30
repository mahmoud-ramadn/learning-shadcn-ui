import { Button } from "../button";
import { Input } from "../input";


interface PaymentProps {
  hanldeSetps: () => void;
}


function CheckOut({ hanldeSetps } : PaymentProps) {
  return (
    <div className=" relative  min-h-screen  text-center p-8 ">
      <h2 className=" font-semibold text-xl">Checkout</h2>
      <div className=" mt-8 flex justify-center ">
        <div className=" w-[353px] h-[629px]  space-y-6  ">
          <h3 className=" text-body-sub  text-xl">Customer Information</h3>
          <p className="  text-body-sub">
            Have an account?{" "}
            <span className=" text-primary-500 text-base font-semibold">
              Login
            </span>
          </p>
          <Input
            className="w-full h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
            placeholder="examle@gamil.com"
          />
          <h2 className=" font-semibold  text-xl text-body-sub">
            Shipping address
          </h2>
          <Input
            className="w-full h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
            placeholder="First name"
          />
          <Input
            className="w-full h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
            placeholder="Last name"
          />
          <Input
            id="mobile"
            name="mobile"
            className="w-full h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
            pattern="[0-9]{10}"
            required
            type="tel"
            placeholder="Enter your mobile number"
          />
          <Input
            className="w-full h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
            placeholder="Address"
          />
          <div className=" flex  gap-x-4 items-center">
            <Input
              className="w-1/2 h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
              placeholder="City"
            />
            <Input
              className="w-1/2 h-[65px] rounded-3xl  border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500   "
              placeholder="Country"
            />
          </div>
        </div>
      </div>

      <div className=" absolute left-0 w-full  bottom-0 px-4">
        <Button onClick={hanldeSetps} className="  w-full  h-[65px] " variant={"default"}>
          Proceed to payment
        </Button>
      </div>

    </div>
  );
}

export default CheckOut;
