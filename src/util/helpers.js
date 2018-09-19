export const getYear = date => {
    if (date !== "" && date !== isNaN) {
        let d = new Date(date)
        return `(${d.getFullYear()})`
    }
    return ''
}