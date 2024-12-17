import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/assets/css/style.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

)
