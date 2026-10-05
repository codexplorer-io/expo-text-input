# `@codexporer.io/expo-text-input`

A theme-integrated, multi-state `TextInput` component for Expo and React Native applications. Supports focus highlights, invalid/error validation states, disabled styles, multiline editing, left/right accessories, and theme integration via `@codexporer.io/expo-app-theme`.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-text-input
```

Ensure peer dependencies are installed:
```bash
yarn add @codexporer.io/expo-app-theme
```

## Quick Start

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, TextInputVariant } from '@codexporer.io/expo-text-input';

export function ExampleScreen() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                label='Username'
                value={text}
                onChangeText={setText}
                placeholder='Enter your username'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
});
```

## Props Reference

Extends standard React Native `TextInputProps` (excluding `editable`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `TextInputVariant` | `TextInputVariant.Outlined` | Visual variant: `Outlined`, `Flat`, or `Standard` |
| `isInvalid` | `boolean` | `false` | Highlights border with `theme.error` |
| `errorText` | `string` | — | Error message rendered beneath the input; automatically marks input as invalid |
| `label` | `string` | — | Label text rendered above the input |
| `labelStyle` | `StyleProp<TextStyle>` | — | Label typography style override |
| `disabled` | `boolean` | `false` | Disables input (`editable={false}`) and applies dimmed styling |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Outer container style override |
| `style` | `StyleProp<TextStyle>` | — | Inner `TextInput` text style override |
| `autoCapitalize` | `'none' \| 'sentences' \| 'words' \| 'characters'` | `'none'` | Capitalization behavior |
| `autoCorrect` | `boolean` | `false` | Whether auto-correct is enabled |
| `left` | `React.ReactNode` | — | Accessory element rendered on the left |
| `right` | `React.ReactNode` | — | Accessory element rendered on the right |

## License

MIT