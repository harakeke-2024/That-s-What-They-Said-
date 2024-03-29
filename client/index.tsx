import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Auth0Provider } from '@auth0/auth0-react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="spcy-harakeke-2024.au.auth0.com"
      clientId="ebCifjYbv9sJ0VceESIml6pMyR86rEFo"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://questions/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
