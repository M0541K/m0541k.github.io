const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function toggleMode(){
  document.body.classList.toggle("osai-mode");
  localStorage.setItem("osai-mode", document.body.classList.contains("osai-mode") ? "on" : "off");
}
if(localStorage.getItem("osai-mode") === "on") document.body.classList.add("osai-mode");

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-osai-mode]");
  if(btn) toggleMode();
});

async function copyText(id){
  const el = document.getElementById(id);
  if(!el) return;
  await navigator.clipboard.writeText(el.innerText);
  const old = el.dataset.label || "kopiert";
  el.dataset.label = "kopiert";
}

$$("[data-copy-target]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const target = btn.getAttribute("data-copy-target");
    const el = document.getElementById(target);
    if(el && navigator.clipboard){
      await navigator.clipboard.writeText(el.innerText);
      const old = btn.textContent;
      btn.textContent = "kopiert";
      setTimeout(()=> btn.textContent = old, 1200);
    }
  });
});
