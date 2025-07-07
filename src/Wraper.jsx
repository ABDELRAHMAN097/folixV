import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient } from 'react-query'
import AppProvider from './providers/AppProvider'

const queryClient = new QueryClient()

const Wraper = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            {children}
          </AppProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default Wraper