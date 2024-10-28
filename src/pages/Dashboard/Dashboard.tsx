import { useNavigate } from "react-router-dom";

import { cn } from "../../lib/utils";
import { Box } from "../../components/ui/Box";
import { Carousel } from "../../components/ui/Carousel";

export default function Dashboard() {
  const router = useNavigate();

  const redirectTo = (href: string) => {
    router(href);
  };

  const news = [
    {
      id: 1,
      title: "news 1",
      description: "news 1 description",
      tumble: "/images/slide (1).jpg",
    },
    {
      id: 2,
      title: "news 2",
      description: "news 2 description",
      tumble: "/images/slide (2).jpg",
    },
    {
      id: 3,
      title: "news 3",
      description: "news 3 description",
      tumble: "/images/slide (3).jpg",
    },
    {
      id: 4,
      title: "news 4",
      description: "news 4 description",
      tumble: "/images/slide (4).jpg",
    },
    {
      id: 5,
      title: "news 5",
      description: "news 5 description",
      tumble: "/images/slide (5).jpg",
    },
    {
      id: 6,
      title: "news 6",
      description: "news 6 description",
      tumble: "/images/slide (6).jpg",
    },
    {
      id: 1,
      title: "news 1",
      description: "news 1 description",
      tumble: "/images/slide (1).jpg",
    },
    {
      id: 2,
      title: "news 2",
      description: "news 2 description",
      tumble: "/images/slide (2).jpg",
    },
    {
      id: 3,
      title: "news 3",
      description: "news 3 description",
      tumble: "/images/slide (3).jpg",
    },
    {
      id: 4,
      title: "news 4",
      description: "news 4 description",
      tumble: "/images/slide (4).jpg",
    },
    {
      id: 5,
      title: "news 5",
      description: "news 5 description",
      tumble: "/images/slide (5).jpg",
    },
    {
      id: 6,
      title: "news 6",
      description: "news 6 description",
      tumble: "/images/slide (6).jpg",
    },
  ];
  const finances = [
    {
      id: 1,
      imgUrl: "/images/finance (1).jpg",
      message: "academy Channel",
      href: "/dashboard/academy",
    },
    {
      id: 2,
      imgUrl: "/images/finance (2).jpg",
      message: "Finance News",
      href: "/dashboard/academy",
    },
    {
      id: 3,
      imgUrl: "/images/finance (3).jpg",
      message: "Platform Analysis",
      href: "/dashboard/analysis",
    },
    {
      id: 4,
      imgUrl: "/images/finance (4).jpg",
      message: "Academy",
      href: "/dashboard/academy",
    },
    {
      id: 5,
      imgUrl: "/images/finance (5).jpg",
      message: "Trading App",
      href: "/dashboard/trading",
    },
  ];
  const journalists = [
    {
      id: 1,
      imgUrl: "/images/journalist (1).jpg",
      message: "Messages",
      href: "/dashboard/academy",
    },
    {
      id: 2,
      imgUrl: "/images/journalist (2).jpg",
      message: "Documentries",
      href: "/dashboard/academy",
    },
  ];
  const voices = [
    {
      id: 1,
      imgUrl: "/images/journalist (2).jpg",
      message: "Community Chat",
      href: "/dashboard/academy",
    },
    {
      id: 2,
      imgUrl: "/images/journalist (1).jpg",
      message: "Women Globe",
      href: "/dashboard/academy",
    },
  ];
  const entrepreneurs = [
    {
      id: 1,
      imgUrl: "/images/entrepreneur (1).jpg",
      message: "Physical Health",
      href: "/dashboard/academy",
    },
    {
      id: 2,
      imgUrl: "/images/entrepreneur (2).jpg",
      message: "Mental Health",
      href: "/dashboard/academy",
    },
    {
      id: 3,
      imgUrl: "/images/entrepreneur (3).jpg",
      message: "Faith",
      href: "/dashboard/academy",
    },
  ];
  const analysis = [
    {
      id: 1,
      imgUrl: "/images/card (1).png",
      href: "/dashboard/analysis",
    },
    {
      id: 2,
      imgUrl: "/images/card (2).png",
      href: "/dashboard/analysis",
    },
    {
      id: 3,
      imgUrl: "/images/card (3).png",
      href: "/dashboard/analysis",
    },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      <Box>
        <Carousel options={news} />
      </Box>
      <div className="flex-1 gid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
        <Box className="row-span-1 lg:row-span-4 space-y-4">
          <h3 className="text-primary font-semibold font-fraunces text-xl uppercase text-center">
            Finance
          </h3>
          <div className="flex flex-col gap-4">
            {finances.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[125px] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => redirectTo(item.href)}
              >
                <p className="text-[#fff] font-medium font-fraunces text-lg absolute top-[50%] left-[50%] z-40 translate-x-[-50%] translate-y-[-50%] capitalize">
                  {item.message}
                </p>
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full h-full z-10",
                    index % 2 === 0
                      ? "bg-gradient-to-bl from-[#7E6541] to-[#0000000A]"
                      : "bg-gradient-to-tr from-[#161B2E] to-[#0000000A]"
                  )}
                />
                <img
                  src={item.imgUrl}
                  alt={item.message + index}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
            ))}
          </div>
        </Box>
        <Box className="row-span-1 lg:row-span-3 space-y-4">
          <h3 className="text-primary font-semibold font-fraunces text-xl uppercase text-center">
            Underdog journalist
          </h3>
          <div className="flex flex-col gap-4">
            {journalists.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[238px] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => redirectTo(item.href)}
              >
                <p className="text-[#fff] font-medium font-fraunces text-lg absolute top-[50%] left-[50%] z-40 translate-x-[-50%] translate-y-[-50%] capitalize">
                  {item.message}
                </p>
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full h-full z-10",
                    index % 2 === 0
                      ? "bg-gradient-to-bl from-[#161B2E] to-[#0000000A]"
                      : "bg-gradient-to-l from-[#7E6541] to-[#0000000A]"
                  )}
                />
                <img
                  src={item.imgUrl}
                  alt={item.message + index}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
            ))}
          </div>
        </Box>
        <Box className="row-span-1 lg:row-span-3 space-y-4">
          <h3 className="text-primary font-semibold font-fraunces text-xl uppercase text-center">
            My Voice
          </h3>
          <div className="flex flex-col gap-4">
            {voices.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[238px] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => redirectTo(item.href)}
              >
                <p className="text-[#fff] font-medium font-fraunces text-lg absolute top-[50%] left-[50%] z-40 translate-x-[-50%] translate-y-[-50%] capitalize">
                  {item.message}
                </p>
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full h-full z-10",
                    index % 2 === 0
                      ? "bg-gradient-to-l from-[#7E6541] to-[#0000000A]"
                      : "bg-gradient-to-bl from-[#161B2E] to-[#0000000A]"
                  )}
                />
                <img
                  src={item.imgUrl}
                  alt={item.message + index}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
            ))}
          </div>
        </Box>
        <Box className="row-span-1 lg:row-span-3 space-y-4">
          <h3 className="text-primary font-semibold font-fraunces text-xl uppercase text-center">
            Entrepreneur Growth
          </h3>
          <div className="flex flex-col gap-4">
            {entrepreneurs.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[154px] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => redirectTo(item.href)}
              >
                <p className="text-[#fff] font-medium font-fraunces text-lg absolute top-[50%] left-[50%] z-40 translate-x-[-50%] translate-y-[-50%] capitalize">
                  {item.message}
                </p>
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full h-full z-10",
                    index % 2 === 0
                      ? "bg-gradient-to-r from-[#161B2E] to-[#0000000A]"
                      : "bg-gradient-to-l from-[#7E6541] to-[#0000000A]"
                  )}
                />
                <img
                  src={item.imgUrl}
                  alt={item.message + index}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                />
              </div>
            ))}
          </div>
        </Box>
        <Box className="col-span-1 sm:col-span-2 lg:col-span-1">card 5</Box>
        <Box className="col-span-1 sm:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            {analysis.map((item, index) => (
              <div
                key={index}
                className="h-[154px] rounded-xl overflow-hidden group cursor-pointer group"
                onClick={() => redirectTo(item.href)}
              >
                <img
                  src={item.imgUrl}
                  alt={item.href + index}
                  className="w-full h-full object-contain group-hover:scale-105 transition-all"
                />
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}
