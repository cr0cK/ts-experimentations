import * as React from 'react'
import FormStore from 'stores/Tasks/FormStore'
import { onInputTextChange, onCheckboxChange } from '../handlers'
import { render, fireEvent } from '@testing-library/react'

describe('Form handlers', () => {
  let formStore: FormStore

  beforeEach(() => {
    formStore = new FormStore()
  })

  describe('onInputTextChange', () => {
    it('should save the value of an input in the store', async () => {
      const { getByTestId } = render(
        <input
          data-testid="inputFirstName"
          type="text"
          name="firstName"
          onChange={onInputTextChange(formStore)}
        />
      )

      fireEvent.change(getByTestId('inputFirstName'), {
        target: { value: 'Alex' }
      })

      expect(formStore.getFieldValue('firstName')).toEqual('Alex')
    })
  })

  describe('onCheckboxChange', () => {
    it('should save the value of an input in the store', async () => {
      const { getByTestId } = render(
        <input
          data-testid="checkboxEnable"
          type="checkbox"
          name="enable"
          onChange={onCheckboxChange(formStore)}
        />
      )

      fireEvent.click(getByTestId('checkboxEnable'))
      expect(formStore.getFieldValueAsBoolean('enable')).toBe(true)

      fireEvent.click(getByTestId('checkboxEnable'))
      expect(formStore.getFieldValueAsBoolean('enable')).toBe(false)
    })
  })
})
