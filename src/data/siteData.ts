type SiteParams = {
	name: string
	description: string
	webiste: string
	keywords?: string
	license?: string
	place?: string
	author: {
		name: string
		email: string
		phone: string
		address: string
		horaire: string
	}
}

export const siteParams: SiteParams = {
	name: "Douceur Piscine",
	description:
		"Venez découvrir la piscine de vos de rêves: pose et installation de votre piscine coque polyester à Bordeaux et en gironde",
	webiste: "https://douceurpiscine.com/",
	author: {
		name: "Douceur Piscine",
		email: "contact@douceurpiscine.com",
		phone: "(+33) 05 56 92 62 06",
		address: "572 Avenue de Boulac 33127 Saint-Jean-d'Illac",
		horaire: "lun-Vend: 09h à 12h / 14h à 18h & sam: 9h à 12h",
	},
}
