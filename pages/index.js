import { useState } from "react"

export default function Home() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function entrar() {

    if(email === "admin@gmail.com" && senha === "123456") {
      alert("Login realizado com sucesso")
    } else {
      alert("Email ou senha incorretos")
    }

  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Tela de Login ANT</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          marginBottom: 10,
          padding: 10,
          width: 250
        }}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={{
          display: "block",
          marginBottom: 10,
          padding: 10,
          width: 250
        }}
      />

      <button
        onClick={entrar}
        style={{
          padding: 10,
          background: "green",
          color: "white",
          border: "none"
        }}
      >
        Entrar
      </button>

    </div>
  )
}
