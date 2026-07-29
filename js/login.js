// =========================
// Demo Users
// =========================

const users = [
    {
        username: "admin",
        password: "admin123",
        fullname: "Administrator",
        role: "Administrator"
    },
    {
        username: "john",
        password: "12345",
        fullname: "John Paul",
        role: "Document Controller"
    }
];

// =========================
// Login
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    <form id="loginForm">

    <input
        type="text"
        id="username"
        placeholder="Username"
        required>

    <input
        type="password"
        id="password"
        placeholder="Password"
        required>

    <button type="submit">
        LOGIN
    </button>

</form>

}
