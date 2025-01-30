import { BreadcrumbPage ,Breadcrumb,BreadcrumbItem,BreadcrumbList,BreadcrumbLink,BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import TopProducts from "@/components/ui/TopProducts"
import CustomCarousel from "@/components/ui/CustomCarousel"
function Shope() {
  return (
    <section className=" md:p-20  px-4 flex  flex-col  items-center   gap-8 mb-20 ">
          <h1 className=" font-bold   text-5xl ">Sitting Room</h1>
          <p className="  text-body-sub text-lg">Transform your sitting room with our elegant and functional seating options, perfect for every modern home.</p>
             <div className="">
              <Breadcrumb className=" text-sm" >
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/shope">Shope</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbPage>Sitting Room</BreadcrumbPage>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Breadcrumb>
             </div>
            <div className="relative   ">
                <Search className=" absolute right-7  top-1/2 -translate-y-1/2"/>
              <Input  type="search" className=" md:w-[642px]  h-[64px]   rounded-3xl border-[1px] border-gray-custom-400 p-6   outline-2 focus:outline-primary-500  outline-offset-2   focus:outline-double" placeholder="Search by name or category..."/>
            </div>

          <div className=" flex md:justify-between   justify-center  gap-3 flex-wrap items-center my-8">
              <Button variant={"default"} className="w-[85px] h-[56px] ">
                  All{" "}
              </Button>
              <Button variant={"secondary"} className="w-[134px] h-[56px] ">
                  Bedroom
              </Button>
              <Button variant={"secondary"} className="w-[155px] h-[56px] ">
                  Living room
              </Button>
              <Button variant={"secondary"} className="w-[124px] h-[56px] ">
                  Kitchen
              </Button>
              <Button variant={"secondary"} className="w-[152px] h-[56px] ">
                  Workspace
              </Button>
              <Button variant={"secondary"} className="w-[128px] h-[56px] ">
                  Outdoor
              </Button>
              <Button variant={"secondary"} className="w-[140px] h-[56px] ">
                  Bathroom
              </Button>
              <Button variant={"secondary"} className="w-[159px] h-[56px] ">
                  Home office
              </Button>
              <Button variant={"secondary"} className="w-[159px] h-[56px] ">
                  Dining room
              </Button>
          </div>
          <div>
            <TopProducts/>
          </div>
        

        <CustomCarousel/>



    </section>
  )
}

export default Shope