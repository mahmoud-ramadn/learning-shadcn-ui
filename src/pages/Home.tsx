import Categories from "@/components/ui/Categories"
import DesignInspiration from "@/components/ui/DesignInspiration"
import HeroSection from "@/components/ui/HeroSection"
import Question from "@/components/ui/Question"
import TopProducts from "@/components/ui/TopProducts"
function Home() {
  return (
    <section className="  lg:p-20 md:px-[48px] md:pt-20  px-4  ">
<HeroSection/>   
<Categories/> 
<TopProducts/>
<DesignInspiration/>
<Question/>
</section>
  )
}

export default Home