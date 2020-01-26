import { observable, action } from 'mobx'

export type FieldName = string
export type FieldValue = string | boolean

export default class StoreForm {
  private $fieldValues = observable.map<FieldName, FieldValue>()

  getFieldValue(fieldName: FieldName): string {
    return String(this.$fieldValues.get(fieldName) || '')
  }

  getFieldValueAsBoolean(fieldName: FieldName): boolean {
    return Boolean(this.$fieldValues.get(fieldName))
  }

  /* Actions */

  @action
  reset(): this {
    this.$fieldValues.clear()
    return this
  }

  @action
  setFieldValue(fieldName: FieldName, fieldValue: FieldValue): this {
    this.$fieldValues.set(fieldName, fieldValue)
    return this
  }

  @action
  onInputTextChange = (e: React.ChangeEvent<HTMLInputElement>): this => {
    this.$fieldValues.set(e.target.name, e.target.value)
    return this
  }

  @action
  onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): this => {
    this.$fieldValues.set(e.target.name, e.target.checked)
    return this
  }
}
