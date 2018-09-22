export const getYear = date => {
    if (date !== "" && date !== isNaN) {
        let d = new Date(date)
        return d.getFullYear()
    }
    return ''
}

export const handleOverview = (str, size = 200) => {
    if (str !== '' && str !== undefined) {
        if (str.length > size) {
            return (
                str.substring(0, size) + '...'
            )
        }
        return (
            str
        )
    }
}