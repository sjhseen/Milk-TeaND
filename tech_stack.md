# Tech Stack — Milk TeaND

## 1. Ringkasan

Website Milk TeaND adalah aplikasi web statis yang berjalan langsung di browser. Stack yang ditemukan pada proyek saat ini sengaja sederhana dan tidak memerlukan server aplikasi untuk menampilkan katalog.

## 2. Teknologi yang digunakan

| Lapisan | Teknologi saat ini | Alasan/penggunaan |
|---|---|---|
| Markup | HTML5 | Struktur semantik halaman, navigasi, katalog, formulir, dan informasi kontak |
| Styling | CSS3 | Layout responsif, desain visual, warna melalui CSS custom properties, animasi, dan aturan reduced motion |
| Interaktivitas | JavaScript browser tanpa framework | Menu mobile, katalog 20 item, keranjang sementara, validasi formulir, perhitungan total, dan integrasi WhatsApp Click to Chat |
| Aset | Berkas lokal JPG, JFIF, dan AVIF | Logo dan foto produk disimpan di folder `Images/` |
| Penyimpanan data | Tidak ada penyimpanan persisten | Data katalog berada di array JavaScript; keranjang hanya di memori halaman; pesanan tidak disimpan di server |
| Database | Tidak ada | Tidak dibutuhkan untuk cakupan situs statis MVP |
| Backend/API | Tidak ada | Tidak ada layanan aplikasi atau API milik proyek saat ini |

## 3. Struktur sumber

```text
website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── Images/
    ├── logo.avif
    ├── original.jpg
    ├── brownsugar.jfif
    ├── chocolate.jpg
    ├── matcha.jpg
    └── mango.jpg
```

## 4. Rekomendasi hosting dan delivery

### Kondisi saat ini

Belum ditemukan konfigurasi hosting, pipeline CI/CD, domain, atau provider cloud di dalam proyek. Karena itu, tidak ada provider yang dapat diklaim telah digunakan.

### Rekomendasi MVP

- **Jenis hosting:** hosting static site.
- **Pilihan yang disarankan:** GitHub Pages untuk publikasi sederhana dari repository GitHub; alternatif yang setara untuk situs statis adalah Cloudflare Pages atau Netlify.
- **Build:** tidak diperlukan selama proyek tetap menggunakan HTML, CSS, dan JavaScript tanpa bundler.
- **Output publikasi:** root proyek, dengan `index.html` sebagai halaman masuk.
- **Domain/HTTPS:** gunakan domain milik brand bila tersedia dan pastikan HTTPS aktif.

Pemilihan provider perlu disesuaikan dengan kepemilikan repository, domain, dan kebutuhan operasional. Jangan mengasumsikan hosting sudah aktif sebelum konfigurasi dan URL publik diverifikasi.

## 5. Integrasi eksternal

- **WhatsApp Click to Chat:** checkout menggunakan tautan `https://wa.me/` dengan nomor bisnis dan satu ringkasan keranjang yang di-URL-encode. Tautan dapat membuka aplikasi WhatsApp atau WhatsApp Web sesuai perangkat; pelanggan tetap harus menekan tombol kirim. Tidak ada WhatsApp API atau webhook.
- **Font eksternal:** tidak ada dependensi font eksternal yang terlihat; CSS menggunakan `"Segoe UI", Arial, sans-serif`.
- **Analitik, pembayaran, peta, CRM:** belum ditemukan dan tidak termasuk stack saat ini.

## 6. Keputusan arsitektur teknologi

- Pertahankan native HTML/CSS/JavaScript untuk MVP agar tidak menambah kompleksitas build dan dependency.
- Data menu dan isi keranjang diproses di browser; keranjang tidak persisten dan pesanan tidak tersimpan di server.
- Hindari menambahkan framework atau database sebelum kebutuhan produk membenarkannya.
- Jika kelak diperlukan pemrosesan pesanan otomatis, notifikasi, stok, atau admin, evaluasi backend dan model data secara terpisah; jangan memasukkan kredensial atau secret ke JavaScript yang dikirim ke browser.
- Pertahankan harga dan informasi kontak sebagai konten yang mudah diperiksa; pertimbangkan sumber data tunggal bila daftar produk bertambah atau duplikasi mulai menimbulkan kesalahan.

## 7. Persyaratan browser dan kualitas

- Gunakan browser modern dengan dukungan JavaScript, CSS Grid/Flexbox, `IntersectionObserver`, dan `matchMedia`.
- Sediakan perilaku konten dasar yang tetap dapat dibaca tanpa animasi; untuk pengiriman pesanan, JavaScript memang diperlukan.
- Optimalkan ukuran gambar dan gunakan teks alternatif yang bermakna.
- Uji pada desktop dan viewport mobile, termasuk penggunaan keyboard serta preferensi `prefers-reduced-motion`.
