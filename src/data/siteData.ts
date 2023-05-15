type SiteParams = {
	name: string
	description: string
	webiste: string
	keywords?: string
	license?: string
	place?: string
	email: string
	phone: string
	location: { adresse: string; city: string }
	horaire: string
	plan?: string
}

export const siteParams: SiteParams = {
	name: "Douceur Piscine",
	description:
		"Venez découvrir la piscine de vos de rêves: pose et installation de votre piscine coque polyester à Bordeaux et en gironde",
	webiste: "https://douceurpiscine.com/",
	email: "contact@douceurpiscine.com",
	phone: "(+33) 05 56 92 62 06",
	location: {
		adresse: "572 Avenue de Boulac ",
		city: "33127 Saint-Jean-d'Illac",
	},
	horaire: "lun-Vend: 09h à 12h / 14h à 18h & sam: 9h à 12h",
	plan: "https://www.google.com/maps/place/Douceur+Piscine/@44.8142946,-0.7473773,15z/data=!4m6!3m5!1s0xd54dad6c010c38d:0x84a7a26cf10a92e0!8m2!3d44.8142946!4d-0.7473773!16s%2Fg%2F11c7hf01yg",
}
