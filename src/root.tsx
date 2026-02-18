import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head'

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <RouterHead />
      </head>
      <body lang="en" style="margin:0">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  )
})
