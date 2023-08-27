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

export type UserDetails ={
    name: {
        first: string;
        last: string;
        title: string;
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
    userFilter: (users: User[]) => User[];
}

export type Page = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type Search = {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}