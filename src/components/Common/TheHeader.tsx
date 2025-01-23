import { Link } from "react-router-dom"
import { Button } from "../ui/button"

function TheHeader() {
  
  const NavLinks=[
    
    {
    title:'Home',
    path:'/'
  },
    {
      title:'Shop',
    path:'/'
  },
    {
      title:'Categories',
    path:'/'
  },
    {
      title:'Blog',
    path:'/'
  },


]



  return (<header className="flex  md:px-[48px] lg:px-[100px]   items-center  justify-between  px-[18px] lg:h-[92px]  md:h-[72px] h-[46px]">
    <div className="w-[60px] h-[18px] md:w-[83px] md:h-[30px]">
      <img className="  w-full h-full  " src="/branding.svg" alt="" />
    </div>

    <nav className=" hidden  lg:block w-[321px] h-[37px]">
      <ul className=" flex  items-center gap-x-10 p-[10px] ">
      {
        NavLinks.map((link,index)=>(  
        <li className=" text-sm  font-semibold " key={index}>
          <Link to={link.path}>{link.title}</Link>
        </li>
        ))
      }


      </ul>



    </nav>



{/* right part */}
    <div className="   hidden  lg:flex w-[258px] h-[62px  items-center gap-x-3">


      <div className="  w-16 h-16  bg-primary-50 flex items-center justify-center rounded-full ">
      <img className=" w-6 h-6 " src="/cart.svg" alt="" />
      </div>

      <Button variant={"default"}  className="w-[166px] h-[65px]   " >
        <span>Get Started</span>
        <img src='/public/arrow-right.svg'/>
      </Button>

</div>



<div className="  block lg:hidden   w-6 h-6  md:w-8  md:h-8 ">
  <img  className='w-full h-full' src="/menu.svg" alt="" />
</div>




  </header>
  )
}

export default TheHeader