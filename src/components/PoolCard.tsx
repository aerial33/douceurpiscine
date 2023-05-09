import { ComponentChildren, JSX } from "preact"

export default function ({
	name,
	url,
	tag,
}: {
	name: string
	url: string
	tag: string
}) {
	return (
		<div class="group relative flex h-full flex-col overflow-hidden rounded-lg  bg-white  drop-shadow-md">
			<div class="aspect-h-2  aspect-w-3 flex-1 sm:h-48">
				<img
					src={url}
					alt={name}
					class="h-full w-full object-cover object-center sm:h-full sm:w-full"
				/>
				<div class="absolute left-0 top-0 z-10 flex h-full w-full translate-y-full flex-col items-center justify-start  rounded-lg bg-white/20 backdrop-blur-sm duration-500  ease-linear group-hover:translate-y-1/2 ">
					<h4 class="mb-0.5 mt-4 text-2xl font-medium text-accent">{name}</h4>
					<p class="text-body">{tag}</p>
					<a
						class="group mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-body bg-transparent duration-300 ease-in-out group-hover:border-primary group-hover:bg-primary"
						href="#">
						<svg
							class="fill-body duration-300 ease-in-out group-hover:fill-white"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}
