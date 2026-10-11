---
name: expo-text-input
description: Instructions and guidelines for using @codexporer.io/expo-text-input (Expo Text Input) in React Native and Expo applications.
---

# `@codexporer.io/expo-text-input` Skill

## Overview
`@codexporer.io/expo-text-input` provides a theme-integrated text entry field. It wraps React Native `TextInput` with forwardRef support, automatic placeholder color assignment, and unified border/surface styling from `@codexporer.io/expo-app-theme`.

---

## When to Use
- All text entry forms, project renaming fields, caption inputs, and comment boxes.
- Controlled and uncontrolled text editing.

---

## Usage Example

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from '@codexporer.io/expo-text-input';

export function ProjectNameInput() {
  const [name, setName] = useState('My Summer Vacation');

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Enter project name..."
        value={name}
        onChangeText={setName}
      />
    </View>
  );
}
```

---

## API Reference

### `<TextInput />` Props
Extends standard React Native `TextInputProps` (excluding `editable`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | — | Input text value |
| `onChangeText` | `(text: string) => void` | — | Text change callback |
| `placeholder` | `string` | — | Placeholder string |
| `disabled` / `isDisabled` | `boolean` | `false` | Disables input and applies muted styling |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Outer wrapper style override |
| `style` | `StyleProp<TextStyle>` | — | Text field style override |

---

## Critical Rules & Guidelines
1. **Repository Replacement**: Never use raw `react-native` `TextInput` directly; use `@codexporer.io/expo-text-input` to ensure theme compliance.
2. **Keyboard Handling**: Combine with `@codexporer.io/expo-keyboard-avoiding-view` when text fields reside inside bottom sheets or scrollable forms.
