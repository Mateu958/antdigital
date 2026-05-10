export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Tela de Login ANT</h1>

      <input
        type="email"
        placeholder="Email"
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Senha"
        style={{ display: "block", marginBottom: 10 }}
      />

      <button>Entrar</button>
    </div>
  )
}
