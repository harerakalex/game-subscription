import React, { FC } from 'react';
import { KeyboardType, StyleSheet, TextInput } from 'react-native';

import { theme } from '../../../theme';
import { AutoCompleteType } from '../../../constants/types';

type Props = {
  value?: string;
  placeholder?: string;
  multiLine?: boolean;
  secureText?: boolean;
  keyboardType?: KeyboardType;
  autoComplete?: AutoCompleteType;
  onChangeText(input: string): any;
};

const InputBox: FC<Props> = props => {
  const { value, placeholder, multiLine, onChangeText, secureText, keyboardType, autoComplete } =
    props;

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.textInput}
      editable={true}
      multiline={multiLine || false}
      numberOfLines={multiLine ? 4 : 1}
      autoCapitalize={'none'}
      secureTextEntry={secureText || false}
      keyboardType={keyboardType || 'default'}
      autoCompleteType={autoComplete || 'off'}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    minHeight: 45,
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
    paddingHorizontal: 18,
    marginBottom: 12,
    paddingVertical: 6,
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
    borderLeftWidth: 2,
    borderLeftColor: theme.colors.primary,
    borderRightWidth: 2,
    borderRightColor: theme.colors.primary,
    borderRadius: 25
  }
});

export default InputBox;
