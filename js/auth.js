if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

<li>
    <a href="#" onclick="logout(); return false;"
       style="color:white;text-decoration:none;">
       🚪 Logout
    </a>
</li>

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");

        window.location.href = "index.html";

    });

}
