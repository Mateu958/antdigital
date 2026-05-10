import { useState } from "react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB-TYhBxvGlwYvlxl194udnTinMX4LGgE",
  authDomain: "studio-8362245741-7bdea.firebaseapp.com",
  projectId: "studio-8362245741-7bdea",
  storageBucket: "studio-8362245741-7bdea.firebasestorage.app",
  messagingSenderId: "257711236964",
  appId: "1:257711236964:web:09271b32da288953c37c71"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function Home() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function entrar() {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      )

      alert("Login real realizado com sucesso")

    } catch (erro) {

      alert("Email ou senha inválidos")

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
