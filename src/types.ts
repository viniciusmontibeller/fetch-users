export type User = {
    name: {
        firstName: string;
        lastName: string;
        title: string;
    }
    id: {
        value: string;
    }
    dob:{
        date: string;
        age: number;
    }
}

export type UserList = {
    users: User[]
}