import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./carousel";
import { RadioGroup,RadioGroupItem } from "./radio-group";

const productData = [
    {
        image: '/mock product/Image (1).png',
        des: 'Faux Leather Sofa Couch',
        price: '$129'
    },
    {
        image: '/mock product/Image (2).png',
        des: 'Boucle Accent Chair',
        price: '$120'
    },
    {
        image: '/mock product/Image (3).png',
        des: 'Ceramic Flower Vase',
        price: '$12'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
];

function CustomCarousel() {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="container mx-auto"
            >
                <div className="flex justify-between items-center my-8">
                    <h1 className="md:text-3xl font-bold text-heading-main">People Also Viewed</h1>
                    <div className="space-x-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className=" ">
                    {productData.map((item, index) => (
                        <CarouselItem key={index} className="lg:w-1/4 md:1/2 w-full ">
                            <div>
                                <div className="md:h-[313px] h-[173px] rounded-md overflow-hidden">
                                    <img className="w-full h-full object-cover" src={item.image} alt="" />
                                </div>
                                <div className="flex items-center justify-between md:h-[62px]">
                                    <h3 className="font-medium md:text-lg">{item.des.substring(0,20)}...</h3>
                                    <span className="bg-primary-50 rounded-[300px] text-heading-main md:text-lg font-semibold flex items-center justify-center w-[71px] h-[38px]">
                                        {item.price}
                                    </span>
                                </div>
                                <RadioGroup className="flex items-center" defaultValue="comfortable">
                                    <RadioGroupItem className="bg-primary-200" value="default" id="r1" />
                                    <RadioGroupItem className="bg-[#834F65]" value="comfortable" id="r2" />
                                </RadioGroup>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
}

export default CustomCarousel;