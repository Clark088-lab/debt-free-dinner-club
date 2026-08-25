# Debt Free Dinner Club — Directory & Lead Generation Website

This is your website: a small, multi-page directory site built around
helping women get out of debt. It explains what Debt Free Dinner Club is,
walks visitors through a real step-by-step debt payoff guide, points them
to a curated directory of videos and resources, and collects contact
information from people who are interested ("leads"). It works great on
phones, tablets, and computers.

Everything here is **free** — there are no paid tools, subscriptions, or
hidden costs required to get this live.

---

## What's in this project

- `index.html` — the homepage (headline, About teaser, benefits, how it
  works, and the "what debt-free feels like" section)
- `about.html` — the club's story, who it's for, and its values
- `guide.html` — the free, step-by-step "How to Get Out of Debt" guide,
  plus an FAQ
- `resources.html` — "The Directory": six hand-picked YouTube videos, free
  calculators, nonprofit credit counseling, books, and communities
- `join.html` — the sign-up page with the lead form and the thank-you
  message
- `assets/styles.css` — all the colors, fonts, and layout (shared by every
  page)
- `assets/script.js` — makes the site work: the mobile menu, the footer
  year, and the lead form on `join.html` (checks for mistakes, shows the
  thank-you message, and sends leads to you)
- `vercel.json` — tells Vercel this is a plain static site with clean URLs
  (e.g. `/about` instead of `/about.html`), so deployment needs zero setup

All five pages share the same header navigation and footer, so visitors can
move between them easily, and every page links back to `join.html` when
someone's ready to sign up.

You don't need to understand code to use this. The two things you need to
do below just involve copying and pasting.

---

## Step 1: Connect the form so leads are emailed to you (5 minutes)

The sign-up form lives on `join.html` (every "Join the Club" button on the
site links there). Right now, when someone fills it out, it shows them a
nice "You're In!" thank-you message — but that submission doesn't go
anywhere yet. To actually receive leads in your inbox, you'll connect a
free tool called **Formspree**. It's free for normal use (no credit card
needed) and all it does is forward form submissions to your email.

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

## Step 2: Put the website online for free with Vercel (5 minutes)

This project is set up to deploy on **Vercel** — a free hosting service
that works great with plain HTML sites like this one. There's a
`vercel.json` file already included, so Vercel needs zero configuration.

1. Go to **vercel.com** and click **"Sign Up"**. Choose **"Continue with
   GitHub"** and log in with the GitHub account that owns this repository.
2. Once you're in your Vercel dashboard, click **"Add New..." → "Project"**.
3. Find and **"Import"** this repository (`debt-free-dinner-club`) from
   the list. If you don't see it, click "Adjust GitHub App Permissions"
   and grant Vercel access to it.
4. Vercel will detect it as a static site automatically — you don't need
   to change the Framework Preset, Build Command, or Output Directory.
   Just click **"Deploy"**.
5. In about 30–60 seconds, Vercel will give you a live web address like:
   `https://debt-free-dinner-club.vercel.app`
   That's your live website! You can share that link anywhere — social
   media, email, text messages, ads, etc.
6. From now on, every time you push changes to the `main` branch on
   GitHub, Vercel automatically redeploys the live site for you — no
   extra steps needed.

**Note:** GitHub Pages and Netlify also work fine as free alternatives if
you'd rather use one of those instead — just point either one at this
repository.

---

## Step 3 (optional): Use your own domain name

If you own a domain name (like `debtfreedinnerclub.com`), both GitHub
Pages and Netlify/Vercel let you connect it for free — you just pay for
the domain itself through whatever registrar you bought it from (GoDaddy,
Namecheap, Google Domains, etc.). This step is optional; the free
`.github.io` address works fine to get started.

---

## Customizing the pages (no coding required for text changes)

Open any of the five `.html` files in a text editor (even Notepad or
TextEdit works, but a free tool like VS Code makes it easier to read). You
can safely change any of the wording between the `<h1>`, `<h2>`, `<h3>`,
and `<p>` tags — just don't delete the tags themselves (the parts in angle
brackets like `<p>` and `</p>`).

Common things you might want to change:
- **Homepage headline:** search `index.html` for "Pull Up a Chair."
- **About section wording:** search `index.html` for "What Is Debt Free
  Dinner Club?", or edit the full story on `about.html`.
- **Benefits:** search `index.html` for "Why Women Choose Us" — each
  benefit has an icon (emoji), a short title, and a sentence.
- **The debt payoff guide:** edit the numbered steps and FAQ directly in
  `guide.html`.
- **The video/resource directory:** edit `resources.html` — each video is
  a `.video-card` block with a title and description under its embed; each
  tool, book, or community is a `.resource-card` block.
- **Colors:** in `assets/styles.css`, near the top, you'll see a section
  starting with `:root {`. The `--navy` and `--gold` values control the
  main colors used throughout every page.

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
