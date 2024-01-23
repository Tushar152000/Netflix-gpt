
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './components/utilis/appStore';
function App() {
  return (
    <Provider  store={appStore}>
      <Body/>
    </Provider>
   
  );
}

export default App;
