 export async function getUsers() {
        const response = await fetch("https://randomuser.me/api/?results=50");
        const data = await response.json();
        return data;
    }