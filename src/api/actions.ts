import {CURRENCY_BEACON_API_KEY} from '@env';

const BASE_URL = 'https://api.currencybeacon.com/v1';

const request = async <T>(endpoint: string, params?: Record<string, string | number>): Promise<T> => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    console.log(CURRENCY_BEACON_API_KEY)
    if (CURRENCY_BEACON_API_KEY) url.searchParams.append('api_key', CURRENCY_BEACON_API_KEY);
    if (params) {
        Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));
    }

    const res = await fetch(url.toString())
    console.log(res)
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    console.log(data)
    return (data.response ?? data) as T;
}

export const fetchCurrencies = (): Promise<any> => {
    return request(`/latest`)
}

export const convertCurrency = (
    from: string,
    to: string,
    amount: number
): Promise<any> =>
    request('/convert', { from, to, amount });