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
			{ name: "Piscine 1", path: "/piscines/" },
			{ name: "Piscine 2", path: "#!" },
			{ name: "Piscine 3", path: "#!" },
		],
	},
	{
		name: "Services",
		path: "/#service",
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
