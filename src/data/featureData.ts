type Feature = {
	title: string
	description: string
	badgeColor: "primary" | "meta-orange" | "tertary" | "secondary"
	icon: {
		name: string
		alt?: string
		width?: number
	}
}

const featureData: Feature[] = [
	{
		title: "25 ans d'expérience",
		description: `Douceur Piscine assure l'installation de piscines à coque en
    assurant un suivi de A à Z, des demandes auprès de la mairie à
    l'installation de bassins dans vos jardins.`,
		badgeColor: "secondary",
		icon: {
			name: "mdi:seal-variant",
			alt: "Icon-quality",
			width: 72,
		},
	},
	{
		title: "Piscine Design",
		description: `La piscine de vos rêves est plutôt grande et rectangulaire, de
    taille moyenne et ronde, ou petite en forme de haricot ? Nos modèles
    de piscine sont variés, pour satisfaire toutes vos envies.`,
		badgeColor: "tertary",
		icon: {
			name: "system-uicons:diamond",
			alt: "Icon-luxury",
			width: 64,
		},
	},
	{
		title: "Budget Maitrisé",
		description: `Budget illimité ou budget serré ? Paiement comptant ou crédit ?
    Choisissez le financement de piscine qui vous convient et profitez
    d'un taux d'emprunt avantageux.`,
		badgeColor: "meta-orange",
		icon: {
			name: "SolarEuroBroken",
			alt: "Icon-euro",
			width: 64,
		},
	},
	{
		title: "Déplacements",
		description: `Nos piscinistes de Saint-Jean-d'Illac interviennent partout dans le Bassin d'Arcachon et le Medoc, ainsi que dans les communes de la CUB de Bordeaux (33)`,
		badgeColor: "primary",
		icon: {
			name: "movelocation",
			alt: "Icon-location",
			width: 64,
		},
	},
]

export default featureData
