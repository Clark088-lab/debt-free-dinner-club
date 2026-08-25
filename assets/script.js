/* ============================================
   Debt Free Dinner Club — Lead Form Logic
   ============================================

   HOW LEADS GET TO YOU
   ---------------------
   This form sends submissions to Formspree, a free service that emails
   form submissions straight to your inbox (no server or database needed,
   and no cost for normal use). Before this form works, you must:

     1. Create a free account at https://formspree.io
     2. Create a new form and copy the endpoint URL it gives you
        (it looks like: https://formspree.io/f/abc1234)
     3. Paste that URL below, replacing FORM_ENDPOINT's value.

   Until you do that, submissions are still saved in the visitor's
   browser (localStorage) and the thank-you message still appears, but
   you will NOT receive an email. See the README for full instructions.
*/

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // <-- replace YOUR_FORM_ID

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle (present on every page's header)
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("leadForm");
  if (!form) return; // Lead form only lives on join.html

  const thankYou = document.getElementById("thankYou");
  const thankYouName = document.getElementById("thankYouName");
  const goalSelect = document.getElementById("financialGoal");
  const otherGoalRow = document.getElementById("otherGoalRow");
  const otherGoalInput = document.getElementById("financialGoalOther");

  // Show/hide the "tell us more" field when "Other" is selected
  goalSelect.addEventListener("change", () => {
    const isOther = goalSelect.value === "Other";
    otherGoalRow.hidden = !isOther;
    otherGoalInput.required = isOther;
    if (!isOther) otherGoalInput.value = "";
  });

  const validators = {
    firstName: (value) => (value.trim().length >= 2 ? "" : "Please enter your first name."),
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email address.",
    phone: (value) =>
      value.replace(/\D/g, "").length >= 10 ? "" : "Please enter a valid 10-digit phone number.",
    debtAmount: (value) => (value ? "" : "Please select an approximate debt amount."),
    financialGoal: (value) => (value ? "" : "Please select your biggest financial goal."),
  };

  function showError(fieldName, message) {
    const input = form.elements[fieldName];
    const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
    if (input) input.classList.toggle("invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message;
  }

  function validateForm(data) {
    let isValid = true;
    for (const [field, validate] of Object.entries(validators)) {
      const message = validate(data[field] || "");
      if (message) isValid = false;
      showError(field, message);
    }
    return isValid;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!validateForm(data)) {
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const submitBtn = form.querySelector(".btn-submit");
    const submitBtnText = submitBtn.querySelector(".btn-text");
    submitBtn.disabled = true;
    submitBtnText.textContent = "Sending...";

    // Keep a local backup of every lead in the browser, just in case.
    saveLeadLocally(data);

    try {
      if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
        console.warn(
          "Debt Free Dinner Club: FORM_ENDPOINT is still a placeholder in assets/script.js. " +
            "Leads will NOT be emailed to you until you connect a free Formspree form. See README.md."
        );
      } else {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
      }
    } catch (err) {
      console.error("Debt Free Dinner Club: could not send the lead form.", err);
    } finally {
      showThankYou(data.firstName);
      form.reset();
      otherGoalRow.hidden = true;
      submitBtn.disabled = false;
      submitBtnText.textContent = "Get Started";
    }
  });

  function showThankYou(firstName) {
    thankYouName.textContent = firstName || "friend";
    form.hidden = true;
    thankYou.hidden = false;
    thankYou.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function saveLeadLocally(data) {
    try {
      const key = "dfdc_leads";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      // localStorage may be unavailable (e.g. private browsing) — safe to ignore.
    }
  }
});
