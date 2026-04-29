type Rates = {
    [key: string]: number;}

export interface CurrencyResponse {
    base: string;
    date: string;
    rates: Rates[]
}

export interface ConvertResponse {
    timestamp: number;
    date: string;
    from: string;
    to: string;
    amount: number;
    value: number;
}