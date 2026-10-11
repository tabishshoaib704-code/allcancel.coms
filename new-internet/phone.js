// Change the number here and on index.html, then it updates across every page.
const PHONE_DISPLAY = "(888) 000-0000";
const PHONE_TEL = "+18880000000";
const COMPANY = "New Internet";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-phone").forEach(a => {
    a.href = "tel:" + PHONE_TEL;
    a.textContent = a.textContent.replace("(888) 000-0000", PHONE_DISPLAY);
  });
  document.querySelectorAll(".js-phone-text").forEach(el => {
    el.textContent = PHONE_DISPLAY;
  });
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
});
