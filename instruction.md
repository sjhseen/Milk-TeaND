# Panduan Pengembangan dan Operasional — Milk TeaND

## 1. Tentang proyek

Milk TeaND adalah website katalog statis berbasis HTML, CSS, dan JavaScript tanpa framework, backend, database, atau proses build. Halaman utama adalah `index.html`; aset gaya dan interaksi berada di `css/style.css` dan `js/script.js`.

## 2. Persiapan lokal

1. Pastikan Git tersedia dan gunakan browser modern.
2. Clone repository ke komputer lokal.
3. Buka folder proyek di editor.
4. Jalankan situs menggunakan server statis lokal/editor (disarankan) atau buka `index.html` secara langsung untuk inspeksi awal.
5. Tidak ada langkah instalasi dependency atau perintah build yang ditemukan pada proyek saat ini.

## 3. Struktur file

```text
website/
├── index.html          # Konten dan struktur halaman
├── css/style.css       # Token visual, layout, responsive, dan accessibility styles
├── js/script.js        # Interaksi browser dan alur formulir
└── Images/             # Logo dan foto produk
```

## 4. Alur kerja perubahan

1. Tentukan dampak perubahan pada konten, gaya, dan interaksi.
2. Buat perubahan sekecil dan sekonsisten mungkin dengan pola yang telah ada.
3. Bila mengubah produk atau harga, perbarui kartu katalog dan opsi formulir; verifikasi total untuk setiap varian.
4. Bila mengubah gambar, simpan aset di `Images/`, gunakan path relatif yang sesuai huruf besar/kecil nama folder, dan tulis alt yang bermakna.
5. Periksa perubahan di desktop dan mobile serta uji alur dengan keyboard.
6. Jangan memasukkan password, token, secret, atau data pelanggan ke dalam HTML/JavaScript atau repository.
7. Buat commit dengan pesan singkat yang menjelaskan perubahan, setelah seluruh pemeriksaan lulus.

## 5. Standar kode

### HTML

- Gunakan elemen semantik (`header`, `nav`, `main`, `section`, `article`, `footer`) sesuai maknanya.
- Gunakan indentasi 4 spasi mengikuti file yang ada.
- Pertahankan label yang terhubung ke input melalui `for` dan `id`.
- Tulis teks alternatif gambar; gunakan `loading="lazy"` untuk gambar yang tidak berada di area awal halaman.
- Beri atribut ARIA hanya saat menambah konteks yang tidak sudah disediakan elemen HTML native.

### CSS

- Pertahankan token warna, radius, bayangan, dan transisi di `:root` bila sesuai.
- Kelompokkan aturan berdasarkan bagian halaman dan ikuti breakpoint yang sudah digunakan (`1050px`, `760px`, `480px`).
- Gunakan selector fokus terlihat dan pertahankan dukungan `prefers-reduced-motion`.
- Hindari menambahkan dependensi font atau stylesheet eksternal tanpa alasan dan persetujuan.

### JavaScript

- Gunakan JavaScript browser tanpa framework sesuai stack saat ini.
- Pertahankan mode strict dan pola inisialisasi setelah `DOMContentLoaded`.
- Validasi input sebelum membentuk pesan atau membuka integrasi eksternal.
- Tampilkan kegagalan secara jelas; jangan menyatakan sukses jika tindakan eksternal gagal.
- URL-encode teks ketika membentuk tautan WhatsApp.
- Pertahankan daftar produk sebagai sumber data tunggal untuk kartu, harga, subtotal, dan ringkasan keranjang.
- Jangan memasukkan data pelanggan ke local/session storage tanpa kebutuhan dan persetujuan yang jelas.
- Uji path sukses, input invalid, reset form, navigasi ke WhatsApp, dan kondisi tanpa JavaScript.
- Pastikan data katalog usulan dikonfirmasi sebelum harga/menu ditampilkan sebagai informasi resmi.

## 6. Pemeriksaan sebelum merge/rilis

### Pemeriksaan konten dan aset

- Semua gambar produk dan logo berhasil dimuat, tanpa 404.
- 20 produk memiliki detail dan harga yang benar; menu tambahan sudah dikonfirmasi pemilik.
- Nomor WhatsApp tujuan, alamat, email, jam operasional, promo, dan harga dikonfirmasi pemilik.

### Pemeriksaan fungsi

- Navigasi anchor mencapai bagian yang benar.
- Menu hamburger dapat dibuka, ditutup lewat tautan, klik di luar, dan tombol Escape.
- Tombol **Tambah** memasukkan produk yang sesuai ke keranjang.
- Tombol tambah/kurang, hapus item, kosongkan keranjang, dan batas maksimum 99 per produk berjalan benar.
- Subtotal per item dan total untuk kombinasi beberapa produk dihitung benar.
- Nama minimal tiga karakter dan nomor WhatsApp divalidasi dengan benar.
- Reset data pelanggan tidak menghapus keranjang; tombol kosongkan menghapus seluruh isi keranjang.
- Checkout dengan keranjang valid membuka WhatsApp/WhatsApp Web dengan seluruh item, jumlah, subtotal, total, dan data pelanggan.
- Pengguna mendapat instruksi untuk menekan tombol kirim di WhatsApp; website tidak mengklaim pesanan diterima otomatis.

### Pemeriksaan tampilan dan aksesibilitas

- Uji viewport 360 px, 390 px, 768 px, dan desktop.
- Uji navigasi keyboard, fokus terlihat, zoom 200%, pesan error/status, serta reduced motion.
- Tinjau kontras teks/kontrol dan teks alternatif gambar.
- Periksa console browser untuk error JavaScript dan network panel untuk aset yang gagal dimuat.

Tidak ada test runner, linter, atau build script yang ditemukan pada struktur proyek saat ini. Jangan melaporkan pemeriksaan otomatis sebagai lulus bila belum dikonfigurasi dan dijalankan.

## 7. Deployment statis

Belum ada provider atau pipeline deployment yang ditentukan dalam repository. Untuk MVP, gunakan hosting static site seperti GitHub Pages setelah pemilik repository menyetujui provider.

Langkah umum:

1. Pastikan semua pemeriksaan di bagian sebelumnya lulus.
2. Push perubahan ke branch yang akan dipublikasikan.
3. Konfigurasikan provider static hosting untuk menyajikan root proyek dengan `index.html` sebagai entry point.
4. Aktifkan HTTPS dan domain resmi bila tersedia.
5. Buka URL deployment dan ulangi smoke test katalog, aset, responsive layout, serta tombol pemesanan.
6. Pastikan tidak ada URL lokal, informasi uji, atau detail kontak yang belum disetujui.

Karena situs statis tidak memiliki layanan backend, tidak ada migrasi database atau secret server yang perlu dijalankan. Jika di masa mendatang ditambahkan backend/API, dokumentasikan proses environment, secret management, backup, monitoring, dan rollback sebelum rilis.

## 8. Operasional dan pemeliharaan

- Tinjau kembali harga, promo, dan kontak setiap kali ada perubahan bisnis.
- Uji tautan WhatsApp setelah perubahan nomor atau format pesan.
- Pantau URL publik dan lakukan pemeriksaan manual setelah deployment.
- Simpan source dan aset di version control; jangan mengganti atau menghapus aset tanpa memeriksa semua referensinya.
