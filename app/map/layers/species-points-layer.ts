// app/map/layers/species-points-layer.ts
import type { CircleLayerSpecification } from "maplibre-gl";

export const speciesPointsLayer: CircleLayerSpecification = {
	id: "species-points",
	type: "circle",
	source: "species",
	paint: {
		"circle-radius": 5,
		"circle-stroke-width": 1,
		"circle-stroke-color": "#00000033",
		"circle-color": [
			"match",
			["get", "species"],
			"Schafstelze", "#facc15",
			"Gebirgsstelze", "#3b82f6",
			"Bachstelze", "#6b7280",
			"#22c55e",
		],
	},
};
