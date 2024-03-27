
export interface IFriends {
    id: string;
    name: string;
}

export interface IProfile {
    id: string;
    name: string;
    currency?: string;
    age: string;
    friends: IFriends[];
    loading: boolean;
}
