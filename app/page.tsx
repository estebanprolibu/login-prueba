"use client"
export default function Home() {
  const openAppWithScheme = () => {
    const deepLink = `exp://virtualcapture`

    window.location.href = deepLink
  }
  return (
    <main>
      <h1>Login</h1>
      <a
        href={"exp://virtualcapture"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir a app
      </a>
    </main>
  )
}
