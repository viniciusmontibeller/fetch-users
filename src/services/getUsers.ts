 export async function getUsers() {
        const response = await fetch("https://randomuser.me/api/?page=1&results=10");
        const data = await response.json();
        return data;
    }