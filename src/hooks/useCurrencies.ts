import { useEffect, useState } from 'react';
import { fetchCurrencies } from '../api/actions';
import { Currency } from '../types';

interface UseCurrenciesResult {
    currencies: Currency[];
    loading: boolean;
    error: Error | null;
}

export function useCurrencies(): UseCurrenciesResult {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetchCurrencies()
            .then((data) => {
                if (!cancelled) setCurrencies(data);
            })
            .catch((err: Error) => !cancelled && setError(err))
            .finally(() => !cancelled && setLoading(false));
        return () => {
            cancelled = true;
        };
    }, []);

    return { currencies, loading, error };
}