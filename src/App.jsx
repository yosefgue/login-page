import './App.css'

function App() {
  return (
    <>
      <div class="parent-container">
        <h1>Sign In</h1>
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
        <button>Sign in</button>
        <button>Sign in with google</button>
        <p>Don't have an account? <a>Sign up</a></p>
      </div>
    </>
  )
}

export default App
