import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

 (function(){
        var redirect = sessionStorage.getItem('redirect');
        sessionStorage.removeItem('redirect');
        if (redirect &&redirect !== location.pathname + location.search + location.hash){
          window.history.replaceState(null, "", redirect);
          window.dispatchEvent(new PopStateEvent('popstate'))
        }
      })();

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <React.StrictMode>
 <BrowserRouter basename='/tesla'>
    <App />
  </BrowserRouter>
  //</React.StrictMode>,
)
