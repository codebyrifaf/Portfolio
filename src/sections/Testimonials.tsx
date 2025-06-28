import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";


const testimonials = [
  {
    name: "AWS Academy Cloud Web Application Builder",
    position: "Amazon Web Services Training and Certification",
    text: "Completed hands-on lab projects focused on building, deploying, and managing web applications using AWS services like EC2, S3, Lambda, and API Gateway.",
    avatar: memojiAvatar1,
  },
  {
    name: "International Astronomy and Astrophysics Competition (IAAC)-2024 ",
    position: "Silver Honor",
    text: "Recognized for outstanding performance in solving advanced astronomy and astrophysics problems in a global competitive setting.",
    avatar: memojiAvatar2,
  },
  {
    name: "Certificate of Excellence – TECH TRENDS",
    position: "Issued by GP (Grameenphone)",
    text: "Awarded for successful completion of the TECH TRENDS program, demonstrating excellence in understanding emerging technologies and industry innovations.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
      <SectionHeader eyebrow="Recognized for excellence with credentials that validate expertise." 
      title="Achievement & Certifications" 
      description="Badges of excellence."/>
  
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:pause]">
          {[...new Array(2)].fill(0).map((_, index)=>(
            <Fragment key={index}>
            {testimonials.map((testimonial) => (
          <Card key={testimonial.name} 
          className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
          <div className="flex  gap-4 items-center">
            <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="max-h-full" 
            />
            </div>
            <div>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-white/40">{testimonial.position}</div>
            </div>
            </div>
            <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
          </Card>
          
        ))}
        </Fragment>

          ))}
        
        </div>
      </div>
      </div>
    </div>
  );
};
