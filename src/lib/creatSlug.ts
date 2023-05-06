export default function (title: string) {
	return title
		.replace(/[^A-Za-za-z0-9 ]/g, "")
		.trim()
		.replace(/\s+/g, "-")
}
