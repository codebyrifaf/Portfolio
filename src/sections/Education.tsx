import Image from "next/image";
import iutLogo from "@/assets/images/iut.png";
import dhakaCollegeLogo from "@/assets/images/logo.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const EducationSection = () => {
  return (
    <div id="education" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Academic Journey"
          title="My Education"
          description="Building a strong foundation in Software Engineering"
        />
        
        <div className="mt-12 lg:mt-20 flex flex-col gap-8">
          {/* Current Education - IUT */}
          <Card className="max-w-4xl mx-auto p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src={iutLogo}
                    alt="Islamic University of Technology"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl text-emerald-300 mb-2">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-lg font-semibold text-white/90 mb-2">
                  Islamic University of Technology (IUT)
                </p>
                <p className="text-white/70 mb-4">
                  Currently pursuing my degree in Software Engineering, focusing on modern development practices, algorithms, and system design.
                </p>
                <div className="inline-flex items-center gap-2 bg-emerald-300/20 text-emerald-300 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
                  <span className="font-medium">Currently Studying</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Previous Education - Dhaka College */}
          <Card className="max-w-4xl mx-auto p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src={dhakaCollegeLogo}
                    alt="Dhaka College"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl text-emerald-300 mb-2">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-lg font-semibold text-white/90 mb-2">
                  Dhaka College
                </p>
                <p className="text-white/70 mb-4">
                  Completed my Higher Secondary Certificate and Intermediate studies, building a strong foundation in science and mathematics.
                </p>
                <div className="inline-flex items-center gap-2 bg-blue-300/20 text-blue-300 px-4 py-2 rounded-full">
                  <span className="font-medium">2019 - 2021</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};