import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BlogDetail from './routes/BlogDetail.jsx'
import { CursorProvider } from './contexts/CursorProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: []
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorProvider>
      <RouterProvider router={router} />
    </CursorProvider>
  </StrictMode>,
)
