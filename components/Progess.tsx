import React from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { SparklesCore } from "./ui/sparkles";
import { Timeline } from "./ui/timeline";
import { TextAnimate } from "./ui/text-animate";

const Progess = () => {
  const data = [
    {
      title: "2018",
      content: (
        <WobbleCard
          containerClassName="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 relative overflow-hidden w-full"
          className="rounded-xl p-4"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="sparkles-2018"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={60}
              speed={1.2}
              particleColor="#6A0DAD"
            />
          </div>
          <div className="relative z-10 space-y-4">
            <TextAnimate
              className="text-gray-800 dark:text-gray-100 md:text-2xl text-xl font-medium mb-4"
              animation="slideUp"
              duration={0.7}
              by="word"
            >
              TIMA started its journey in 2018, focusing on tool design and
              engineering solutions. With a small yet passionate team, we
              prioritized quality and innovation, laying a strong foundation for
              our future growth.
            </TextAnimate>
          </div>
        </WobbleCard>
      ),
      image: "/Founding.svg",
    },
    {
      title: "2023",
      content: (
        <WobbleCard
          containerClassName="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 relative overflow-hidden w-full"
          className="rounded-xl p-4"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="sparkles-2023"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={60}
              speed={1.2}
              particleColor="#6A0DAD"
            />
          </div>
          <div className="relative z-10 space-y-4">
            <TextAnimate
              className="text-gray-800 dark:text-gray-100 md:text-2xl text-xl font-medium mb-4"
              animation="slideUp"
              duration={0.7}
              by="word"
            >
              By 2023, TIMA transitioned into a leading IT service provider. We
              expanded our offerings to include cloud engineering, DevOps, and
              software development, empowering professionals with corporate
              training and certifications.
            </TextAnimate>
          </div>
        </WobbleCard>
      ),
      imageGrid: [
        "/CONTACT.svg",
        "/Certification.svg",
        "/Cloud.svg",
        "/Software dev.svg",
      ],
    },
    {
      title: "Present",
      content: (
        <WobbleCard
          containerClassName="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 relative overflow-hidden w-full"
          className="rounded-xl p-4"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="sparkles-present"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={60}
              speed={1.2}
              particleColor="#6A0DAD"
            />
          </div>
          <div className="relative z-10 space-y-4">
            <TextAnimate
              className="text-gray-800 dark:text-gray-100 md:text-2xl text-xl font-medium mb-4"
              animation="slideUp"
              duration={0.7}
              by="word"
            >
              TIMA partnered with Pearson to establish global certification and
              placement services. We now provide training and certifications in
              AWS, Azure, Cisco, and Full Stack development, enabling businesses
              and individuals to succeed globally.
            </TextAnimate>
          </div>
        </WobbleCard>
      ),
      image: "/Global.svg",
    },
  ];

  return (
    <div className="relative">
      <Timeline
        data={data.map((item, index) => ({
          title: item.title,
          content: (
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-6`}
            >
              {/* Image or Image Grid */}
              <div className="flex-shrink-0 w-full md:w-3/5">
                {item.imageGrid ? (
                  <div className="grid grid-cols-2 gap-4">
                    {item.imageGrid.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${item.title} Image ${i + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    ))}
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-shrink-0 w-full md:w-2/5">{item.content}</div>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default Progess;
