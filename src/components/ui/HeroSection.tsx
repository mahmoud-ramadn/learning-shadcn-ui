
function HeroSection() {
  return (<section  className=" pt-8 lg:mb-[92px]  md:mb-[117px] mb-8 ">
{/* hero text */}
<div  className="    space-y-6 mx-auto mb-6 text-center">
          <h4 className="  text-black  md:text-lg text-sm  md:font-medium font-semibold">FURNITURE STORE</h4>
          <h1 className=" text-heading-main  lg:text-6xl  md:text-5xl  text-2xl font-bold">Discover the Artistry of Modern Contemporary Furniture</h1>
          <p className=" text-body  font-normal  text-base  md:text-xl px-5 ">Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation</p>
</div>
{/* hero Image */}
<div className=" w-full object-cover  ">
    <img className="w-full object-cover" src="/hero.webp" alt="" />
</div>
  </section>
  )
}

export default HeroSection