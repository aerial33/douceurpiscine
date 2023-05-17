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
			{ name: "Piscines avec fond plat", path: "#!" },
			{ name: "Piscines avec fond incliné", path: "#!" },
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
