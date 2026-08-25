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

## Step 2: Put the website online for free (10 minutes)

You can host this page for free using **GitHub Pages**, since your code
already lives on GitHub.

1. On GitHub, open this repository in your browser.
2. Click the **"Settings"** tab (near the top of the repository page).
3. In the left-hand menu, click **"Pages"**.
4. Under **"Build and deployment"**, set the **Source** to
   **"Deploy from a branch"**.
5. Under **Branch**, choose the branch this website was built on
   (`claude/debt-free-dinner-directory-o5wz88`, or `main` if you've merged
   it there) and select the folder **"/ (root)"**. Click **Save**.
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
