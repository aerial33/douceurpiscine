interface TitleSection {
	title: string
	titleText: string
}

const TitleSection = ({ title, titleText }: TitleSection) => {
	return (
		<div class="fade-in mx-auto max-w-1390 px-4 text-center md:px-8 xl:px-0">
			<h2 class="mx-auto mb-4.5 text-3xl font-semibold text-accent  md:w-4/5 xl:w-1/2 xl:text-title-xl">
				{title}
			</h2>
			<p class="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{titleText}</p>
		</div>
	)
}

export default TitleSection
