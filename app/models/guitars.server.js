export async function getGuitars() {

    const response = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
    const results = await response.json();

    return results.data;
}