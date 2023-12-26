const sidebarCloseBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
})

sidebarCloseBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
})