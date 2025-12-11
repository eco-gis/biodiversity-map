export async function loadBiodiversityData() {
	const [species, habitats] = await Promise.all([
		fetch("/data/species.json").then((r) => r.json()),
		fetch("/data/habitats.json").then((r) => r.json()),
	]);

	return { species, habitats };
}
