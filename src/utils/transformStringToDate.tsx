export function transformStringToDate (string: string) {
    const data = new Date(string)
    const day = data.getDate()
    const month = data.getMonth()
    const year = data.getFullYear()
    return `${day}/${month}/${year}`
}
