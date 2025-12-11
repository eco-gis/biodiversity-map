// app/components/biodiversity-stats-panel.tsx
"use client";

import type { StelzenStats } from "@/app/types/biodiversity-types";

type BiodiversityStatsPanelProps = {
	stats: StelzenStats | null;
};

export const BiodiversityStatsPanel = ({ stats }: BiodiversityStatsPanelProps) => {
	if (!stats) return null;

	return (
		<div className="pointer-events-none absolute bottom-3 left-3 max-w-xs">
			<div className="pointer-events-auto rounded-md border border-border bg-background/90 p-3 text-[11px] shadow-sm">
				<div className="mb-2 text-xs font-semibold text-foreground">
					Auswertung Zeichnung
				</div>
				<dl className="space-y-1 text-muted-foreground">
					<div className="flex justify-between">
						<dt>Funde total</dt>
						<dd className="font-medium text-foreground">{stats.total}</dd>
					</div>
					<div className="flex justify-between">
						<dt>Schafstelze</dt>
						<dd className="font-medium text-foreground">{stats.schaf}</dd>
					</div>
					<div className="flex justify-between">
						<dt>Gebirgsstelze</dt>
						<dd className="font-medium text-foreground">{stats.gebirgs}</dd>
					</div>
					<div className="flex justify-between">
						<dt>Bachstelze</dt>
						<dd className="font-medium text-foreground">{stats.bach}</dd>
					</div>
				</dl>
				<p className="mt-2 text-[10px] text-muted-foreground">
					Tipp: Fläche neu zeichnen, um andere Gebiete zu vergleichen.
				</p>
			</div>
		</div>
	);
};
