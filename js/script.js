window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".progress div");
    bars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-skill") + "%";
    });
});

function showContact() {
    alert("📧 Email: adithya@email.com\n📱 Phone: 9XXXXXXXXX");
}
function showProjects() {
    alert("Here are some of my projects:\n1. Portfolio Website\n2. To-Do List App\n3. Weather App");
}
function showSkills() {
    alert("My skills include:\n- HTML/CSS\n- JavaScript\n- React\n- Node.js");
}
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});
const skillBars = document.querySelectorAll(".progress div");

function animateSkills() {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.skill + "%";
        }
    });
}

window.addEventListener("scroll", animateSkills);
function showContact() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark"));
}

window.onload = () => {
    if (localStorage.getItem("theme") === "true") {
        document.body.classList.add("dark");
    }
};

