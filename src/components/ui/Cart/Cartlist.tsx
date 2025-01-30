import { RadioGroupItem,RadioGroup } from "@radix-ui/react-radio-group";
import { Button } from "../button";
import EmpytCart from "./EmpytCart";


interface PaymentProps {
    hanldeSetps: () => void;
}


function Cartlist({hanldeSetps}:PaymentProps) {

const carList=[0];

    
  return (
    <>
    {
              carList.length ?
              <div className="relative  min-h-screen  text-center p-8 ">
                  <h2 className=" font-semibold text-xl">Cart</h2>
                  <div className=" mt-8 ">
                      <div className="  mb-12 flex items-start gap-x-8">
                          <div className=" w-[168px]  h-[185px]">
                              <img className="  " src="/mock product/Image (1).png" alt="" />
                          </div>
                          <div>
                              <div className="  text-start">
                                  <h1>Luxe Armchair - Left Arm Chute</h1>
                                  <p>Let’s take a look at how Japanese and Scandinavian styles combine to create beautiful, practical furniture, and which coffee table styles will look great in your Japandi living room.</p>
                                  <h3>$369.00</h3>
                                  <div className=" flex items-center justify-between">
                                      <RadioGroup defaultValue="comfortable" className=" flex  items-center gap-x-4">
                                          <div className="flex items-center space-x-2">
                                              <RadioGroupItem value="default" id="r1" />

                                          </div>
                                          <div className="flex items-center space-x-2">
                                              <RadioGroupItem value="comfortable" id="r2" />
                                          </div>
                                          <div className="flex items-center space-x-2">
                                              <RadioGroupItem value="compact" id="r3" />
                                          </div>
                                      </RadioGroup>

                                      <div className="  w-[54px] h-[60px] bg-primary-300  flex items-center justify-center rounded-3xl text-[#ffff] text-xl font-bold ">1</div>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div className="  mb-12 flex items-start gap-x-8">
                          <div className=" w-[168px]  h-[185px]">
                              <img className="  " src="/mock product/Image (1).png" alt="" />
                          </div>
                          <div>
                              <div className="  text-start">
                                  <h1>Luxe Armchair - Left Arm Chute</h1>
                                  <p>Let’s take a look at how Japanese and Scandinavian styles combine to create beautiful, practical furniture, and which coffee table styles will look great in your Japandi living room.</p>
                                  <h3>$369.00</h3>
                                  <div className=" flex items-center justify-between">
                                      <RadioGroup defaultValue="comfortable" className=" flex  items-center gap-x-4">
                                          <div className="flex items-center space-x-2">
                                              <RadioGroupItem value="default" id="r1" />

                                          </div>
                                          <div className="flex items-center space-x-2">
                                              <RadioGroupItem value="comfortable" id="r2" />
                                          </div>
                                          <div className="flex items-center space-x-2">
                                              <RadioGroupItem value="compact" id="r3" />
                                          </div>
                                      </RadioGroup>

                                      <div className="  w-[54px] h-[60px] bg-primary-300  flex items-center justify-center rounded-3xl text-[#ffff] text-xl font-bold ">1</div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>




                  <div className=" absolute left-0 w-full  bottom-0">
                      <Button onClick={hanldeSetps} className="  w-full  h-[65px]" variant={"default"}   >Next</Button>
                  </div>

              </div> : <EmpytCart/>
    }
    
    
    
    </>
   




  )
}

export default Cartlist