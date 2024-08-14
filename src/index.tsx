import CountryModal from './CountryModal';
import { DARK_THEME } from './CountryTheme';
import CountryFilter from './CountryFilter';
import CountryList from './CountryList';
import FlagButton from './FlagButton';
import Flag from './Flag';
import HeaderModal from './HeaderModal';
import CountryModalProvider from './CountryModalProvider';
import React, { ReactNode } from 'react';
import { FlagButtonProps } from './FlagButton';
import {
  TranslationLanguageCode,
  CountryCode,
  Country,
  Region,
  Subregion,
} from './types';
import CountryContext, { DEFAULT_COUNTRY_CONTEXT } from './CountryContext';
import { ThemeProvider, DEFAULT_THEME, Theme } from './CountryTheme';
import { CountryFilterProps } from './CountryFilter';
import { StyleProp, ViewStyle, ModalProps, FlatListProps } from 'react-native';
import CountryPicker from './CountryPicker';

interface Props {
  allowFontScaling?: boolean;
  countryCode: CountryCode;
  region?: Region;
  subregion?: Subregion;
  countryCodes?: CountryCode[];
  excludeCountries?: CountryCode[];
  preferredCountries?: CountryCode[];
  theme?: Theme;
  translation?: TranslationLanguageCode;
  modalProps?: ModalProps;
  filterProps?: CountryFilterProps;
  flatListProps?: FlatListProps<Country>;
  placeholder?: string;
  withAlphaFilter?: boolean;
  withCallingCode?: boolean;
  withCurrency?: boolean;
  withEmoji?: boolean;
  withCountryNameButton?: boolean;
  withCurrencyButton?: boolean;
  withCallingCodeButton?: boolean;
  withCloseButton?: boolean;
  withFlagButton?: boolean;
  withFilter?: boolean;
  withFlag?: boolean;
  withModal?: boolean;
  disableNativeModal?: boolean;
  visible?: boolean;
  containerButtonStyle?: StyleProp<ViewStyle>;
  renderFlagButton?(props: FlagButtonProps): ReactNode;
  renderCountryFilter?(props: CountryFilterProps): ReactNode;
  onSelect(country: Country): void;
  onOpen?(): void;
  onClose?(): void;
}

const Main = ({ theme, translation, ...props }: Props) => {
  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>
      <CountryContext.Provider
        value={{ ...DEFAULT_COUNTRY_CONTEXT, translation }}
      >
        <CountryPicker {...props} />
      </CountryContext.Provider>
    </ThemeProvider>
  );
};

export default Main;
export {
  getCountriesAsync as getAllCountries,
  getCountryCallingCodeAsync as getCallingCode,
} from './CountryService';

export * from './types';
export {
  CountryFilter,
  CountryList,
  FlagButton,
  Flag,
  CountryModal,
  HeaderModal,
  CountryModalProvider,
  DARK_THEME,
  DEFAULT_THEME,
  CountryPicker,
};
