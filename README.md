# Milk TeaND

Website promosi dan katalog digital untuk **Milk TeaND**, brand milk tea tercreamy se-Indonesia yang didirikan di Jakarta. Pengunjung dapat mengenal brand, melihat 20 varian menu beserta harga dan topping, memasukkan beberapa menu ke keranjang, lalu mengirim seluruh pesanan sekaligus melalui WhatsApp.

> **Satu Tegukan, Sejuta Kebahagiaan.**

## Fitur

- **Halaman brand**: hero, cerita brand, keunggulan, kontak, dan footer.
- **Katalog 20 produk**: foto, deskripsi, topping, bonus photocard, dan harga (dirender dari data di `js/script.js`).
- **Navigasi responsif**: menu hamburger pada layar kecil, tautan aktif saat scroll.
- **Keranjang pesanan**: tambah item, ubah jumlah (1–99 per menu), hapus item, kosongkan keranjang, serta subtotal dan total otomatis.
- **Formulir pemesanan**: nama, nomor WhatsApp, photocard (opsional), dan catatan, dengan validasi sebelum checkout.
- **Checkout via WhatsApp**: satu pesan berisi semua menu, jumlah, subtotal, total, dan data pelanggan melalui WhatsApp Click to Chat (`wa.me`).
- **Aksesibilitas dasar**: elemen semantik, label formulir, fokus keyboard terlihat, `aria-live` untuk status, dan dukungan `prefers-reduced-motion`.

## Tech Stack

| Lapisan | Teknologi |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, Grid/Flexbox) |
| Interaksi | JavaScript browser tanpa framework |
| Aset | Berkas lokal AVIF, JPG, JFIF di `Images/` |
| Backend / Database | Tidak ada |

Tidak ada dependency, bundler, maupun langkah build. Tidak ada font atau stylesheet eksternal.

## Struktur Proyek

```text
website/
├── index.html          # Konten dan struktur halaman
├── css/
│   └── style.css       # Token visual, layout, responsive, aksesibilitas
├── js/
│   └── script.js       # Katalog, keranjang, validasi, integrasi WhatsApp
└── Images/             # Logo dan foto produk
```

## Menjalankan Secara Lokal

1. Pastikan Git dan browser modern tersedia.
2. Clone repository:
   ```bash
   git clone <url-repository>
   cd <nama-folder>
   ```
3. Jalankan dengan server statis lokal (disarankan), misalnya ekstensi Live Server di editor atau:
   ```bash
   python -m http.server 8000
   ```
   lalu buka `http://localhost:8000`.
4. Untuk inspeksi cepat, `index.html` juga bisa dibuka langsung di browser.

## Alur Pemesanan

1. Pengguna menekan **Tambah** pada satu atau lebih menu di katalog.
2. Pengguna mengatur jumlah di keranjang dan memeriksa total.
3. Pengguna mengisi nama, nomor WhatsApp, photocard (opsional), dan catatan.
4. Setelah validasi, browser membuka WhatsApp / WhatsApp Web dengan ringkasan pesanan.
5. Pengguna meninjau pesan dan **menekan tombol kirim sendiri** di WhatsApp.
6. Toko mengonfirmasi pesanan secara manual.

Website tidak menyimpan pesanan dan tidak mengklaim pesanan diterima otomatis.

## Batasan yang Perlu Diketahui

- Keranjang disimpan di memori halaman dan **hilang saat halaman dimuat ulang**.
- Tidak ada pembayaran online, manajemen stok, akun pelanggan, atau panel admin.
- Menu 1–5 adalah produk asli; **menu 6–20 beserta harganya adalah usulan sementara** dan harus disetujui pemilik sebelum publikasi.
- Tingkat kemanisan belum berupa kontrol pilihan; pelanggan menuliskannya di kolom catatan.

## Panduan Mengubah Konten

- **Produk / harga**: ubah array produk di `js/script.js` (sumber data tunggal untuk kartu, subtotal, dan pesan checkout), lalu verifikasi total tiap varian.
- **Gambar**: simpan di `Images/`, gunakan path relatif dengan huruf besar/kecil yang sesuai, dan tulis teks alt yang bermakna.
- **Kontak, jam operasional, alamat, promo**: ubah di `index.html` dan pastikan nomor WhatsApp tujuan di `js/script.js` sama dengan yang tertulis di halaman.
- **Warna dan tema**: ubah token di `:root` pada `css/style.css`.

### Token warna utama

| Token | Nilai |
|---|---|
| `--primary` | `#70412f` |
| `--primary-dark` | `#48291f` |
| `--caramel` | `#c78b51` |
| `--cream` | `#fffaf1` |
| `--text` | `#3e302a` |

### Breakpoint responsif

`1050px`, `760px`, dan `480px`.

## Standar Kode

- HTML: elemen semantik, indentasi 4 spasi, label terhubung ke input lewat `for`/`id`, `loading="lazy"` untuk gambar di luar area awal.
- CSS: pertahankan token di `:root`, selector fokus terlihat, dan `prefers-reduced-motion`.
- JavaScript: mode strict, inisialisasi setelah `DOMContentLoaded`, validasi input sebelum membuka WhatsApp, dan URL-encode teks pesan.
- Jangan menyimpan data pelanggan di local/session storage atau memasukkan password/token/secret ke repository.

## Checklist Sebelum Rilis

**Konten dan aset**
- [ ] Semua gambar dan logo termuat tanpa 404.
- [ ] 20 produk memiliki detail dan harga benar; menu tambahan sudah dikonfirmasi pemilik.
- [ ] Nomor WhatsApp, alamat, email, jam operasional, promo, dan harga sudah dikonfirmasi.

**Fungsi**
- [ ] Navigasi anchor dan menu hamburger (buka, tutup lewat tautan, klik di luar, tombol Escape) berjalan.
- [ ] Tambah/kurang/hapus item, kosongkan keranjang, dan batas 99 per menu berjalan.
- [ ] Subtotal dan total benar untuk kombinasi beberapa menu.
- [ ] Nama minimal 3 karakter dan nomor WhatsApp tervalidasi.
- [ ] Reset data pelanggan tidak menghapus keranjang.
- [ ] Checkout membuka WhatsApp dengan seluruh item, jumlah, subtotal, total, dan data pelanggan.

**Tampilan dan aksesibilitas**
- [ ] Uji viewport 360 px, 390 px, 768 px, dan desktop.
- [ ] Uji navigasi keyboard, zoom 200%, kontras, dan reduced motion.
- [ ] Tidak ada error di console dan tidak ada aset gagal dimuat di network panel.

> Proyek ini belum memiliki test runner, linter, atau build script. Pemeriksaan di atas dilakukan manual.

## Deployment

Belum ada provider hosting yang ditetapkan. Untuk MVP, gunakan hosting static site seperti **GitHub Pages** (alternatif: Cloudflare Pages atau Netlify):

1. Pastikan seluruh checklist lulus.
2. Push ke branch yang akan dipublikasikan.
3. Atur provider agar menyajikan root proyek dengan `index.html` sebagai entry point.
4. Aktifkan HTTPS dan domain resmi bila tersedia.
5. Ulangi smoke test di URL publik: katalog, aset, tampilan responsif, dan tombol pemesanan.

## Dokumentasi Terkait

- `prd.md` — kebutuhan produk, target pengguna, dan metrik keberhasilan
- `arsitektur.md` — arsitektur sistem, alur data, dan risiko teknis
- `tech_stack.md` — teknologi dan rekomendasi hosting
- `ui_ux.md` — panduan visual, wireframe, dan aksesibilitas
- `instruction.md` — panduan pengembangan dan operasional

## Kontak

- WhatsApp / Telepon: 0857-3456-2353
- Email: sales@milkteand.com
- Jam operasional: setiap hari, 08.00–23.00 WIB
- Alamat: Jl. Pondok Indah No. 45, Komplek Teratai, Jakarta

> Data kontak di atas perlu dikonfirmasi pemilik sebelum publikasi.

## Lisensi

&copy; 2026 Milk TeaND. All rights reserved.
