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
    users: User[];
    userFilter: (users: User[]) => User[];
}

export type Page = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type Search = {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}