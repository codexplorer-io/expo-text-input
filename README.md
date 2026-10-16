# `@codexporer.io/expo-text-input`

A theme-integrated, multi-state `TextInput` component for Expo and React Native applications. Supports focus highlights, invalid/error validation states, disabled styles, multiline editing, left/right accessories, and theme integration via `@codexporer.io/expo-app-theme`.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-text-input
```

Peer dependencies:
- `react` (`*`)
- `react-native` (`*`)
- `@codexporer.io/expo-app-theme` (`*`)

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
                label="Username"
                value={text}
                onChangeText={setText}
                placeholder="Enter your username"
                variant={TextInputVariant.Outlined}
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
| `label` | `string` | — | Label text rendered above the input (colored with `theme.text`) |
| `labelStyle` | `StyleProp<TextStyle>` | — | Label typography style override |
| `disabled` | `boolean` | `false` | Disables input (`editable={false}`) and applies dimmed opacity (`0.5`) |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Outer wrapper container style override |
| `style` | `StyleProp<TextStyle>` | — | Inner `TextInput` text style override |
| `placeholderTextColor` | `string` | `theme.placeholder` | Color of placeholder text |
| `autoCapitalize` | `'none' \| 'sentences' \| 'words' \| 'characters'` | `'none'` | Capitalization behavior |
| `autoCorrect` | `boolean` | `false` | Whether auto-correct is enabled |
| `left` | `React.ReactNode` | — | Accessory element rendered on the left |
| `right` | `React.ReactNode` | — | Accessory element rendered on the right |

## License

MIT