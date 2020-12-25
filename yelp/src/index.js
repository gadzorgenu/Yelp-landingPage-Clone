import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import { ChakraProvider } from "@chakra-ui/react"

const engine = new Styletron()

const ThemeApp = () => {
  return (
    <ChakraProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
            <App />
        </BaseProvider>
      </StyletronProvider>
    </ChakraProvider>
  )
}

ReactDOM.render(<ThemeApp />, document.getElementById('root'))
