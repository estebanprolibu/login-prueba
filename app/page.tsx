"use client"
export default function Home() {
  return (
    <main>
      <h1>Login</h1>

      <a href="virtualcapture://login?token=YOUR_JWT_TOKEN" target="_blank">
        Abrir en la aplicación
      </a>
    </main>
  )
}
