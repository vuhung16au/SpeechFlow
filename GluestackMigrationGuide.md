# Gluestack UI Migration Guide

This document provides a step-by-step guide for completing the migration from React Native's native components to Gluestack UI components.

## Migration Guide for Remaining Screens

For each of the remaining screens, follow these steps to convert them to use Gluestack UI:

1. **Create the Gluestack version of the screen**:

   ```typescript
   src/screens/GluestackXxxScreen.tsx
   ```

2. **Replace React Native components with Gluestack equivalents**:
   - Replace `View` with `Box`
   - Replace `Text` with `Text`
   - Replace `TouchableOpacity` with `Pressable`
   - Replace `StyleSheet` styles with Gluestack UI props
   - Replace `TextInput` with `Input` + `InputField`
   - Replace `FlatList`/`ScrollView` with equivalents (but keep React Native's versions for now)
   - Replace `Button` with Gluestack `Button` + `ButtonText`
   - Replace `Switch` with Gluestack `Switch`

3. **Update App.tsx imports**:

   ```typescript
   import GluestackXxxScreen from './screens/GluestackXxxScreen';
   ```

4. **Update the Drawer.Screen in App.tsx**:

   ```typescript
   <Drawer.Screen 
     name="Xxx" 
     component={GluestackXxxScreen}
     options={{
       title: 'Xxx',
       drawerIcon: ({ color, size }) => <XxxIcon color={color} size={size} />
     }}
   />
   ```

5. **Verify the screen works correctly before moving on to the next one**

## Common Gluestack Components and Their React Native Equivalents

| React Native | Gluestack UI | Notes |
|-------------|-------------|-------|
| `View` | `Box` | Fundamental layout component |
| `Text` | `Text` | Use `size`, `color`, `fontWeight` props |
| `TouchableOpacity` | `Pressable` | Use with `onPress` handler |
| `Button` | `Button` + `ButtonText` | Requires nested ButtonText component |
| `TextInput` | `Input` + `InputField` | Requires nested InputField component |
| `ScrollView` | `ScrollView` (from RN) | Keep using React Native's version |
| `FlatList` | `FlatList` (from RN) | Keep using React Native's version |
| `Image` | `Image` | Use with `source`, `alt`, `size` props |
| `Switch` | `Switch` | Use `value`, `onValueChange` props |
