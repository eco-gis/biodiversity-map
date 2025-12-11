export function renderSpeciesPopup(props: Record<string, unknown>) {
	const species = props.species ?? "Art";
	return `
		<div style="font-family: Inter; font-size: 12px;">
			<div style="font-weight: 600;">${species}</div>
			<div style="color: #6b7280;">Kanton Schaffhausen · Demo</div>
		</div>
	`;
}
