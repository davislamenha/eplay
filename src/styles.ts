import { createGlobalStyle } from 'styled-components'

export const cores = {
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
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body {
  background-color: ${cores.preta};
  color: ${cores.branco};
  padding-top: 40px;
}

.container {
  margin: 0 auto;
  width: min(100% - 30px, 1440px);
}
`
