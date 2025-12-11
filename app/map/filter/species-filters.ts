export function speciesFilter(visibleSpecies: string[]) {
	return [
		"match",
		["get", "species"],
		...visibleSpecies.flatMap((sp) => [sp, true]),
		false,
	] as const;
}
