import { useEffect, useState } from 'react';
import { convertCurrency } from '../api/actions';

interface UseConversionResult {
    converted: number | null;
    loading: boolean;
}

export function useConversion(
    from: string,
    to: string,
    amount: string
): UseConversionResult {
    const [converted, setConverted] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        const numAmount = parseFloat(amount);
        if (!from || !to || !amount || isNaN(numAmount)) {
            setConverted(null);
            return;
        }

        let cancelled = false;
        setLoading(true);

        const timer = setTimeout(async () => {
            try {
                const result = await convertCurrency(from, to, numAmount);
                if (!cancelled) setConverted(result.value);
            } catch {
                if (!cancelled) setConverted(null);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }, 400);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [from, to, amount]);

    return { converted, loading };
}