export default function Category({
	value,
	label,
}: {
	value?: Sanity.BlogCategory
	label?: string
}) {
	return (
		<>
			<span className="text-coffee"></span>
			{label || value?.title}
		</>
	)
}
