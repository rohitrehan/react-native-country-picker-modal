import * as React from 'react';

export interface CountryModalContextParam {
  gate?: React.ReactNode;
  teleport?(element: React.ReactNode): void;
}

export const CountryModalContext =
  React.createContext<CountryModalContextParam>({
    gate: undefined,
    teleport: undefined,
  });

interface ICountryModalProvider {
  children: React.ReactNode;
}
const CountryModalProvider = ({ children }: ICountryModalProvider) => {
  const [gate, setGate] = React.useState<React.ReactNode>(undefined);
  const teleport = (element: React.ReactNode) => setGate(element);
  return (
    <CountryModalContext.Provider value={{ gate, teleport }}>
      {children}
      {gate}
    </CountryModalContext.Provider>
  );
};

export default CountryModalProvider;
