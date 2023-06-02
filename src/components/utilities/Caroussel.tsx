//todo transition smooth between testimonials

import { useState } from "preact/hooks"

interface Testimonial {
	ville: string
	temoignage: string
	photo: string
	size?: number
}
interface CarousselProps {
	slides: Testimonial[]
}

function Carrousel({ slides }: CarousselProps) {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
	}

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
	}

	return (
		<>
			<div class="relative animate-slideleft rounded-lg bg-white p-9 pr-10 shadow-3 transition-all">
				<span class="absolute right-0 top-0 block h-1/2 w-1.5 rounded-tr-lg bg-primary"></span>
				<span class="absolute bottom-0 right-0 block h-1/2 w-1.5 rounded-br-lg bg-secondary"></span>

				<div class=" flex  flex-col gap-7.5 md:items-center lg:flex-row lg:justify-between lg:gap-12">
					<img
						class="rounded-md bg-cover duration-500 lg:w-1/3"
						src={slides[currentSlide].photo}
						alt="User"
					/>

					<div>
						<img
							src="/images/testimonial/BxBxsQuoteAltLeft.svg"
							alt="quote"
							width="54"
							class="opacity-30"
						/>

						<p class="mb-10 mt-5.5 text-lg font-medium italic duration-300 lg:text-2xl">
							{slides[currentSlide].temoignage}
						</p>

						<div class="flex items-end justify-between">
							<div>
								<span class="mb-1 block text-lg font-medium text-black duration-300">
									{slides[currentSlide].ville}
								</span>
								<span class="block">
									Piscine coque de {slides[currentSlide].size}m en Gironde à{" "}
									{slides[currentSlide].ville}
								</span>
							</div>
							<img src="/favicon.svg" width="42" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div class="mt-12.5 flex items-center justify-center gap-4">
				<div
					class=" group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-body bg-white transition duration-300 ease-in-out hover:border-primary hover:bg-primary"
					onClick={prevSlide}>
					<svg
						class="fill-body group-hover:fill-white"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3.52366 7.83336L7.99366 12.3034L6.81533 13.4817L0.333663 7.00002L6.81533 0.518357L7.99366 1.69669L3.52366 6.16669L13.667 6.16669L13.667 7.83336L3.52366 7.83336Z"
							fill=""></path>
					</svg>
				</div>
				<button
					class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-body bg-white duration-300 ease-in-out hover:border-primary hover:bg-primary"
					onClick={nextSlide}>
					<svg
						class="fill-body group-hover:fill-white"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"
							fill=""></path>
					</svg>
				</button>
			</div>
		</>
	)
}

export default Carrousel
