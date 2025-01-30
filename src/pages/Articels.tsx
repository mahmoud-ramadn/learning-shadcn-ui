import { Button } from "@/components/ui/button"

function Articels() {

  const Articels=[
    {
    img:"/public/Articles/Blog Image.jpg",
    title:'The Art of Minimalism: How to Achieve a Sleek Look',
    des:'Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.'
  },
    {
    img:"/public/Articles/Blog Image.jpg",
    title:'The Art of Minimalism: How to Achieve a Sleek Look',
    des:'Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.'
  },
    {
    img:"/public/Articles/Blog Image.jpg",
    title:'The Art of Minimalism: How to Achieve a Sleek Look',
    des:'Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.'
  },
    {
    img:"/public/Articles/Blog Image.jpg",
    title:'The Art of Minimalism: How to Achieve a Sleek Look',
    des:'Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.'
  },
    {
    img:"/public/Articles/Blog Image.jpg",
    title:'The Art of Minimalism: How to Achieve a Sleek Look',
    des:'Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.'
  },
    {
    img:"/public/Articles/Blog Image.jpg",
    title:'The Art of Minimalism: How to Achieve a Sleek Look',
    des:'Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.'
  },

]




  return (<main className="  container mx-auto md:p-20 px-4 py-12">
    <h1 className=" font-bold  text-5xl text-heading-main">Transforming Your Living Space: Top Trends in Modern Furniture</h1>
    <p className=" text-lg text-body-sub my-8 ">Explore the latest trends in modern furniture design that can elevate your living space with style and functionality</p>
    <Button  className="w-[169px] h-[65px] mb-12 bg-primary-50  text-heading-main">
      <span>Read article</span>
      <img src="/public/arrow-right.svg" alt="Arrow Right" />
    </Button>
    <div className=" w-full h-[447px]">
      <img className=" aspect-3/2 w-full h-full object-cover" src="/article.jpg" alt="" />
    </div>
    {/* araticla */}
    <section className=" my-20">
      <h1 className=" font-semibold   text-4xl  mt-8 ">Latest Articles</h1>

      <div className=" grid  lg:grid-cols-3  md:grid-cols-4   gap-8  grid-cols-1 mt-8 mb-24">
        {
        Articels.map((art,index)=>(
          <div key={index}  className=" lg:col-span-1 md:col-span-2 col-span-1   ">
            <img  className=" w-full   hover:scale-105  cursor-pointer  duration-100 ease-linear delay-100 transition-all " src={art.img} alt="imge" />
            <h2 className=" mt-6 font-semibold  text-2xl text-heading-main">{art.title}</h2>
            <p className=" text-body-sub  my-6 ">{art.des}</p>
            <Button className=" bg-heading-secondary  text-primary-500  w-[128px]  h-[30px]">Interior Design</Button>
          </div>
        ))
        }


      </div>

<div className="  flex  justify-center ">
      <Button variant={"outline"} className="  w-[192px] h-[56px] rounded-[300px]">Show all articles</Button>
</div>


    </section>
  </main>
  )
}

export default Articels