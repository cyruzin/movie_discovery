export const getYear = date => {
    if (date !== "" && date !== isNaN) {
        let d = new Date(date)
        return d.getFullYear()
    }
    return ''
}

export const handleOverview = str => {
    if (str !== '') {
        if (str.length > 250) {
            return (
                str.substring(0, 250) + '...'
            )
        }
        return (
            str
        )
    }
}