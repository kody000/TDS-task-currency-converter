export interface Currency {
    id: number;
    name: string;
    short_code: string;
    code: string;
    symbol: string;
}

export interface ConvertResponse {
    timestamp: number;
    date: string;
    from: string;
    to: string;
    amount: number;
    value: number;
}