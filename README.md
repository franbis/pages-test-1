This is a repository to test **GitHub Actions** and **GitHub Pages**.

I own a domain name for each web app I run on my servers. Some web apps, tho, are not worth adding the cost of a domain name to the yearly spending (which is already a lot).

**GitHub Pages** sounds like a decent way to showcase demos, especially for static web apps.

Most of my web apps use **Vite**+**React**, so this test aims at having a web app with a specific tech stack run under a **GitHub**'s domain name.

This project is currently running, here's the [DEMO](https://franbis.github.io/pages-test-1/).

This repository has two branches:
- `main` contains the web app source
- `page/main` merges with `main` if it has important changes.
<br>
Whenever it's pushed, **GitHub Actions** builds the web app and serves it. This way, `main` doesn't contain anything **GitHub**-related