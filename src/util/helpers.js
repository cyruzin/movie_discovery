export function getYear (date) {
    if (date !== "" && date !== isNaN) {
        const d = new Date(date)
        return d.getFullYear()
    }
    return ''
}

export function handleOverview (str, size = 200) {
    if (str !== '' && str !== undefined) {
        if (str.length > size) {
            return (
                str.substring(0, size) + '...'
            )
        }
        return str
    }
    return str
}