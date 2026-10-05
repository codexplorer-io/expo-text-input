import React, { forwardRef, useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';
import { useAppTheme } from '@codexporer.io/expo-app-theme';

export enum TextInputVariant {
    Outlined = 'outlined',
    Flat = 'flat',
    Standard = 'standard'
}

export interface TextInputProps extends Omit<RNTextInputProps, 'editable'> {
    variant?: TextInputVariant;
    isInvalid?: boolean;
    errorText?: string;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export const TextInput = forwardRef<RNTextInput, TextInputProps>((props, ref) => {
    const {
        variant = TextInputVariant.Outlined,
        isInvalid = false,
        errorText,
        label,
        labelStyle,
        disabled = false,
        containerStyle,
        style,
        placeholderTextColor,
        autoCapitalize = 'none',
        autoCorrect = false,
        onFocus,
        onBlur,
        multiline,
        left,
        right,
        ...restProps
    } = props;

    const theme = useAppTheme();
    const [isFocused, setIsFocused] = useState(false);

    const hasError = Boolean(isInvalid || errorText);

    const getBorderColor = (): string => {
        if (hasError) return theme.error;
        if (isFocused) return theme.primary;
        return theme.border;
    };

    const getVariantStyles = (): ViewStyle => {
        switch (variant) {
            case TextInputVariant.Flat:
                return {
                    backgroundColor: 'transparent',
                    borderWidth: 0
                };
            case TextInputVariant.Standard:
                return {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 1,
                    borderColor: getBorderColor(),
                    borderRadius: 0,
                    paddingHorizontal: 0
                };
            case TextInputVariant.Outlined:
            default:
                return {
                    backgroundColor: theme.inputBackground,
                    borderWidth: 1,
                    borderColor: getBorderColor(),
                    borderRadius: 4,
                    paddingHorizontal: 10,
                    paddingVertical: multiline ? 8 : 6
                };
        }
    };

    const handleFocus = (e: any) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: any) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    return (
        <View style={[styles.wrapper, containerStyle]}>
            {!!label && (
                <Text style={[styles.label, { color: theme.text }, labelStyle]}>
                    {label}
                </Text>
            )}
            <View
                style={[
                    styles.inputContainer,
                    getVariantStyles(),
                    multiline && styles.multilineContainer,
                    disabled && styles.disabled
                ]}
            >
                {left && <View style={styles.accessoryLeft}>{left}</View>}
                <RNTextInput
                    ref={ref}
                    style={[
                        styles.input,
                        { color: theme.inputText },
                        multiline && styles.multilineInput,
                        style
                    ]}
                    placeholderTextColor={placeholderTextColor ?? theme.placeholder}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    editable={!disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    multiline={multiline}
                    textAlignVertical={multiline ? 'top' : 'center'}
                    {...restProps}
                />
                {right && <View style={styles.accessoryRight}>{right}</View>}
            </View>
            {hasError && !!errorText && (
                <Text style={[styles.errorText, { color: theme.error }]}>
                    {errorText}
                </Text>
            )}
        </View>
    );
});

TextInput.displayName = 'TextInput';

const styles = StyleSheet.create({
    wrapper: {
        width: '100%'
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 4
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 40
    },
    multilineContainer: {
        minHeight: 70,
        alignItems: 'flex-start'
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 0
    },
    multilineInput: {
        textAlignVertical: 'top'
    },
    disabled: {
        opacity: 0.5
    },
    errorText: {
        fontSize: 12,
        marginTop: 4,
        marginHorizontal: 2
    },
    accessoryLeft: {
        marginRight: 8
    },
    accessoryRight: {
        marginLeft: 8
    }
});
