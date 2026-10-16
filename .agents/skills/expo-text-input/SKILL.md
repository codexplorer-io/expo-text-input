---
name: expo-text-input
description: Instructions and guidelines for using @codexporer.io/expo-text-input (Expo Text Input) in React Native and Expo applications.
---

# `@codexporer.io/expo-text-input` Skill

## Overview
`@codexporer.io/expo-text-input` provides a theme-integrated text entry field wrapping React Native's `TextInput` with forwardRef support, variants (`outlined`, `flat`, `standard`), validation states (`isInvalid`, `errorText`), labels, left/right accessory slots, and automatic color tokens from `@codexporer.io/expo-app-theme`.

---

## When to Use
- All text entry forms, project renaming fields, caption inputs, and comment boxes.
- Form inputs requiring validation messages, helper labels, or leading/trailing icons.
- Controlled and uncontrolled text editing.

---

## Usage Examples

### 1. Standard Form Field with Label and Validation
```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, TextInputVariant } from '@codexporer.io/expo-text-input';

export function ProjectNameInput() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (text: string) => {
    setName(text);
    if (!text.trim()) {
      setError('Project name is required');
    } else {
      setError('');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="Project Name"
        placeholder="Enter project name..."
        value={name}
        onChangeText={handleChange}
        errorText={error}
        variant={TextInputVariant.Outlined}
      />
    </View>
  );
}
```

### 2. Flat / Standard Variant with Accessory Slots
```tsx
import React from 'react';
import { View } from 'react-native';
import { TextInput, TextInputVariant } from '@codexporer.io/expo-text-input';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '@codexporer.io/expo-app-theme';

export function SearchField() {
  const theme = useAppTheme();

  return (
    <TextInput
      placeholder="Search items..."
      variant={TextInputVariant.Standard}
      left={<Ionicons name="search" size={20} color={theme.textSecondary} />}
      clearButtonMode="while-editing"
    />
  );
}
```

---

## API Reference

### `<TextInput />` Props
Extends standard React Native `TextInputProps` (excluding `editable`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `TextInputVariant` | `TextInputVariant.Outlined` | Visual variant: `Outlined`, `Flat`, or `Standard` |
| `isInvalid` | `boolean` | `false` | Highlights border with `theme.error` |
| `errorText` | `string` | — | Error message rendered beneath the input; triggers invalid border styling |
| `label` | `string` | — | Label text rendered above the input (colored with `theme.text`) |
| `labelStyle` | `StyleProp<TextStyle>` | — | Label typography style override |
| `disabled` | `boolean` | `false` | Disables input (`editable={false}`) and applies dimmed opacity (`0.5`) |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Outer wrapper container style override |
| `style` | `StyleProp<TextStyle>` | — | Inner `TextInput` text style override |
| `placeholderTextColor` | `string` | `theme.placeholder` | Color of placeholder text |
| `autoCapitalize` | `'none' \| 'sentences' \| 'words' \| 'characters'` | `'none'` | Capitalization behavior (defaults to `'none'`) |
| `autoCorrect` | `boolean` | `false` | Auto-correct behavior (defaults to `false`) |
| `left` | `React.ReactNode` | — | Accessory element rendered on the left |
| `right` | `React.ReactNode` | — | Accessory element rendered on the right |

---

## Critical Rules & Guidelines
1. **Always Use over Raw `TextInput`**: Never use raw `react-native` `TextInput` directly; use `@codexporer.io/expo-text-input` to ensure theme compliance.
2. **Prop Name for Disabled State**: Use `disabled={true}` (boolean), NOT `isDisabled`.
3. **Defaults Awareness**: Note that `autoCapitalize` defaults to `'none'` and `autoCorrect` defaults to `false`. Explicitly set `autoCapitalize="sentences"` when natural language input is expected.
4. **Keyboard Handling**: Combine with `@codexporer.io/expo-keyboard-avoiding-view` when text fields reside inside bottom sheets or scrollable forms.
