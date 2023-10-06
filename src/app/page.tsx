"use client";
import BannerSlider from "../modules/slider";
import ProductCard from "@/modules/productCard";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Slider from "react-slick";
import InfoCard from "@/modules/infoCard";
import { Button } from "@/components/ui/button";
import ReadMoreCard from "@/modules/readMoreCard";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute right-[-4%] top-[50%]"}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={
          "https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/abtest-Arrow-next.svg"
        }
        alt="next"
        width={48}
        height={48}
      />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute left-[-4%] top-[50%]"}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={
          "https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/abtest-Arrow-prev.svg"
        }
        alt="prev"
        width={48}
        height={48}
      />
    </div>
  );
}
const moreFrombeerStore = [
  {
    title: "2022 Stewardship Report, Circularity in Action for 95 Years",
    description:
      "At The Beer Store, we are serious about our commitment to the environment. We work hard every day to protect the environment...",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2021/04/StewardshipReport2020_Web-2.jpeg",
      alt: "keith",
    },
  },
  {
    title: "Careers at The Beer Store",
    description: "Are you a beer enthusiast? Come work with us!",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
      alt: "keith",
    },
  },
  {
    title:
      "The Beer Store and Goodwill Industries announces partnership to recycle used uniforms",
    description:
      "The Beer Store and Goodwill Industries are pleased to announce their partnership during Waste  Reduction Week",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/what-is-amber-ale-archive.jpg",
      alt: "keith",
    },
  },
  {
    title:
      "Important Notice To Members, Former Members And Other Beneficiaries Of The Brewers Retail Inc. Pension Plan For Salaried Employees",
    description: "Are you a beer enthusiast? Come work with us!",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer-myths-busted-archive.jpg",
      alt: "keith",
    },
  },
  {
    title: "Celebrating Waste Reduction Week and the Circular Economy",
    description:
      "Waste Reduction Week in Canada is a year-round program that supports principles and practices of the circular economy...",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/sour-beer-archive.jpg",
      alt: "keith",
    },
  },
];
const beerStoreCardDetail = [
  {
    title: "2022 Stewardship Report, Circularity in Action for 95 Years",
    description:
      "At The Beer Store, we are serious about our commitment to the environment. We work hard every day to protect the environment...",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2022/05/spicy-honey-beer-barbecue-sauce-HPTile.jpg",
      alt: "keith",
    },
  },
  {
    title: "Careers at The Beer Store",
    description: "Are you a beer enthusiast? Come work with us!",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
      alt: "keith",
    },
  },
  {
    title:
      "The Beer Store and Goodwill Industries announces partnership to recycle used uniforms",
    description:
      "The Beer Store and Goodwill Industries are pleased to announce their partnership during Waste  Reduction Week",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/what-is-amber-ale-archive.jpg",
      alt: "keith",
    },
  },
  {
    title:
      "Important Notice To Members, Former Members And Other Beneficiaries Of The Brewers Retail Inc. Pension Plan For Salaried Employees",
    description: "Are you a beer enthusiast? Come work with us!",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer-myths-busted-archive.jpg",
      alt: "keith",
    },
  },
  {
    title: "Celebrating Waste Reduction Week and the Circular Economy",
    description:
      "Waste Reduction Week in Canada is a year-round program that supports principles and practices of the circular economy...",
    image: {
      url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/sour-beer-archive.jpg",
      alt: "keith",
    },
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const BeerRecpieSlidersettings = {
  dots: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  innerWidth: 285,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};
const beerStoreSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const productCardInfo = [
  {
    title: "ALEXANDER KEITHS IPA",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbgbe1-3vkh68-7k9fes/0512_0.png",
      alt: "keith",
    },
  },
  {
    title: "AMSTEL ULTRA",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/r424hktcrj8gq58ptcrwxf/1836.png",
      alt: "amstelultra",
    },
  },
  {
    title: "ARIZONA HARD VARIETY PACK",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/wbq789kkkpcv38vchr68mt8b/1722.png?position=2",
      alt: "arizona",
    },
  },
  {
    title: "ARIZONA HARD VARIETY PACK",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/wbq789kkkpcv38vchr68mt8b/1722.png?position=2",
      alt: "arizona",
    },
  },
  {
    title: "ARIZONA HARD VARIETY PACK",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/wbq789kkkpcv38vchr68mt8b/1722.png?position=2",
      alt: "arizona",
    },
  },
  {
    title: "ARIZONA HARD VARIETY PACK",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/wbq789kkkpcv38vchr68mt8b/1722.png?position=2",
      alt: "arizona",
    },
  },
];
const readMoreDetail = [
  {
    title: "some day pickup or delivery",
    url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/08/beerstore.jpg",
    buttonText: "Order Now",
  },
  {
    title: "fall into savings",
    url: "https://tbsecomd.wpengine.com/wp-content/uploads/2023/09/fall-into-savings.jpg",
    buttonText: "Visit the beerstore hub",
  },
];
const Home = () => {
  return (
    <>
      <BannerSlider></BannerSlider>

      <section className="bg-white py-[70px]">
        <div className="container ">
          <div className="grid grid-cols-2 gap-6">
            {readMoreDetail.map((item) => (
              <ReadMoreCard
                className={`bg-[url('https://tbsecomd.wpengine.com/wp-content/uploads/2023/08/cycle_10_tile1_mob.jpg')]`}
                key={`Infocard${item.url}`}
                title={"some day pickup or delivery"}
                image={{
                  url: item.url,
                  alt: item.title,
                  width: 200,
                  height: 298,
                }}
                buttonText={item.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4]  py-[70px]  on-sale-section">
        <div className="flex flex-col text-center">
          <h2 className="text-[16px]">{`SEE WHAT'S`}</h2>
          <h1 className="text-[30px]">On Sale</h1>
        </div>
        <div className="container newbeers ps-[80px]  pe-[80px]">
          <Slider {...settings}>
            {productCardInfo.map((product) => {
              return (
                <ProductCard
                  className="ms-[20px] me-[20px] bg-white"
                  key={`${product.title}`}
                  title={product.title}
                  image={{
                    url: product.image.url,
                    alt: product.image.alt,
                    width: 250,
                    height: 250,
                  }}
                  buttonText={"Buy Now"}
                  badgeText={product.onSale && "Sale"}
                  description={
                    <>
                      <div className="flex items-center h-62">
                        <Image
                          src=" https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/bottles-01.svg"
                          alt="bottle"
                          width={10}
                          height={26}
                          className={"mr-2"}
                        />
                        <p className="text-[#4a4f55]">{`6 X Bottle 341 ml`}</p>
                      </div>
                      <Separator className="bg-gray-500 opacity-50 h-px my-2" />
                      <div className="flex">
                        <span className="text-[##4a4f57]">Price:</span>
                        <span className="text-[#c00] font-medium mr-2">
                          {product.price}
                        </span>
                        <span className="line-through text-[##4a4f57]">
                          {product.discountedPrice}
                        </span>
                      </div>
                    </>
                  }
                />
              );
            })}
          </Slider>
        </div>
        <div className="w-full text-center  mt-[40px]">
          <Button className="rounded-full bg-black text-#f4f4f4">
            EXPLORE ALL SAVNGS
          </Button>
        </div>
      </section>
      <section className="bg-white  py-[70px]">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> Inspiration for </p>
          <h2 className=" text-[30px]">Beer Recipes &amp; Food Pairings</h2>
        </div>
        <div className="container recipe ps-[80px]  pe-[80px]">
          <Slider {...BeerRecpieSlidersettings} className="gap-5">
            {beerStoreCardDetail.map((item, idx) => (
              <div key={`${item.title}`} className="ps-[15px] pe-[15px]">
                <InfoCard
                  title={"What is amber ale?"}
                  image={{
                    url: item.image.url,
                    alt: item.image.alt,
                    width: 501,
                    height: 340,
                  }}
                  // className={`${
                  //   idx === 0 && "col-span-2"
                  // } rounded-[5px] overflow-hidden`
                  className={`${
                    idx === 0
                      ? "xl:flex-row xl:[&>*]:w-1/2 xl:[&>*:first-child]:h-full [&>*:first-child]:h-[180px] [&>*:first-child]:overflow-hidden object-cover "
                      : "flex-col [&>*:first-child]:h-[180px] [&>*:first-child]:overflow-hidden [&>*:last-child]:pb-[15px]"
                  } flex rounded-[5px] overflow-hidden`}
                  buttonText={"Learn More"}
                  badgeText={"ARTICLE"}
                  description={"testing"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="bg-[#f4f4f4]  py-[70px]">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> Discover </p>
          <h2 className=" text-[30px]">New Beers</h2>
        </div>
        <div className="container newbeers ps-[80px]  pe-[80px]">
          <Slider {...settings}>
            {productCardInfo.map((product) => {
              return (
                <ProductCard
                  className="ms-[20px] me-[20px] bg-white"
                  key={`${product.title}`}
                  title={product.title}
                  image={{
                    url: product.image.url,
                    alt: product.image.alt,
                    width: 250,
                    height: 250,
                  }}
                  buttonText={"Buy Now"}
                  badgeText={product.onSale && "New"}
                  description={
                    <>
                      <div className="flex items-center h-62">
                        <Image
                          src=" https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/bottles-01.svg"
                          alt="bottle"
                          width={10}
                          height={26}
                          className={"mr-2"}
                        />
                        <p className="text-[#4a4f55]">{`6 X Bottle 341 ml`}</p>
                      </div>
                      <Separator className="bg-gray-500 opacity-50 h-px my-2" />
                      <div className="flex">
                        <span className="text-[##4a4f57]">Price:</span>
                        <span className="text-[#c00] font-medium mr-2">
                          {product.price}
                        </span>
                        <span className="line-through text-[##4a4f57]">
                          {product.discountedPrice}
                        </span>
                      </div>
                    </>
                  }
                />
              );
            })}
          </Slider>
          <div className="w-full text-center  mt-[40px]">
            <Button className="rounded-full bg-black text-#f4f4f4">
              EXPLORE NEW BEERS
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white  py-[70px]">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> More From </p>
          <h2 className=" text-[30px]">The Beer Store</h2>
        </div>
        <div className="container moreFrom ps-[80px]  pe-[80px]">
          <Slider {...beerStoreSliderSettings}>
            {moreFrombeerStore.map((item) => {
              return (
                <InfoCard
                  asLink
                  key={`${item.title}`}
                  title={item.title}
                  image={{
                    url: item.image.url,
                    alt: item.image.alt,
                    width: 200,
                    height: 298,
                  }}
                  className="rounded-[5px] overflow-hidden border-0 shadow-none ms-[20px] me-[20px]"
                  buttonText={"Learn More"}
                  // badgeText={"ARTICLE"}
                  description={
                    "At The Beer Store, we are serious about our commitment to the environment. We work hard every day to protect the environment..."
                  }
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
