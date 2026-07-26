import './signup.css';

function Signup() {
    return (
        <section className="page-card">
            <h1>Create your account</h1>
            <p>Join now and get instant access to summer courses, new challenges, and guided practice.</p>

            <form>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your full name" />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Create a password" />
                </div>

                <div className="form-action">
                    <button type="submit">Create account</button>
                </div>
            </form>
        </section>
    )
}

export default Signup;