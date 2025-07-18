"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment, useRef, useState, useEffect } from "react";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import grainImage from "../assets/images/grain.jpg";
import Image from "next/image";

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
	const containerRef = useRef<HTMLDivElement>(null);
	const [transform, setTransform] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [startTransform, setStartTransform] = useState(0);

	// Auto-scroll animation - DISABLED
	// useEffect(() => {
	// 	if (isDragging) return;

	// 	const interval = setInterval(() => {
	// 		setTransform((prev) => prev - 0.5);
	// 	}, 16);

	// 	return () => clearInterval(interval);
	// }, [isDragging]);

	// Infinite loop reset - seamless cycling
	useEffect(() => {
		if (isDragging) return; // Don't reset while dragging
		
		const cardWidth = 400; // Approximate card width
		const totalWidth = testimonials.length * cardWidth;

		// Seamless infinite loop with slight delay for smoother experience
		const timer = setTimeout(() => {
			if (transform <= -totalWidth) {
				setTransform(0);
			} else if (transform > 0) {
				setTransform(-totalWidth);
			}
		}, 50);

		return () => clearTimeout(timer);
	}, [transform, isDragging]);

	// Mouse events
	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true);
		setStartX(e.clientX);
		setStartTransform(transform);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return;

		const deltaX = e.clientX - startX;
		setTransform(startTransform + deltaX);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	// Touch events
	const handleTouchStart = (e: React.TouchEvent) => {
		setIsDragging(true);
		setStartX(e.touches[0].clientX);
		setStartTransform(transform);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging) return;

		const deltaX = e.touches[0].clientX - startX;
		setTransform(startTransform + deltaX);
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	return (
		<div id="testimonials" className="py-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Recognized for excellence with credentials that validate expertise."
					title="Achievement & Certifications"
					description="Badges of excellence."
				/>

				<div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
					<div
						ref={containerRef}
						className={`flex gap-8 pr-8 flex-none ${
							isDragging ? "cursor-grabbing" : "cursor-grab"
						}`}
						style={{
							transform: `translateX(${transform}px)`,
							transition: isDragging ? "none" : "transform 0.3s ease-out",
						}}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						{[...new Array(3)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((testimonial, testimonialIndex) => (
									<Card
										key={`${testimonial.name}-${index}-${testimonialIndex}`}
										className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300 select-none flex-shrink-0"
									>
										<div className="flex gap-4 items-center">
											<div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													className="max-h-full"
													draggable={false}
												/>
											</div>
											<div>
												<div className="font-semibold">{testimonial.name}</div>
												<div className="text-sm text-white/40">
													{testimonial.position}
												</div>
											</div>
										</div>
										<p className="mt-4 md:mt-6 text-sm md:text-base">
											{testimonial.text}
										</p>
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
