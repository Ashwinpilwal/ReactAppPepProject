import './login.css';

function Login() {
    return (
        <section className="page-card">
            <h1>Welcome Back</h1>
            <p>Log in to continue exploring project-based courses and summer skills content.</p>

            <form>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter your password" />
                </div>

                <div className="form-action">
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </section>
    )
}

export default Login;