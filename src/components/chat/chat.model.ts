export interface Chat {
    id: number;
    name: string;
    job: string;
    image: string;
    messages: Message[];
}

export interface Message {
    sender: 'user' | 'organization';
    content: string;
    timestamp: Date;
}