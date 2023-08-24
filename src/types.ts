export type User = {
    name: {
        first: string;
        last: string;
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

export type ListOfUsers = {
    users: User[]
}

export type Page = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}