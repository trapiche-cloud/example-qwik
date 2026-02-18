import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@qwik.dev/city/vite'

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    preview: { headers: { 'Cache-Control': 'public, max-age=600' } },
  }
})
