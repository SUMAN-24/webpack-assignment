function navbar () {
    return `
    <h3 id="home" onclick="window.location.href='index.html'">
            Home
        </h3>
        <div id="options">
            <h3 onclick="window.location.href='jewellery.html'">
                Jewellery
            </h3>
            <h3 onclick="window.location.href='electronics.html'">
                Electronics
            </h3>
            <h3 onclick="window.location.href='login.html'">
                Login
            </h3>
            <h3 onclick="window.location.href='signup.html'">
                SignUp
            </h3>
        </div>
    `
}

export {navbar};