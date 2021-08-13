export async function fetchData() {
    const url = process.env.REACT_APP_API_URL
    const response = await fetch(url as string)
    const result = await response.json()
    return result
}