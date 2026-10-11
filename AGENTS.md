# AGENTS.md — `@codexporer.io/expo-text-input`

## Package Overview
Theme-aware text input field wrapping React Native's `TextInput` with forwardRef support, disabled state styling, and automatic semantic tokens from `@codexporer.io/expo-app-theme`.

## Key Exports
- `TextInput`: ForwardRef component.
- `TextInputProps`: Props interface.

## Critical Guidelines for AI Agents
- Always use `TextInput` from `@codexporer.io/expo-text-input` instead of raw `react-native` `<TextInput />` for all text fields.
- Accepts standard React Native `TextInput` props (`value`, `onChangeText`, `placeholder`, `multiline`, `secureTextEntry`).
- Use `disabled={true}` or `isDisabled={true}` to deactivate input with disabled styling.
- All colors (`inputBackground`, `inputText`, `placeholder`, `border`) are automatically injected from `useAppTheme()`.
