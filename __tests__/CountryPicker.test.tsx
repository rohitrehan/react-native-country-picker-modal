import React from 'react'

// import { render } from '@testing-library/react-native'
import { CountryPicker } from '..'
import { create } from 'react-test-renderer'

describe('CountryPicker Component', () => {
  it('should be created successfully', () => {
    const picker = create(
      <CountryPicker countryCode={'US'} onSelect={() => {}} />,
    )

    // const picker = getByTestId('country-picker')
    expect(picker).toBeDefined()
  })
})
