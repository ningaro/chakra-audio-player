import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// UI styles provider
import { ChakraProvider } from '@chakra-ui/react'

// Ui styles
import theme from './theme'

// Root screen
import Root from './screens/Root'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Root />
    </ChakraProvider>
  </StrictMode>
)
