export const renderDate = (date: Date) => {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}
