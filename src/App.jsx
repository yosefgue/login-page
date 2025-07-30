import './App.css'

function App() {
  return (
    <>
      <div class="parent-container">
        <h1><img src="/src/assets/log-in.png" alt="login"/>Sign In</h1>
        <form class="form">
          <div class="block">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" />
          </div>
          <div class="block">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </div>
        </form>
        <div class="extra">
          <span class="remember-me">
            <input type="checkbox" id="checkbox"/>
            <label htmlFor="checkbox">Remember me</label>
          </span>
          <span>
            <a>Forgot password?</a>
          </span>
        </div>
        <button id="sign-in">Sign in</button>
        <button id="google"><img src="/src/assets/icons8-google.svg" alt="google" />Sign in with google</button>
        <p class="sign-up">Don't have an account? <a>Sign up</a></p>
      </div>
    </>
  )
}

export default App
