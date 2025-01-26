
function TheFooter() {
  return (
    <div className=" bg-[#101010] flex  flex-wrap md:justify-center   justify-start  gap-6 md:p-[80px] px-4 py-8">
      <div className=" md:w-[290px] h-[202px] flex justify-between flex-col ">
        <img className=" w-[83px] h-[30px]" src="/branding.svg" alt="" />
        <div  className="  text-primary-50  flex  gap-x-3  flex-wrap ">
          <span>Home</span> <span>/</span><span>blog</span> <span>/</span> <span>sale</span>  <span>/</span> <span>AboutUs</span> /
        </div>
      </div>
      <div className="md:w-[290px] flex justify-between flex-col text-primary-50 h-[202px]">
        <p>Contact Us</p>
        <h4>+1 999 888-76-54</h4>
        <p>Email</p>
        <h4>hello@logoipsum.com</h4>
      </div>
      <div className="md:w-[290px] flex justify-between flex-col text-primary-50 h-[202px]">
        <p>Contact Us</p>
        <h4>+1 999 888-76-54</h4>
        <p>Email</p>
        <h4>hello@logoipsum.com</h4>
      </div>
      <div className="md:w-[290px] flex justify-between flex-col text-primary-50 h-[202px]">
        <p>Contact Us</p>
        <h4>+1 999 888-76-54</h4>
        <p>Email</p>
        <h4>hello@logoipsum.com</h4>
      </div>
   </div>
  )
}

export default TheFooter