import { TextInput, View, Text, StyleSheet } from 'react-native';

interface AmountInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    editable?: boolean;
}

export default function AmountInput({
                                        label,
                                        value,
                                        onChange,
                                        editable = true,
                                    }: AmountInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, !editable && styles.disabled]}
                keyboardType="decimal-pad"
                value={value}
                onChangeText={onChange}
                editable={editable}
                placeholder="0.00"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginVertical: 20, width: 200 },
    label: { fontWeight: '600', marginBottom: 4, flex: 1, alignItems: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, fontSize: 18 },
    disabled: { backgroundColor: '#f0f0f0' },
});