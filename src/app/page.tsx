"use client";
import InfoCard from "@/modules/infoCard";
import BannerSlider from "../modules/slider";
import ProductCard from "@/modules/productCard";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
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
    <div className={className} style={{ ...style }} onClick={onClick}>
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
const beerStoreCardDetail = [
  {
    title: "2022 Stewardship Report, Circularity in Action for 95 Years",
    description:
      "At The Beer Store, we are serious about our commitment to the environment. We work hard every day to protect the environment...",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbgbe1-3vkh68-7k9fes/0512_0.png",
      alt: "keith",
    },
  },
  {
    title: "Careers at The Beer Store",
    description: "Are you a beer enthusiast? Come work with us!",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbgbe1-3vkh68-7k9fes/0512_0.png",
      alt: "keith",
    },
  },
  {
    title:
      "The Beer Store and Goodwill Industries announces partnership to recycle used uniforms",
    description:
      "The Beer Store and Goodwill Industries are pleased to announce their partnership during Waste  Reduction Week",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbgbe1-3vkh68-7k9fes/0512_0.png",
      alt: "keith",
    },
  },
  {
    title:
      "Important Notice To Members, Former Members And Other Beneficiaries Of The Brewers Retail Inc. Pension Plan For Salaried Employees",
    description: "Are you a beer enthusiast? Come work with us!",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbgbe1-3vkh68-7k9fes/0512_0.png",
      alt: "keith",
    },
  },
  {
    title: "Celebrating Waste Reduction Week and the Circular Economy",
    description:
      "Waste Reduction Week in Canada is a year-round program that supports principles and practices of the circular economy...",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbgbe1-3vkh68-7k9fes/0512_0.png",
      alt: "keith",
    },
  },
];
const settings = {
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
const BeerRecpieSlidersettings = {
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
    title: "BANGARANG PINK LEMONADE HARD SELTZER",
    price: "24.00",
    discountedPrice: "10:00",
    onSale: "true",
    image: {
      url: "https://cdn.brandfolder.io/DRTYD0A2/as/45cx657kw4c27qvxrkn89s/1298.png?position=2",
      alt: "bangrang",
    },
  },
];
const Home = () => {
  return (
    <>
      <BannerSlider></BannerSlider>

      <section className="bg-white py-[70px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-6">
            <InfoCard
              className="flex-row-reverse"
              title={"some day pickup or delivery"}
              image={{
                url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
                alt: "test",
                width: 200,
                height: 298,
              }}
              buttonText={"Read More"}
            />
            <InfoCard
              className="flex-row-reverse"
              title={"ultra great deal"}
              image={{
                url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
                alt: "test",
                width: 200,
                height: 298,
              }}
              buttonText={"Read More"}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4]  py-[70px]  on-sale-section">
        <div className="flex flex-col text-center">
          <h2 className=" text-[30px]">
            Shop Sale Prices and Limited Time Offers
          </h2>
        </div>
        <div className="container">
          <Slider {...settings}>
            {productCardInfo.map((product) => {
              return (
                <ProductCard
                  key={`${product.title}`}
                  title={product.title}
                  image={{
                    url: product.image.url,
                    alt: product.image.alt,
                    width: 200,
                    height: 298,
                  }}
                  buttonText={"Buy Now"}
                  badgeText={product.onSale && "Sale"}
                  description={
                    <>
                      <div className="flex items-center">
                        <Image
                          src=" https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/bottles-01.svg"
                          alt="bottle"
                          width={10}
                          height={26}
                          className={"mr-2"}
                        />
                        <p className="text-[#4a4f55]">{product.title}</p>
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
      </section>
      <section className="bg-white  py-[70px]">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> Inspiration for </p>
          <h2 className=" text-[30px]">Beer Recipes &amp; Food Pairings</h2>
        </div>
        <div className="container">
          <Slider {...BeerRecpieSlidersettings}>
            <InfoCard
              title={"test"}
              image={{
                url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
                alt: "test",
                width: 200,
                height: 298,
              }}
              buttonText={"Read More"}
              badgeText="Sale"
              description={
                "Whether you’re seeing a show at a small club or a big ... "
              }
            />
          </Slider>
        </div>
      </section>
      <section className="bg-[#f4f4f4]  py-[70px]">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> Discover </p>
          <h2 className=" text-[30px]">New Beers</h2>
        </div>
        <div className="container">
          <Slider {...settings}>
            {productCardInfo.map((product) => {
              return (
                <ProductCard
                  key={`${product.title}`}
                  title={product.title}
                  image={{
                    url: product.image.url,
                    alt: product.image.alt,
                    width: 200,
                    height: 298,
                  }}
                  buttonText={"Buy Now"}
                  badgeText={product.onSale && "Sale"}
                  description={
                    <>
                      <div className="flex items-center">
                        <Image
                          src=" https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/bottles-01.svg"
                          alt="bottle"
                          width={10}
                          height={26}
                          className={"mr-2"}
                        />
                        <p className="text-[#4a4f55]">{product.title}</p>
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
      </section>

      <section className="bg-white  py-[70px]">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> More From </p>
          <h2 className=" text-[30px]">The Beer Store</h2>
        </div>
        <div className="container">
          <Slider {...beerStoreSliderSettings}>
            {beerStoreCardDetail.map((item) => {
              return (
                <InfoCard
                  key={`${item.title}`}
                  title={item.title}
                  image={{
                    url: item.image.url,
                    alt: item.image.alt,
                    width: 200,
                    height: 298,
                  }}
                  buttonText={"Learn More"}
                  badgeText={"ARTICLE"}
                  description={"testing"}
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
