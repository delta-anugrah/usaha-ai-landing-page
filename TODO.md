# To-do besok

Urut dari yang paling penting. Centang kalau udah.

## Rilis

- [x] Review dan merge PR #1 ke `staging`.
- [x] Deploy ke DigitalOcean. Live di https://usaha-ai-landing-page-j3v7a.ondigitalocean.app
- [ ] Di Cloudflare DNS: hapus record `A` `usaha.ai` → `157.230.255.182` (server orang lain), lalu buat `CNAME` `@` dan `www` ke `usaha-ai-landing-page-j3v7a.ondigitalocean.app`, Proxy status **DNS only**.
  - Awas: jangan hapus record `MX` yang sudah ada, nanti email `support@usaha.ai` mati.
- [ ] Pastikan `support@usaha.ai` bisa terima email (kirim email tes).
- [ ] Setelah live: buka situsnya di HP, lalu share link-nya di WhatsApp atau LinkedIn untuk cek gambar preview.

## Bahan yang perlu disiapkan

- [ ] Screenshot produk: AutoGrade, AutoERP, Satellyte, Usaha Vision, Usaha GenAI. Ini yang paling bikin halaman terasa nyata.
- [ ] Produk mana yang pakai Claude, dan dipakai buat apa. Penting untuk aplikasi Claude for Startups.
- [ ] Satellyte pakai LLM atau tidak (misalnya buat nulis pesan outreach).
- [ ] Tahun berdiri dan kota.
- [ ] Opsional: nama founder atau tim, plus foto atau link LinkedIn.
- [ ] Opsional: contoh pemakaian nyata yang boleh disebut, misalnya jumlah pabrik yang memakai AutoGrade.
- [ ] Opsional: link publik produk, kalau ada.

## Dikerjakan Claude setelah bahan masuk

- [ ] Masukkan screenshot ke kartu produk atau ke bagian khusus.
- [ ] Update bagian Language AI dan diagram hero dengan produk yang pakai Claude.
- [ ] Isi tahun berdiri, kota, dan tim di bagian About.
- [ ] Cek ulang Lighthouse di URL live.

## Terakhir

- [ ] Submit aplikasi Claude for Startups dengan link `https://usaha.ai`.
