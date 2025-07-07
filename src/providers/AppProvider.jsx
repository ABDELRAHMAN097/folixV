import React from 'react'
import { TranslationProvider } from './TranslationProvider'
import { ModalsProvider } from './ModalsProviders'
const AppProvider = ({ children }) => {
  return (
    <TranslationProvider>
      <ModalsProvider>
        {children}
      </ModalsProvider>
    </TranslationProvider>
  )
}

export default AppProvider