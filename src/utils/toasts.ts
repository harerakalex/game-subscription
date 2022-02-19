import Toast from 'react-native-toast-message';

export const toast = (type: EToastType, title: string, message: string) => {
  return Toast.show({
    type: `${type}`,
    position: 'top',
    text1: `${title}`,
    text2: `${message}`,
    visibilityTime: 5000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {}
  });
};

export enum EToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}
