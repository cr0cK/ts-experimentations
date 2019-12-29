import { configure } from 'mobx'
import * as React from 'react'
import ContextStores from '../contexts/ContextStores'
import RootStore from '../stores/RootStore'
import '../styles/App.css'
import Tasks from './Tasks'

interface IAppProps {}

// enable MobX strict mode
configure({ enforceActions: 'observed' })

const App: React.FunctionComponent<IAppProps> = props => {
  const rootStore = new RootStore()

  return (
    <ContextStores.Provider value={{ rootStore: rootStore }}>
      <div className="App">
        <header className="App-header">
          <Tasks />
        </header>
      </div>
    </ContextStores.Provider>
  )
}

export default App
