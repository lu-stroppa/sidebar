document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

const items = document.querySelectorAll(".side-item");

items.forEach(item => {
    item.addEventListener("click", function() {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});