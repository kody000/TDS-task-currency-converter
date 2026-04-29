import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet } from 'react-native';

interface CurrencyPickerProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    currencies: string[];
}

export default function CurrencyPicker({
                                           label,
                                           value,
                                           onChange,
                                           currencies,
                                       }: CurrencyPickerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={value}
                    onValueChange={(val) => onChange(String(val))}
                    mode="dropdown"
                >
                    {currencies.map((currency) => (
                        <Picker.Item key={currency} label={currency} value={currency} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginVertical: 20 },
    label: { fontWeight: '600', marginBottom: 4 },
    pickerWrapper: {
        height: 100,
        justifyContent: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
});