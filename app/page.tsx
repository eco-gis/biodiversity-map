// app/page.tsx
"use client";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import dynamic from "next/dynamic";
import { useState } from "react";

const BiodiversityMap = dynamic(
	() =>
		import("@/app/components/biodiversity/biodiversity-map").then(
			(m) => m.BiodiversityMap,
		),
	{ ssr: false },
);

export default function HomePage() {
	const [showSchafstelze, setShowSchafstelze] = useState(true);
	const [showGebirgsstelze, setShowGebirgsstelze] = useState(true);
	const [showBachstelze, setShowBachstelze] = useState(true);
	const [showHeatmap, setShowHeatmap] = useState(true);
	const [showHabitats, setShowHabitats] = useState(true);

	return (
		<main className="flex flex-1 flex-col gap-6 pb-6">
			<section className="space-y-3">
				<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
					Demo · eco-gis
				</p>
				<h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
					Biodiversitäts-Hotspots – Stelzenarten
				</h1>
				<p className="max-w-3xl text-sm text-muted-foreground md:text-base">
					Mini Web-GIS mit drei{" "}
					<span className="font-semibold">Stelzenarten</span> im Kanton
					Schaffhausen: Schafstelze, Gebirgsstelze und Bachstelze. Punkte und
					Heatmap basieren auf Demo-Daten.
				</p>
			</section>

			<section className="grid flex-1 gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-6">
				<Card className="flex min-h-80 flex-col overflow-hidden md:min-h-130">
					<CardHeader className="border-b border-border/60 pb-3">
						<CardTitle className="text-sm font-semibold">
							Karte &amp; Hotspots
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0">
						<div className="h-80 md:h-130">
							<BiodiversityMap
								showSchafstelze={showSchafstelze}
								showGebirgsstelze={showGebirgsstelze}
								showBachstelze={showBachstelze}
								showHeatmap={showHeatmap}
								showHabitats={showHabitats}
							/>
						</div>
					</CardContent>
				</Card>

				<div className="flex flex-col gap-4 md:gap-6">
					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-sm font-semibold">
								Arten &amp; Darstellung
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 text-sm">
							<div className="flex items-center justify-between gap-3">
								<div>
									<Label
										htmlFor="schafstelze-switch"
										className="text-xs font-medium"
									>
										Schafstelze
									</Label>
									<p className="text-[11px] text-muted-foreground">
										Acker- und Wiesenbrüter, als gelbe Punkte dargestellt.
									</p>
								</div>
								<Switch
									id="schafstelze-switch"
									checked={showSchafstelze}
									onCheckedChange={setShowSchafstelze}
								/>
							</div>

							<div className="flex items-center justify-between gap-3">
								<div>
									<Label
										htmlFor="gebirgsstelze-switch"
										className="text-xs font-medium"
									>
										Gebirgsstelze
									</Label>
									<p className="text-[11px] text-muted-foreground">
										Fluss- und Bachläufe, in Blau dargestellt.
									</p>
								</div>
								<Switch
									id="gebirgsstelze-switch"
									checked={showGebirgsstelze}
									onCheckedChange={setShowGebirgsstelze}
								/>
							</div>

							<div className="flex items-center justify-between gap-3">
								<div>
									<Label
										htmlFor="bachstelze-switch"
										className="text-xs font-medium"
									>
										Bachstelze
									</Label>
									<p className="text-[11px] text-muted-foreground">
										Allgemeine Kulturlandschaft, in Grau dargestellt.
									</p>
								</div>
								<Switch
									id="bachstelze-switch"
									checked={showBachstelze}
									onCheckedChange={setShowBachstelze}
								/>
							</div>

							<div className="flex items-center justify-between gap-3 pt-1">
								<div>
									<Label
										htmlFor="heatmap-switch"
										className="text-xs font-medium"
									>
										Biodiversitäts-Hotspots
									</Label>
									<p className="text-[11px] text-muted-foreground">
										Heatmap aus allen aktuell sichtbaren Arten.
									</p>
								</div>
								<Switch
									id="heatmap-switch"
									checked={showHeatmap}
									onCheckedChange={setShowHeatmap}
								/>
							</div>

							<div className="flex items-center justify-between gap-3">
								<div>
									<Label
										htmlFor="habitat-switch"
										className="text-xs font-medium"
									>
										Vogelgebiete (Habitaträume)
									</Label>
									<p className="text-[11px] text-muted-foreground">
										Demo-Polygone mit geeigneten Brutlebensräumen.
									</p>
								</div>
								<Switch
									id="habitat-switch"
									checked={showHabitats}
									onCheckedChange={setShowHabitats}
								/>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-sm font-semibold">
								Legende (Demo)
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-3 text-xs text-muted-foreground">
							<div className="flex items-center gap-2">
								<span className="inline-flex h-3 w-3 rounded-full bg-[#facc15]" />
								<span>Schafstelze (Ackerrand / Wiese)</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="inline-flex h-3 w-3 rounded-full bg-[#3b82f6]" />
								<span>Gebirgsstelze (Fliessgewässer)</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="inline-flex h-3 w-3 rounded-full bg-[#6b7280]" />
								<span>Bachstelze (Kulturlandschaft)</span>
							</div>
							<div className="flex items-center gap-2 pt-1">
								<span className="inline-flex h-3 w-6 rounded-full bg-linear-to-r from-lime-400 via-amber-400 to-red-500" />
								<span>Heatmap-Dichte der aktuell sichtbaren Arten</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="inline-flex h-3 w-3 rounded-sm border border-emerald-500 bg-emerald-500/10" />
								<span>Habitaträume (Vogelgebiete, Demo)</span>
							</div>
							<p className="pt-1 text-[10px] leading-relaxed">
								Alle Daten sind frei erfundene Demo-Daten und dienen der
								Illustration von Web-GIS-Funktionen (Layer, Filter, Heatmap).
							</p>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
