# WellnessHub 🌿

**Website URL:** [https://wellnesshub.wiki](https://wellnesshub.wiki)  
**Type:** Affiliate Website  
**Platform:** Static (HTML/CSS/JS)  
**Editor:** Visual Studio Code  
**Affiliates:** ClickBank  

---

## 📌 Project Overview

**WellnessHub** is a modern, mobile-friendly affiliate website built to promote ClickBank wellness products. It includes an engaging landing page and a dynamic shop page to drive affiliate sales and collect user emails for newsletters.

---

## 📄 Pages & Structure

### ✅ Home Page (Landing)
- Welcome headline and subtext
- Modern hero design
- Email subscription form (`/subscribe` route via Node.js backend)
- Call-to-action button linking to the shop

### ✅ Shop Page
- Grid display of affiliate wellness products
- Product images, brief descriptions, and "Learn More" links
- Clean, responsive design with light hover effects

### ✅ Policy Pages
- [Affiliate Disclosure](affiliatedisclosure.html)
- [Privacy Policy](policy.html)
- [Terms of Service](termsofservice.html)

---

## 🎨 Design Guidelines

- **Primary Colors:** Shades of blue (e.g., `#0a4cff`) and soft background gradients
- **Fonts:** Web-safe, beautiful sans-serif fonts (e.g., Segoe UI)
- **Style:** Clean layout, mobile responsive, SEO optimized
- **Visuals:** Product icons and emojis for friendly presentation
- **No dropdown menus or animations required**

---

## ⚙️ Functionality

- Email capture form posts to a local Node.js backend at `/subscribe`
- Emails are saved to both `subscribers.txt` and `subscribers.json`
- Admin email alert on each new subscriber (via Nodemailer)
- Newsletter campaign script reads from `subscribers.txt` and sends via Gmail SMTP

---

## 🛠️ Development

### Requirements:
- Node.js + Express
- Nodemailer for email notifications
- FPDF (Python) for generating PDFs if needed
- Visual Studio Code or similar text editor

### Directory Structure:
