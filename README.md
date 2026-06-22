# Aná & Gabriel — Digital Event Invitation

A custom digital invitation built for a wedding/birthday celebration, designed to give guests an elegant, mobile-first experience instead of a static printed card.

## What it does

- Responsive, animated single-page invitation viewable on any device
- Custom styling and layout built from scratch (no template)
- Deployed and automatically updated via CI/CD on every push to `main`

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Hosting:** Firebase Hosting
- **CI/CD:** GitHub Actions — automatic build & deploy on push

## Why this project

Most "simple" invitation sites are static HTML thrown on a free host. This one is set up like a real production frontend project: component-based architecture, a proper build pipeline, and automated deployments — the same workflow you'd use for a client site, just applied to something personal.

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the project and deploys it to Firebase Hosting automatically — no manual deploy steps required.

---

Built with care by [Diego Bravo](https://github.com/dnbravo04) 🌿
