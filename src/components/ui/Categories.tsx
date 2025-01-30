import { Button } from "./button"


function Categories() {
  return (<section className="lg:w-full md:container mx-auto md:space-y-8 space-y-5 mb-8">
    <h1 className="  font-semibold   md:text-[39px]  text-xl text-heading-main ">Categories</h1>
    {/* gird cards */}
    <div className=" grid md:grid-cols-2  grid-cols-1  md:gap-8 gap-5 ">
      <div className="  md:col-span-2  col-span-1  bg-card-bg  flex items-center justify-between   lg:h-[453px] md:h-[300px] h-[173px]
         lg:pl-[107px] md:pl-[58px]  pl-7
      ">
      <div className="  w-fit space-y-7     ">
          <h3 className="  md:text-2xl text-xl font-semibold  text-heading-main ">Sitting Room</h3>
          <Button variant={"outline"} className="w-[155px] h-[56px] md:flex hidden  rounded-[300px] gap-x-4 items-center   " >
            <span>Shop Now</span>
            <img src='/arrow-right.svg' />
          </Button>
      </div>

<div className="md:w-[656px] w-[361px] h-full ">
  <img  className="  w-full h-full    object-cover " src="/categories/sofa.webp" alt="" />
</div>
</div>








      <div className="  col-span-1 bg-card-bg  flex md:flex-col-reverse lg:flex-row   md:p-4   justify-between items-center  
      
      lg:pl-[107px] md:pl-[57px]  p-5 lg:h-[453px] md:h-[300px] h-[173px] ">

        <div className=" flex flex-col justify-start  space-y-6 items-center ">
          <h3 className="  md:text-2xl text-xl font-semibold  text-heading-main ">Kitchen</h3>
          <Button variant={"outline"} className="w-[155px] h-[56px] md:flex  hidden  rounded-[300px] gap-x-4 items-center   " >
            <span>Shop Now</span>
            <img src='/arrow-right.svg' />
          </Button>
        </div>

        <div className="lg:w-[350px] lg:h-[338px] md:w-[136px] md:h-[132px]   w-[135px] h-[130px">
          <img className=" w-full h-full object-cover " src="/tree (2).png" alt="" />
        </div>

      </div>




      <div className="  col-span-1 bg-card-bg  flex md:flex-col-reverse lg:flex-row   md:p-4  justify-between  items-center  
      
      lg:pl-[107px]  p-5 lg:h-[453px] md:h-[300px] h-[173px] ">

        <div className=" flex flex-col justify-start  space-y-6 items-center ">
          <h3 className="  md:text-2xl text-xl font-semibold  text-heading-main ">Kitchen</h3>
          <Button variant={"outline"} className="w-[155px] h-[56px] md:flex  hidden  rounded-[300px] gap-x-4 items-center   " >
            <span>Shop Now</span>
            <img src='/arrow-right.svg' />
          </Button>
        </div>

        <div className="lg:w-[350px] lg:h-[338px] md:w-[136px] md:h-[132px]   w-[135px] h-[130px">
          <img className=" w-full h-full object-cover  " src="chatel.png" alt="" />
        </div>

      </div>

      <div className="  md:col-span-2  col-span-1  flex  items-center justify-between bg-card-bg rounded-[6px]  
      lg:pl-[107px] md:pl-[57px]  p-5 lg:h-[453px] md:h-[300px] h-[173px] ">
        <div className=" space-y-6 flex flex-col justify-start">
        <h2 className=" font-semibold text-xl text-heading-main">Bedroom</h2>
          <Button variant={"outline"} className="w-[155px] h-[56px] md:flex  hidden  rounded-[300px] gap-x-4 items-center   " >
            <span>Shop Now</span>
            <img src='/arrow-right.svg' />
          </Button>
        </div>

        <div className=" lg:w-[350px] lg:h-[338px] md:w-[208px] md:h-[198px]  w-[135px] h-[130px]">
        <img className="   float-right" src="/furnnno.png" alt="" />
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Categories