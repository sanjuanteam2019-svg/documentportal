// Redirect to login if not authenticated
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");

        window.location.href = "index.html";

    });
}
