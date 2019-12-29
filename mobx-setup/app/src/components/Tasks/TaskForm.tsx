import { observer } from 'mobx-react'
import * as React from 'react'
import { useStores } from '../../hooks/useStores'
import FormStore from '../../stores/Tasks/FormStore'
import Form from '../Common/Form'
import SubTitle from '../Common/SubTitle'
import { onAddTaskSubmit } from './handlers'

interface ITaskFormProps {
  className?: string
}

const TaskForm: React.FunctionComponent<ITaskFormProps> = props => {
  const formStoreRef = React.useRef<FormStore>(new FormStore())

  const { tasksStore } = useStores()
  const storeForm = formStoreRef.current

  return (
    <div>
      <SubTitle>Add a new task</SubTitle>

      <Form onSubmit={onAddTaskSubmit(storeForm, tasksStore)}>
        <div>
          <label htmlFor="taskLabel">Label:</label>
          <input
            id="taskLabel"
            type="text"
            name="label"
            onChange={storeForm.onInputTextChange}
            value={storeForm.getFieldValue('label')}
          />
        </div>

        <div>
          <label htmlFor="taskState">Done:</label>
          <input
            id="taskState"
            type="checkbox"
            name="done"
            onChange={storeForm.onCheckboxChange}
            checked={storeForm.getFieldValueAsBoolean('done')}
          />
        </div>

        <input type="submit" value="OK" />
      </Form>
    </div>
  )
}

export default observer(TaskForm)
