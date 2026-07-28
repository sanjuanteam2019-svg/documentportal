// Check if a user is logged in
const currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
    window.location.href = "index.html";
}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("currentUser");

        window.location.href = "index.html";

    });
}
