import { observable, action, computed } from 'mobx'

export type FieldName = string
export type FieldValue = string | boolean

export default class FormStore {
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

  /* Computed */

  @computed
  get fieldValues(): Map<FieldName, FieldValue> {
    return this.$fieldValues.toJS()
  }
}
