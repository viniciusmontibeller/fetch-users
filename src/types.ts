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
    picure: {
        large: string;
    }
    location: {
        city: string;
        country: string;
        state: string;
        street: {
            name: string;
            number: number;
        }
    }
    postcode: number;
}

export type ListOfUsers = {
    loading: boolean;
    currentUsers: User[];
}

export type Page = {
    totalUsers: number;
    usersPerPage: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type Search = {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}