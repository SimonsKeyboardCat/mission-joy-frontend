export interface Mission {
    id: number;
    title: string;
    image: string;
    description: string;
    date: string;
    location: string;
    duration: string;
    volunteersNeeded: number;
    volunteersSignedUp: number;
    completed: boolean;
}