import React from 'react';

import { render } from '@testing-library/react-native';
import { CountryPicker } from '../src';

describe('CountryPicker Component', () => {
  it('should be created successfully', () => {
    const { getByTestId } = render(
      <CountryPicker countryCode={'US'} onSelect={() => {}} />,
    );

    const picker = getByTestId('list-countries');
    expect(picker).toBeDefined();
  });
});
