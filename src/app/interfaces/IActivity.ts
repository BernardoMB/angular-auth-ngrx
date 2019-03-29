export interface IActivity {
    datetime: Date;
    type: string;
    amount: number;
    sender: string;
    recipient: string;
}