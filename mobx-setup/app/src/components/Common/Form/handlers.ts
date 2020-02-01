import FormStore from 'stores/Tasks/FormStore'

export const onInputTextChange = (formStore: FormStore) => (
  e: React.ChangeEvent<HTMLInputElement>
): void => {
  formStore.setFieldValue(e.target.name, e.target.value)
}

export const onCheckboxChange = (formStore: FormStore) => (
  e: React.ChangeEvent<HTMLInputElement>
): void => {
  formStore.setFieldValue(e.target.name, e.target.value)
}
