export function formatDateString(date: string): string {
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return formatter.format(new Date(date))
}