import {
    Text,
    StyleSheet,
    ActivityIndicator,
    Animated
} from 'react-native';
import {useCurrencies} from "../hooks/useCurrencies";
import CurrencyPicker from "../components/CurrencyPicker";
import {useState} from "react";
import AmountInput from "../components/AmountInput";
import {useConversion} from "../hooks/useConversion";
import ScrollView = Animated.ScrollView;
import {useDebounce} from "../hooks/useDebounce";

export default function ConverterScreen() {
    const {currencies, loading: loadingCurrencies, error} = useCurrencies()
    const [from, setFrom] = useState<string>(currencies[0] || 'USD');
    const [to, setTo] = useState<string>('EUR');
    const [amount, setAmount] = useState<string>('1');
    const debouncedAmount = useDebounce(amount, 400)

    const { converted, loading: converting } = useConversion(from, to, debouncedAmount);

    if (loadingCurrencies) return <ActivityIndicator style={styles.center} />;
    if (error) return <Text style={styles.error}>Failed to load currencies</Text>;

    return (
        <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <Text style={styles.title}>Currency Converter</Text>
            <CurrencyPicker label="From" value={from} onChange={setFrom} currencies={currencies} />
            <AmountInput label="Amount" value={amount} onChange={setAmount} />
            <CurrencyPicker label="To" value={to} onChange={setTo} currencies={currencies} />
            <AmountInput
                label="Converted"
                value={converting ? '...' : converted?.toFixed(2) ?? ''}
                onChange={() => {}}
                editable={false}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {padding: 20, flex: 1, backgroundColor: 'fff' },
    title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
    center: { flex: 1, justifyContent: 'center' },
    error: { color: 'red', padding: 20 },
});