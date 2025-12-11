// app/components/biodiversity-geometry.ts
import type {
    BiodivProperties,
    SimpleFeatureCollection,
    StelzenStats,
} from "@/app/types/biodiversity-types";

export function countSpeciesInPolygon(
	species: SimpleFeatureCollection,
	ring: [number, number][],
): StelzenStats {
	const stats: StelzenStats = {
		total: 0,
		schaf: 0,
		gebirgs: 0,
		bach: 0,
	};

	for (const feature of species.features) {
		if (feature.geometry.type !== "Point") continue;
		const [x, y] = feature.geometry.coordinates as [number, number];

		if (!isPointInPolygon([x, y], ring)) continue;

		stats.total += 1;

		const props = (feature.properties ?? {}) as BiodivProperties;
		const speciesName =
			typeof props.species === "string" ? props.species : "";

		if (speciesName === "Schafstelze") stats.schaf += 1;
		if (speciesName === "Gebirgsstelze") stats.gebirgs += 1;
		if (speciesName === "Bachstelze") stats.bach += 1;
	}

	return stats;
}

// einfacher Ray-Casting-Algorithmus
export function isPointInPolygon(
	point: [number, number],
	ring: [number, number][],
): boolean {
	const [x, y] = point;
	let inside = false;

	const len = ring.length;
	if (len < 3) return false;

	for (let i = 0, j = len - 1; i < len; j = i++) {
		const [xi, yi] = ring[i];
		const [xj, yj] = ring[j];

		const intersect =
			yi > y !== yj > y &&
			x < ((xj - xi) * (y - yi)) / (yj - yi + Number.EPSILON) + xi;

		if (intersect) inside = !inside;
	}

	return inside;
}
