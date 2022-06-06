import { extendTheme, ChakraTheme } from '@chakra-ui/react'

const styles: ChakraTheme['styles'] = {
  global: () => ({
    'html, body, #root': {
      height: '100%',
    },
  }),
}

export default extendTheme({ styles })
