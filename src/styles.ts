import { createGlobalStyle } from 'styled-components'

const Cores = {
  branco: '#EEE',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 'Roboto', sans-serif;
}

body {
  background-color: ${Cores.preta};
  color: ${Cores.branco};
}
`
