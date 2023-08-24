export async function getUsers(page: number) {
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);
    const data = await response.json();
    console.log(data);
    return data;
}
getUsers(2)