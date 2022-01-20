import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      white: string;
      darkWhite: string;
      darkBlue: string;
      gray: string;
      active: string;
      inactive: string;
      link: string;
      lightWhite: string;
      lightGray: string;
      danger: string;
      info: string;
      success: string;
      backgroundOverlay: string;
      appBackground: string;
      category: string;
      priceAndAttribute: string;
      initiatedOrderborderColor: string;
      initiatedOrderBackgroundColor: string;
      paidOrderBorderColor: string;
      paidOrderBackgroundColor: string;
      readyOrderBorderColor: string;
      readyOrderBackgroundColor: string;
      teal: string;
    };
  }
}
