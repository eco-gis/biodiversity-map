// app/components/biodiversity-map.tsx
"use client";

import type { BiodiversityMapProps } from "@/app/types/biodiversity-types";
import type { Map as MapLibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useRef } from "react";

export function BiodiversityMap(props: BiodiversityMapProps) {
	const mapRef = useRef<MapLibreMap | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useInitMap(containerRef, mapRef); // Map erstellen
	useLoadData(mapRef); // JSON laden
	useSpeciesLayer(mapRef); // Layer hinzufügen
	useHabitatLayer(mapRef); // Layer hinzufügen
	useControls(mapRef, props); // Custom Controls
	useVisibility(mapRef, props); // Filters / Visibility

	return <div ref={containerRef} className="h-full w-full" />;
}
