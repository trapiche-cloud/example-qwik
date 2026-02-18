import { component$, useSignal } from '@builder.io/qwik'
import { routeAction$, type DocumentHead } from '@builder.io/qwik-city'

export const useIncrement = routeAction$(async (_, { sharedMap }) => {
  const count = (sharedMap.get('count') ?? 0) as number
  const next = count + 1
  sharedMap.set('count', next)
  return { count: next }
})

export const useDecrement = routeAction$(async (_, { sharedMap }) => {
  const count = (sharedMap.get('count') ?? 0) as number
  const next = count - 1
  sharedMap.set('count', next)
  return { count: next }
})

export default component$(() => {
  const inc = useIncrement()
  const dec = useDecrement()
  const count = useSignal(inc.value?.count ?? dec.value?.count ?? 0)

  return (
    <div style="font-family:system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#0f0f0f;color:#fff;gap:2rem;">
      <h1 style="font-size:1.25rem;opacity:0.5;letter-spacing:0.05em;text-transform:uppercase;">Qwik City on Trapiche</h1>
      <div style="font-size:6rem;font-weight:700;line-height:1;">{count.value}</div>
      <div style="display:flex;gap:1rem;">
        <button
          style="padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#333;color:#fff;"
          onClick$={async () => { const r = await dec.submit({}); count.value = r.value.count ?? count.value }}
        >−</button>
        <button
          style="padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#6366f1;color:#fff;"
          onClick$={async () => { const r = await inc.submit({}); count.value = r.value.count ?? count.value }}
        >+</button>
      </div>
      <span style="font-size:0.75rem;opacity:0.35;">server-side counter</span>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Counter — Qwik City on Trapiche',
}
