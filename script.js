const header = document.querySelector("[data-elevate]");
const form = document.querySelector("#trial-form");
const formNote = document.querySelector("#form-note");

const setHeaderState = () => {
  header.classList.toggle("is-elevated", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  formNote.textContent = name
    ? `Thanks, ${name}. Trial request is ready for backend connection.`
    : "Trial request is ready for backend connection.";
});
