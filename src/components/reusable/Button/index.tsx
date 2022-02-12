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
  bgColor?: string;
  pressHandler: () => void;
}

const Button: FC<Props> = props => {
  const { label, pressHandler, width, marginTop, marginBottom, disabled, isLoading, bgColor } =
    props;

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
      width={width || 'auto'}
      marginTop={marginTop || '0px'}
      marginBottom={marginBottom || '10px'}
      onPress={pressHandler}
      disabled={isDisabled || false}
      bgColor={bgColor || theme.colors.primary}
    >
      {isLoading ? renderLoader() : <ButtonText>{label}</ButtonText>}
    </ButtonContainer>
  );
};

export default Button;
