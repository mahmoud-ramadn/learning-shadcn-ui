import Categories from "@/components/ui/Categories"
import HeroSection from "@/components/ui/HeroSection"
import TopProducts from "@/components/ui/TopProducts"
function Home() {
  return (
    <section className="  lg:p-20 md:px-[48px] md:pt-20  px-4  ">
<HeroSection/>   
<Categories/> 
<TopProducts/>
    </section>
  )
}

export default Home