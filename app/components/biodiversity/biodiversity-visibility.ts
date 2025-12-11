// app/components/biodiversity/biodiversity-visibility.ts

import type { VisibilityConfig } from "@/app/types/biodiversity-types";
import type { FilterSpecification, Map as MapLibreMap } from "maplibre-gl";

export function updateLayerVisibility(
	map: MapLibreMap,
	config: VisibilityConfig,
) {
	const {
		showSchafstelze,
		showGebirgsstelze,
		showBachstelze,
		showHeatmap,
		showHabitats,
	} = config;

	const visibleSpecies: string[] = [];
	if (showSchafstelze) visibleSpecies.push("Schafstelze");
	if (showGebirgsstelze) visibleSpecies.push("Gebirgsstelze");
	if (showBachstelze) visibleSpecies.push("Bachstelze");

	const anySpeciesVisible = visibleSpecies.length > 0;

	const setVisible = (layerId: string, visible: boolean) => {
		if (!map.getLayer(layerId)) return;
		map.setLayoutProperty(layerId, "visibility", visible ? "visible" : "none");
	};

	// Habitaträume
	setVisible("habitats-fill", showHabitats);
	setVisible("habitats-outline", showHabitats);

	// Punkte
	if (map.getLayer("species-points")) {
		if (!anySpeciesVisible) {
			setVisible("species-points", false);
		} else {
			// ["match", ["get","species"], "Schafstelze", true, "Gebirgsstelze", true, ..., false]
			const filter = [
				"match",
				["get", "species"],
				...visibleSpecies.flatMap((sp) => [sp, true]),
				false,
			] as unknown as FilterSpecification;

			map.setFilter("species-points", filter);
			setVisible("species-points", true);
		}
	}

	// Heatmap
	if (map.getLayer("species-heatmap")) {
		if (!showHeatmap || !anySpeciesVisible) {
			setVisible("species-heatmap", false);
		} else {
			const filter = [
				"match",
				["get", "species"],
				...visibleSpecies.flatMap((sp) => [sp, true]),
				false,
			] as unknown as FilterSpecification;

			map.setFilter("species-heatmap", filter);
			setVisible("species-heatmap", true);
		}
	}
}
