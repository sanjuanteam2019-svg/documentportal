async function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("data/users.json");
        const users = await response.json();

        const user = users.find(u =>
            u.username === username &&
            u.password === password &&
            u.active === true
        );

        if (!user) {

            alert("Invalid username or password.");
            return;

        }

        // Save logged-in user
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Go to dashboard
        window.location.href = "dashboard.html";

    } catch (err) {

        console.error(err);

        alert("Unable to load users.");

    }

}
