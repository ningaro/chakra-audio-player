import { extendTheme, ChakraTheme } from '@chakra-ui/react'

const styles: ChakraTheme['styles'] = {
  global: () => ({
    'html, body, #root': {
      height: '100%',
    },
    '*:focus': {
      boxShadow: 'none!important',
    },
  }),
}

export default extendTheme({ styles })
