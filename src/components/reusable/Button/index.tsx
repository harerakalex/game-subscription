import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';
import { theme } from '../../../theme';

interface Props {
  label: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  disabled?: boolean;
  isLoading?: boolean;
  pressHandler: () => void;
}

const Button: FC<Props> = props => {
  const { label, pressHandler, width, marginTop, marginBottom, disabled, isLoading } = props;

  const [isDisabled = disabled, setIsDisabled] = useState<boolean>();

  useEffect(() => {
    if (isLoading) setIsDisabled(isLoading);
    else setIsDisabled(disabled);
  }, [isLoading]);

  const renderLoader = () => {
    return <ActivityIndicator size="small" color={theme.colors.white} />;
  };

  return (
    <ButtonContainer
      width={width || '50%'}
      marginTop={marginTop || '0px'}
      marginBottom={marginBottom || '10px'}
      onPress={pressHandler}
      disabled={isDisabled || false}
    >
      {isLoading ? renderLoader() : <ButtonText>{label}</ButtonText>}
    </ButtonContainer>
  );
};

export default Button;
