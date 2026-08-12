# Debt Free Dinner Club — Lead Generation Website

This is your website. It's a single landing page designed to explain what
Debt Free Dinner Club is, highlight the benefits, and collect contact
information from people who are interested ("leads"). It works great on
phones, tablets, and computers.

Everything here is **free** — there are no paid tools, subscriptions, or
hidden costs required to get this live.

---

## What's in this project

- `index.html` — the actual page (headline, About section, benefits, how it
  works, the sign-up form, and the thank-you message)
- `assets/styles.css` — all the colors, fonts, and layout
- `assets/script.js` — makes the form work (checks for mistakes, shows the
  thank-you message, and sends leads to you)

You don't need to understand code to use this. The two things you need to
do below just involve copying and pasting.

---

## Step 1: Connect the form so leads are emailed to you (5 minutes)

Right now, when someone fills out the form, it shows them a nice
"You're In!" thank-you message — but that submission doesn't go anywhere
yet. To actually receive leads in your inbox, you'll connect a free tool
called **Formspree**. It's free for normal use (no credit card needed) and
all it does is forward form submissions to your email.

1. Go to **formspree.io** and click **"Get Started"** to make a free
   account, using the email address you want leads sent to.
2. Once you're logged in, click **"+ New Form"**. Give it a name like
   "Debt Free Dinner Club Leads" and create it.
3. Formspree will show you a web address that looks like this:
   `https://formspree.io/f/abc1234`
   Copy that entire address.
4. In this project, open the file `assets/script.js`.
5. Near the top, you'll see this line:
   ```
   const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
6. Replace the text between the quotes with the address you copied from
   Formspree, so it looks something like:
   ```
   const FORM_ENDPOINT = "https://formspree.io/f/abc1234";
   ```
7. Save the file.

That's it. From now on, every time someone submits the form, you'll get an
email with their name, email, phone number, debt range, and goal.

**Tip:** The first time someone submits the form after you connect it,
Formspree will send you a confirmation email asking you to verify the
form. Just click the link in that email — after that, all future
submissions arrive normally.

---

## Step 2: Put the website online for free (10 minutes)

You can host this page for free using **GitHub Pages**, since your code
already lives on GitHub.

1. On GitHub, open this repository in your browser.
2. Click the **"Settings"** tab (near the top of the repository page).
3. In the left-hand menu, click **"Pages"**.
4. Under **"Build and deployment"**, set the **Source** to
   **"Deploy from a branch"**.
5. Under **Branch**, choose the branch this website was built on
   (`claude/debt-free-dinner-landing-qabpeo`, or `main` if you've merged it
   there) and select the folder **"/ (root)"**. Click **Save**.
6. Wait a minute or two, then refresh the page. GitHub will show you a
   web address like:
   `https://yourusername.github.io/debt-free-dinner-club/`
   That's your live website! You can share that link anywhere — social
   media, email, text messages, ads, etc.

**Note:** If you'd rather use a service like Netlify or Vercel instead of
GitHub Pages, that also works and is also free — just point it at this
repository. GitHub Pages is simplest since your code is already here.

---

## Step 3 (optional): Use your own domain name

If you own a domain name (like `debtfreedinnerclub.com`), both GitHub
Pages and Netlify/Vercel let you connect it for free — you just pay for
the domain itself through whatever registrar you bought it from (GoDaddy,
Namecheap, Google Domains, etc.). This step is optional; the free
`.github.io` address works fine to get started.

---

## Customizing the page (no coding required for text changes)

Open `index.html` in any text editor (even Notepad or TextEdit works, but
a free tool like VS Code makes it easier to read). You can safely change
any of the wording between the `<h1>`, `<h2>`, `<h3>`, and `<p>` tags —
just don't delete the tags themselves (the parts in angle brackets like
`<p>` and `</p>`).

Common things you might want to change:
- **Headline:** search for "Pull Up a Chair" near the top of the file.
- **About section wording:** search for "What Is Debt Free Dinner Club?"
- **Benefits:** search for "Why People Choose Us" — each benefit has an
  icon (emoji), a short title, and a sentence.
- **Colors:** in `assets/styles.css`, near the top, you'll see a section
  starting with `:root {`. The `--navy` and `--gold` values control the
  main colors used throughout the page.

## Where leads are stored as a backup

In addition to emailing you through Formspree, every submission is also
saved in the visitor's own web browser as a backup safety net. This isn't
something you need to manage — it just means no data is lost even if
there's ever a hiccup sending the email. Formspree (once connected) is
your main way of receiving and reviewing leads; it also has its own
dashboard at formspree.io where you can see all past submissions.

---

## Questions or something looks broken?

If the form doesn't seem to be sending you emails, double check:
- You completed **Step 1** above and saved `assets/script.js` with your
  real Formspree address (not the placeholder text).
- You clicked the confirmation link Formspree emailed you after your
  first test submission.
- You're testing on the live website (after Step 2), not just opening
  the `index.html` file directly on your computer.
