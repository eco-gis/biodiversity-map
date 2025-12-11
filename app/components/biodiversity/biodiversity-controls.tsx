// app/components/biodiversity-controls.tsx
"use client";

import { Maximize2, Pencil, ZoomIn, ZoomOut } from "lucide-react";
import type maplibregl from "maplibre-gl";
import type { RefObject } from "react";

type BiodiversityControlsProps = {
	mapRef: RefObject<maplibregl.Map | null>;
	isDrawing: boolean;
	onToggleDrawing: () => void;
};

export const BiodiversityControls = ({
	mapRef,
	isDrawing,
	onToggleDrawing,
}: BiodiversityControlsProps) => {
	return (
		<div className="pointer-events-none absolute right-3 top-3 flex flex-col gap-2">
			{/* Zoom in */}
			<button
				type="button"
				className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-border bg-background/80 p-2 text-foreground shadow-sm hover:bg-accent"
				onClick={() => {
					const map = mapRef.current;
					if (!map) return;
					map.zoomIn();
				}}
				aria-label="Zoom in"
			>
				<ZoomIn className="h-4 w-4" aria-hidden="true" />
			</button>

			{/* Zoom out */}
			<button
				type="button"
				className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-border bg-background/80 p-2 text-foreground shadow-sm hover:bg-accent"
				onClick={() => {
					const map = mapRef.current;
					if (!map) return;
					map.zoomOut();
				}}
				aria-label="Zoom out"
			>
				<ZoomOut className="h-4 w-4" aria-hidden="true" />
			</button>

			{/* Auf Vogelgebiete zoomen */}
			<button
				type="button"
				className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-border bg-background/80 p-2 text-foreground shadow-sm hover:bg-accent"
				onClick={() => {
					const map = mapRef.current;
					if (!map) return;

					const features = map.querySourceFeatures("habitats");
					if (!features.length) return;
				}}
				aria-label="Auf Vogelgebiete zoomen"
			>
				<Maximize2 className="h-4 w-4" aria-hidden="true" />
			</button>

			{/* Zeichnen / Auswertung */}
			<button
				type="button"
				className={`pointer-events-auto inline-flex items-center justify-center rounded-md border border-border p-2 text-xs shadow-sm ${
					isDrawing
						? "bg-primary text-primary-foreground"
						: "bg-background/80 text-foreground hover:bg-accent"
				}`}
				onClick={onToggleDrawing}
				aria-label={
					isDrawing
						? "Zeichnen beenden und auswerten"
						: "Untersuchungsfläche zeichnen"
				}
			>
				<Pencil className="mr-1 h-3 w-3" aria-hidden="true" />
				<span>{isDrawing ? "Fertig" : "Fläche"}</span>
			</button>
		</div>
	);
};
