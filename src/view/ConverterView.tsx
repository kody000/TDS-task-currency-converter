import {View, Text, StyleSheet, Button,} from 'react-native';
import {useCurrencies} from "../hooks/useCurrencies";
import CurrencyPicker from "../components/CurrencyPicker";
import {useState} from "react";

export default function ConverterScreen() {
    const {currencies, loading: loadingCurrencies, error} = useCurrencies()
    const [from, setFrom] = useState<string>(currencies[0] || 'USD');
    const [to, setTo] = useState<string>('EUR');
    const [amount, setAmount] = useState<string>(1);



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>
            <CurrencyPicker label="From" value={from} onChange={setFrom} currencies={currencies} />
            <Button title="Swap" onPress={() => console.log('swapping')} />
            <CurrencyPicker label="To" value={to} onChange={setTo} currencies={currencies} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {padding: 50, flex: 1, backgroundColor: '#fff'},
    title: {fontSize: 24, fontWeight: '700', marginBottom: 20},
});