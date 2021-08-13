const url = process.env.REACT_APP_API_URL

export async function getQuestionsData() {
    const response = await fetch(url as string)
    const result = await response.json()
    return result
}