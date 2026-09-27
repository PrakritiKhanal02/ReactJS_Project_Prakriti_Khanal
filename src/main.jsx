import { createRoot } from 'react-dom/client'

import MyRoute from './MyRoute.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

createRoot(document.getElementById('root')).render(
  <>
    <MyRoute />
  </>
)