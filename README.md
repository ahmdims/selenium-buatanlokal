# selenium-buatanlokal

Proyek sederhana Selenium WebDriver (JavaScript/Node.js) untuk mengakses dan menavigasi halaman utama
[buatanlokal.id](https://buatanlokal.id/). Dibuat untuk Tugas Kelompok 3 (Week 9) mata kuliah
Information System Security, BINUS University Online.

## Yang dilakukan skrip
1. Membuka halaman utama dan membaca URL serta judul halaman.
2. Membaca tautan menu navigasi utama.
3. Mengklik menu **Etalase**, lalu menguji `back`, `forward`, dan `refresh`.
4. Menyimpan tangkapan layar (`ss_01_beranda.png`, `ss_02_etalase.png`).

## Prasyarat
- Node.js 18 atau lebih baru (diuji pada 22.23.2)
- Microsoft Edge (diuji pada versi 155). Driver diunduh otomatis oleh Selenium Manager, tidak perlu unduh manual.

## Menjalankan
```bash
npm install
npm start
```

Contoh keluaran ada di [docs/output.txt](docs/output.txt) dan tangkapan layar di folder [docs](docs).

## Catatan etika
Skrip hanya membuka halaman publik, tanpa login, tanpa mengisi formulir, dan tanpa melewati reCAPTCHA.
Jumlah permintaan sengaja kecil. Tangkapan layar halaman Etalase dapat memuat nomor telepon dan email
pelaku usaha, sehingga berkas `ss_*.png` hasil eksekusi diabaikan oleh git. Gunakan hanya untuk pembelajaran.
