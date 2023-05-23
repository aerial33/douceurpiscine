import { CollectionEntry } from "astro:content"

import PoolCard from "./PoolCard"
import creatSlug from "../lib/creatSlug"

export default function PoolGrid({
	pools,
	isLoading,
}: {
	pools: CollectionEntry<"pools">[]
	isLoading?: Boolean
}) {
	if (isLoading)
		return (
			<div class="rounded-md bg-white p-4 drop-shadow-md">Loading pools...</div>
		)

	return (
		<>
			<ul role="list" class="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-3">
				{pools.map(({ data }) => (
					<li>
						<a href={`/modeles-piscines/${creatSlug(data.name)}`}>
							<PoolCard
								name={data.name}
								url={data.url}
								description={data.description}
							/>
						</a>
					</li>
				))}
			</ul>
			{pools.length < 1 && (
				<div className="flex items-center gap-2 rounded-md bg-white p-4 drop-shadow-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						style="fill: rgba(42, 50, 94, 1);">
						<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
						<circle cx="8.5" cy="10.5" r="1.5"></circle>
						<circle cx="15.493" cy="10.493" r="1.493"></circle>
						<path d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3z"></path>
					</svg>
					<span>Aucune piscine n'a été trouvée, essayez ces requêtes :</span>
					<ul class="flex list-none items-center gap-2 p-0">
						<li class="rounded-md bg-[#2A325E30] p-1 text-sm font-bold">
							Piscines à fond plat
						</li>
						<li class="rounded-md bg-[#2A325E30] p-1 text-sm font-bold">
							Piscines à fond inclinée
						</li>
						<li class="rounded-md bg-[#2A325E30] p-1 text-sm font-bold">
							Petit bassin
						</li>
					</ul>
				</div>
			)}
		</>
	)
}
