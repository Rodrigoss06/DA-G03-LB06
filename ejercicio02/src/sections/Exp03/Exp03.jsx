import React from 'react'
import ItemList from './ItemList'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Exp03() {
  return (
    <div>
        <Header title="Bienvenido a mi sitio web" />
        <ItemList/>
        <Footer year={2024} />
    </div>
  )
}

export default Exp03