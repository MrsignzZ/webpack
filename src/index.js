
import './style/index.css'// loader => css-loader module style-loader

const operateDom = (dom, name) => {
  document.querySelector(dom).textContent = name
}

operateDom('#app', 'fbakbdjb')
