# UI/UX — Milk TeaND

## 1. Tujuan pengalaman

Membantu pengunjung memahami brand Milk TeaND, membandingkan rasa dan harga dengan cepat, lalu melanjutkan pemesanan melalui WhatsApp. Pengalaman harus ramah, sederhana, responsif, dan dapat digunakan dengan keyboard maupun perangkat mobile.

## 2. Pengguna dan kebutuhan

- **Calon pelanggan:** ingin melihat menu, harga, topping, dan promo sebelum memutuskan.
- **Pengguna ponsel:** membutuhkan navigasi ringkas, gambar yang jelas, dan tombol yang mudah disentuh.
- **Pengguna keyboard atau teknologi bantu:** membutuhkan struktur heading, label formulir, fokus yang terlihat, dan pesan status yang diumumkan.

## 3. Panduan visual

### Kepribadian brand

Hangat, creamy, bersahabat, dan menggugah selera. Gunakan bahasa Indonesia yang santai dan informatif; hindari klaim produk yang tidak dapat diverifikasi.

### Token warna yang digunakan

| Token CSS | Nilai | Penggunaan |
|---|---|---|
| `--primary` | `#70412f` | Aksen utama dan tombol |
| `--primary-dark` | `#48291f` | Teks/aksen kontras |
| `--primary-light` | `#94634b` | Variasi warna brand |
| `--caramel` | `#c78b51` | Highlight dan fokus |
| `--caramel-light` | `#e7bd88` | Seleksi dan aksen lembut |
| `--cream` | `#fffaf1` | Latar utama |
| `--cream-dark` | `#f6ecdc` | Latar sekunder |
| `--text` | `#3e302a` | Teks utama |
| `--text-muted` | `#82736a` | Teks sekunder |
| `--border` | `#eadbca` | Garis dan batas komponen |

Gunakan warna teks yang cukup kontras terhadap latar. Verifikasi rasio kontras sebelum menambah kombinasi warna baru; jangan menyampaikan informasi hanya melalui warna.

### Tipografi dan bentuk

- Font saat ini: `"Segoe UI", Arial, sans-serif`.
- Hierarki: satu judul utama brand, heading bagian yang konsisten, lalu judul produk dan label kecil.
- Radius dan bayangan mengikuti token CSS yang ada; gunakan secukupnya agar tampilan tetap ringan.
- Foto produk harus memiliki crop konsisten dan tidak terdistorsi.

## 4. Struktur halaman dan wireframe teks

```text
[Header sticky: logo/brand | navigasi]
  Mobile: logo/brand | tombol menu

[Hero]
  Eyebrow
  Headline dan deskripsi singkat
  [Jelajahi Menu] [Kenali Kami]
  Info promo photocard

[Tentang Kami]
  Judul bagian
  Kartu cerita brand

[Katalog Produk]
  Judul dan pengantar
  Grid 20 kartu:
    foto | nama | deskripsi | topping | bonus photocard
    harga | [Tambah]

[Keunggulan]
  Judul dan ringkasan
  Grid kartu keunggulan

[Pemesanan]
  Judul dan petunjuk
  Formulir: nama, nomor WhatsApp, photocard opsional, catatan
  Keranjang: item | jumlah [- / +] | hapus | subtotal
  Total seluruh pesanan
  [Pesan via WhatsApp] [Reset Data Pelanggan]
  Pesan validasi/status

[Kontak]
  WhatsApp/telepon | email | jam | alamat

[Footer]
  Brand | hak cipta | kembali ke atas
```

## 5. User journey

1. **Temukan:** pengguna melihat janji brand dan tombol menuju menu.
2. **Pelajari:** pengguna membaca cerita, detail produk, harga, topping, dan promo.
3. **Pilih:** pengguna menekan **Tambah** pada satu atau lebih kartu produk.
4. **Atur keranjang:** pengguna menambah/mengurangi jumlah, menghapus item, dan meninjau total.
5. **Isi:** pengguna melengkapi kontak dan catatan opsional.
6. **Kirim:** setelah validasi, browser membuka WhatsApp atau WhatsApp Web dengan seluruh pesanan di dalam satu pesan.
7. **Konfirmasi:** pengguna mengirim pesan dan melanjutkan komunikasi dengan toko.

Catatan: 15 menu tambahan beserta harganya merupakan data usulan dan perlu konfirmasi pemilik sebelum dipublikasikan. Isi keranjang saat ini tidak disimpan setelah halaman dimuat ulang.

## 6. Komponen dan state

- **Header/navigasi:** normal, scrolled, menu terbuka, tautan aktif.
- **Kartu produk:** normal, hover/fokus, tombol tambah ke keranjang.
- **Keranjang:** kosong, berisi item, jumlah item, subtotal, total, dan tombol hapus/kosongkan.
- **Input formulir:** kosong, terisi, fokus, invalid dengan pesan kesalahan.
- **Total pesanan:** berubah ketika item atau jumlah berubah.
- **Checkout:** nonaktif ketika keranjang kosong; validasi data pelanggan sebelum membuka tautan WhatsApp.
- **Status pengiriman:** menjelaskan bahwa pengguna perlu meninjau dan menekan tombol kirim di WhatsApp; jangan mengklaim pesanan telah diterima toko.
- **Kontak:** tampil sebagai informasi yang dapat dibaca; pastikan nomor, email, alamat, dan jam operasional benar.

## 7. Responsivitas

Breakpoint yang sudah tampak di stylesheet:

- Di atas 1050 px: layout desktop lebar.
- Sampai 1050 px: beberapa layout berubah, termasuk katalog dua kolom.
- Sampai 760 px: menu hamburger dan layout mobile.
- Sampai 480 px: kartu produk dan formulir satu kolom.

Pastikan tidak ada overflow horizontal, teks tidak tertutup header sticky, dan tombol tetap mudah digunakan pada viewport sempit. Uji minimal pada lebar 360 px, 390 px, 768 px, dan desktop.

## 8. Aksesibilitas

### Pola yang sudah digunakan

- Dokumen memiliki `lang="id"`, viewport, elemen semantik, label formulir, dan teks alternatif gambar.
- Tombol menu mengubah `aria-expanded`, memiliki `aria-controls`, dan dapat ditutup dengan Escape.
- Fokus keyboard terlihat dengan `:focus-visible`.
- Pesan status menggunakan `role="status"` dan `aria-live`; error menggunakan `role="alert"` dan `aria-invalid`.
- Skrip menghormati preferensi `prefers-reduced-motion`.
- Gambar katalog memakai lazy loading.

### Kriteria implementasi dan pengujian

- Semua fungsi utama dapat dicapai dan dijalankan dengan keyboard saja.
- Urutan tab mengikuti urutan baca; fokus tidak tersembunyi di balik header sticky.
- Setiap gambar produk memiliki alt yang mendeskripsikan produk, bukan mengulang informasi dekoratif.
- Error menjelaskan cara memperbaiki input dan terhubung secara jelas dengan kontrolnya.
- Jangan mengandalkan animasi untuk menyampaikan informasi atau membuat konten penting tidak tersedia tanpa JavaScript.
- Audit kontras teks dan kontrol, zoom 200%, label form, serta perilaku screen reader sebelum rilis.

## 9. Konten dan konsistensi

- Harga produk harus sama antara katalog, opsi formulir, dan total.
- Nama, topping, photocard, promo, nomor WhatsApp, email, alamat, serta jam operasional perlu persetujuan pemilik.
- Tingkat kemanisan saat ini hanya disebut sebagai keunggulan dan dapat ditulis di catatan; belum ada kontrol pilihan tingkat manis pada formulir.
- Hindari membuat klaim bonus selalu tersedia bila ketentuan stok atau promo belum dikonfirmasi.
