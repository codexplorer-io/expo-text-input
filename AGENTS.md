# AGENTS.md — `@codexporer.io/expo-text-input`

## Package Overview
Theme-aware text input field wrapping React Native's `TextInput` with forwardRef support, variants (`outlined`, `flat`, `standard`), validation error states, label display, left/right accessory slots, and automatic semantic tokens from `@codexporer.io/expo-app-theme`.

## Peer Dependencies
```json
{
  "react": "*",
  "react-native": "*",
  "@codexporer.io/expo-app-theme": "*"
}
```

## TypeScript Contracts (`src/index.tsx`)

```typescript
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

export const TextInput: React.ForwardRefExoticComponent<
  TextInputProps & React.RefAttributes<RNTextInput>
>;
```

## Key Exports
- `TextInput`: ForwardRef component (`displayName = 'TextInput'`).
- `TextInputVariant`: Enum (`Outlined = 'outlined'`, `Flat = 'flat'`, `Standard = 'standard'`).
- `TextInputProps`: Props interface extending `Omit<RNTextInputProps, 'editable'>`.

## Component Behavior & Defaults
- **Variant Defaults**: `variant = TextInputVariant.Outlined`.
  - `Outlined`: Border width 1, border radius 4, horizontal padding 10, background `theme.inputBackground`.
  - `Flat`: Transparent background, border width 0.
  - `Standard`: Transparent background, bottom border width 1, border radius 0, horizontal padding 0.
- **Validation & Border Color**:
  - If `isInvalid || Boolean(errorText)`: border color is `theme.error`.
  - If focused: border color is `theme.primary`.
  - Otherwise: border color is `theme.border`.
  - If `errorText` is provided and invalid, renders error text below input with `theme.error`.
- **Defaults**:
  - `autoCapitalize` defaults to `'none'` (differs from React Native's default `'sentences'`).
  - `autoCorrect` defaults to `false` (differs from React Native's default `true`).
  - `disabled` defaults to `false`. When `true`, sets `editable={false}` and applies `opacity: 0.5`.
  - `placeholderTextColor` defaults to `theme.placeholder`.
  - `multiline`: Sets `textAlignVertical: 'top'` and adjusts minHeight to 70.
- **Theme Tokens Injected**:
  - `theme.inputBackground`
  - `theme.inputText`
  - `theme.placeholder`
  - `theme.border`
  - `theme.primary`
  - `theme.error`
  - `theme.text` (for `label`)

## Critical Guidelines for AI Agents
- **Always use `TextInput` from `@codexporer.io/expo-text-input`**: Replace raw `react-native` `<TextInput />` for all text fields to ensure consistent theming.
- **Disabled Prop**: The prop name is `disabled` (boolean), NOT `isDisabled`.
- **Validation**: Use `isInvalid` or `errorText` to trigger error styling. `errorText` automatically displays the error message string.
- **Auto-Capitalization**: If sentences or words capitalization is needed (e.g. name or caption fields), explicitly set `autoCapitalize="sentences"` or `autoCapitalize="words"`, as it defaults to `'none'`.
