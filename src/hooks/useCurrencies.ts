import { useEffect, useState } from 'react';
import { fetchCurrencies } from '../api/actions';

interface UseCurrenciesResult {
    currencies: string[];
    loading: boolean;
    error: Error | null;
}

export function useCurrencies(): UseCurrenciesResult {
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetchCurrencies()
            .then((data) => {
                if (!cancelled) setCurrencies([data.base, ...Object.keys(data.rates)]);
            })
            .catch((err: Error) => !cancelled && setError(err))
            .finally(() => !cancelled && setLoading(false));
        return () => {
            cancelled = true;
        };
    }, []);

    return { currencies, loading, error };
}