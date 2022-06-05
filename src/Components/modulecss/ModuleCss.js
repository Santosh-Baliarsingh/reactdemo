import React from 'react'
import mycss from './ModuleCss1.module.css'
import './ModuleCss2.css'

export default function ModuleCss() {
  return (

    <div className={mycss.mod}>ModuleCss Example</div>
  )
}
