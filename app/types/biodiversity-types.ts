// app/components/biodiversity-types.ts
import type { FeatureCollection, Geometry } from "geojson";

export type BiodiversityMapProps = {
	showSchafstelze: boolean;
	showGebirgsstelze: boolean;
	showBachstelze: boolean;
	showHeatmap: boolean;
	showHabitats: boolean;
};

export type BiodivProperties = Record<string, string | number | boolean | null>;
export type SimpleFeatureCollection = FeatureCollection<Geometry, BiodivProperties>;

export type StelzenStats = {
	total: number;
	schaf: number;
	gebirgs: number;
	bach: number;
};

export type VisibilityConfig = {
	showSchafstelze: boolean;
	showGebirgsstelze: boolean;
	showBachstelze: boolean;
	showHeatmap: boolean;
	showHabitats: boolean;
};
