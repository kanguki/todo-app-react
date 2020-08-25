import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker.unregister();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
let items=document.querySelectorAll(".items");
let alert = document.querySelector(".alert")

items.forEach(item=>{
  item.addEventListener('mouseover',()=>{
    if(!item.childNodes[0].nodeName.includes('P')){
      alert.style.visibility="visible"
      console.log(item)
      console.log(alert)
      console.log(item.childNodes[0].nodeName)
    }
  })
})
  items.forEach(item=>{
    item.addEventListener('mouseout',()=>{
      alert.style.visibility="hidden"
      //alert.classList.remove('highlight')
    })
  })
  