import { Breadcrumb,BreadcrumbItem,BreadcrumbList,BreadcrumbSeparator,BreadcrumbLink,BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import CustomCarousel from "@/components/ui/CustomCarousel"
import { CheckIcon } from "lucide-react"
function SingleProduct() {
  return (
    <div className=" container mx-auto p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Categories">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Sitting Room</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Luxe Armchair - Left Arm Chute</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
       <div className=" grid md:grid-cols-2   gap-8  grid-cols-1 mt-8 ">

        <div className=" col-span-1  gap-2 flex md:flex-col flex-row    overflow-x-scroll ">
          <div >
            <img src="/public/singel Mock product/image 1.jpg" alt="" />
          </div>
          <div>
            <img src="/public/singel Mock product/PDP Image-1.jpg" alt="" />
          </div>
          <div>
            <img src="/public/singel Mock product/PDP Image-2.jpg" alt="" />
          </div>
          <div>
            <img src="/singel Mock product/PDP Image.jpg" alt="" />
          </div>
        </div>

        <div className=" col-span-1 
         h-[643px] pt-2 pl-8 pr-4">
          <h2 className=" text-3xl font-medium text-heading-main">Luxe Armchair - Left Arm Chute</h2>
          <div className="  flex items-center  mt-2 gap-x-2">
            <img src="/stars/Vector-1.jpg" alt="" />
            <img src="/stars/Vector-1.jpg" alt="" />
            <img src="/stars/Vector-1.jpg" alt="" />
            <img src="/stars/Vector-1.jpg" alt="" />
            <img src="/stars/Vector-1.jpg" alt="" />
            <img src="/stars/Vector-1.jpg" alt="" />
            <span className="  text-heading-main text-base">4.8 stars</span>
          </div>
          <div className=" flex  items-center my-6 gap-x-[6px]">
            <h2 className=" text-2xl font-semibold text-heading-brand">$899.00</h2>
            <h4 className=" text-heading-main  font-normal">$1999.00</h4>
            <span className=" rounded-[300px]   bg-[#F65061]/20  text-[#F65061] font-medium py-1 px-2 "> -40%</span>

          </div>
          <p className=" text-xl  text-heading-main">Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor. It features a neutral color palette and natural wood accents, highlighted by uniquely designed hexagonal legs. </p>
           
           <div className=" flex justify-between my-10">
             <div className=" flex items-center gap-x-[26px]">
              <div className=" w-[54px] rounded-3xl bg-[#686A74] h-[54px] flex items-center justify-center">
              <CheckIcon className=" text-primary-50"/>
             </div>
              <div className=" w-[54px] rounded-3xl bg-[#B6978D] h-[54px] flex items-center justify-center">
            
             </div>
              <div className=" w-[54px] rounded-3xl bg-[#8D9EB6] h-[54px] flex items-center justify-center">
     
             </div>




             </div>
 
            <div className=" w-[77px] h-[63px]  rounded-3xl   bg-primary-50 flex  items-center justify-center text-2xl  font-semibold text-heading-main">
              1
            </div>

           </div>
           <Button  className=" w-full h-[63px] " variant={"default"}>Buy Now</Button>

           <div>
            <div className="  flex items-center gap-x-2 my-10">
              <img src="/Box.png" alt="" />
              <h2>Free shipping included</h2>
            </div>
            <div className=" flex items-center gap-x-2">
              <img src="/Leaf.png" alt="" />
              <h2>Made from the best of materials sourced</h2>
            </div>


           </div>


        </div>
       </div>



<div className=" mb-8">
      <CustomCarousel/>
</div>







    </div>
  )
}

export default SingleProduct