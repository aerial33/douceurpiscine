type Navlink = {
	name: string
	path: string
	dropdownLinks?: {
		name: string
		path: string
	}[]
}

const navData: Navlink[] = [
	{
		name: "Piscines",
		path: "/piscines/",
		dropdownLinks: [
			{ name: "Notre sélection de piscines", path: "/piscines/" },
			{
				name: "Piscines avec fond plat",
				path: "/modeles-piscines/piscine-a-fond-plat",
			},
			{
				name: "Piscines avec fond incliné",
				path: "/modeles-piscines/piscine-a-fond-incline",
			},
			{
				name: "Piscines avec escaliers plages",
				path: "/modeles-piscines/piscine-composable",
			},
		],
	},
	{
		name: "Installation",
		path: "/installation-piscine",
	},
	{
		name: "Réalisation",
		path: "/#realisation",
	},
	{
		name: "Actualités",
		path: "/#actualites/",
	},
	{
		name: "Contact",
		path: "/contact/",
	},
]

export default navData
