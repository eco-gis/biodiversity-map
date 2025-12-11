// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Biodiversitäts-Hotspots – eco-gis Demo",
	description:
		"Mini Web-GIS Demo von eco-gis: Biodiversitäts-Hotspots, Habitaträume und Artenfundpunkte.",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="de">
			<body className="min-h-dvh bg-background text-foreground antialiased">
				<div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 py-6 md:px-6">
					{children}
				</div>
			</body>
		</html>
	);
}
