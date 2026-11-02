# PRD — Milk TeaND

**Status:** Draft berdasarkan implementasi website saat ini  
**Pemilik produk:** Milk TeaND  
**Pasar awal:** Jakarta, Indonesia  
**Versi:** 1.0

## 1. Ringkasan produk

Milk TeaND adalah website promosi dan katalog digital untuk brand milk tea yang didirikan di Jakarta. Website memperkenalkan cerita brand, menampilkan 20 varian produk beserta harga dan topping, menjelaskan keunggulan, serta memungkinkan pelanggan menggabungkan beberapa menu dalam satu pesanan WhatsApp.

Website saat ini merupakan situs statis sisi klien. Website belum memiliki backend, database, pembayaran online, pengelolaan stok, maupun panel admin.

## 2. Visi

Menjadi kanal digital Milk TeaND yang menarik, mudah digunakan, dan tepercaya untuk membantu calon pelanggan mengenal menu, memilih produk, lalu menghubungi toko untuk melakukan pemesanan.

## 3. Masalah yang ingin dipecahkan

- Informasi menu, harga, topping, dan bonus photocard perlu disajikan dalam satu tempat yang mudah dibuka.
- Calon pelanggan membutuhkan gambaran brand dan alasan memilih produknya sebelum menghubungi toko.
- Pemesanan melalui percakapan perlu dimulai dengan informasi produk dan jumlah yang lebih terstruktur.
- Pengalaman katalog harus tetap nyaman pada ponsel, karena pelanggan dapat membuka tautan dari perangkat seluler.

## 4. Target pengguna

### Pengguna utama

- Calon pelanggan milk tea di Jakarta yang ingin melihat menu dan harga sebelum memesan.
- Pelanggan yang menggunakan ponsel dan lebih nyaman memesan lewat WhatsApp.
- Penggemar photocard yang tertarik pada promo kolaborasi yang tercantum di katalog.

### Kebutuhan pengguna

- Memahami identitas dan keunggulan Milk TeaND dengan cepat.
- Membandingkan rasa, topping, dan harga.
- Mengisi detail pesanan dengan sederhana.
- Menghubungi toko tanpa perlu mencari nomor kontak secara terpisah.

## 5. Tujuan dan bukan tujuan

### Tujuan MVP

1. Menyediakan informasi brand, katalog 20 produk, harga, topping, promo, kontak, dan jam operasional.
2. Menyediakan navigasi yang jelas pada desktop dan ponsel.
3. Memungkinkan pengguna menambah beberapa menu, mengubah jumlah, dan menghapus item di keranjang.
4. Menghitung subtotal dan total pesanan di browser.
5. Memvalidasi data pelanggan dan mengirim ringkasan seluruh keranjang ke WhatsApp melalui Click to Chat.

### Bukan tujuan MVP

- Pembayaran online atau checkout otomatis.
- Akun pelanggan, keranjang persisten, atau riwayat pesanan.
- Pengelolaan menu, harga, stok, dan promo melalui dashboard.
- Perhitungan ongkos kirim atau pelacakan pesanan.
- Penyimpanan data pesanan pada server.

## 6. Fitur utama MVP

| Fitur | Perilaku yang diharapkan | Status berdasarkan proyek |
|---|---|---|
| Halaman brand | Hero, cerita, keunggulan, kontak, dan footer | Tersedia di `index.html` |
| Katalog produk | 20 varian dengan foto, deskripsi, topping, bonus photocard, dan harga | Dirender dari data produk di `js/script.js`; 15 menu tambahan adalah usulan dan harga sementara |
| Navigasi responsif | Tautan bagian halaman dan menu hamburger pada layar kecil | Diimplementasikan dengan HTML, CSS, dan JavaScript |
| Keranjang | Tambah item dari katalog, tambah/kurangi jumlah (maksimum 99 per menu), hapus item, kosongkan keranjang | Disimpan sementara di memori halaman; tidak bertahan saat halaman dimuat ulang |
| Estimasi total | Subtotal tiap menu dan total seluruh keranjang | Dihitung oleh JavaScript di browser |
| WhatsApp | Satu pesan berisi semua menu, jumlah, subtotal, total, dan data pelanggan | Dibuka melalui `wa.me`; pengguna tetap menekan tombol kirim di WhatsApp |
| Formulir pemesanan | Nama, nomor WhatsApp, photocard opsional, dan catatan | Divalidasi sebelum checkout |
| Aksesibilitas dasar | Label formulir, teks alternatif gambar, fokus keyboard, status/error yang diumumkan | Sebagian sudah tersedia; tetap perlu pengujian aksesibilitas |

### Catatan katalog

Menu 1–5 mempertahankan produk dan harga yang sudah ada. Menu 6–20 serta harganya merupakan konten usulan yang ditambahkan agar katalog berisi 20 item; pemilik harus menyetujui atau mengubah nama, bahan/topping, foto, dan harga sebelum publikasi.

## 7. Alur pengguna utama

1. Pengguna membuka halaman beranda.
2. Pengguna membaca pengenalan Milk TeaND atau langsung menuju katalog.
3. Pengguna menambahkan satu atau lebih menu ke keranjang.
4. Pengguna menyesuaikan jumlah item dan memeriksa subtotal serta total.
5. Pengguna mengisi nama, nomor WhatsApp, photocard opsional, dan catatan.
6. Website memvalidasi input, lalu membuka WhatsApp dengan satu pesan berisi seluruh pesanan.
7. Pengguna meninjau pesan dan menekan tombol kirim di WhatsApp.
8. Toko melanjutkan konfirmasi pesanan melalui WhatsApp.

## 8. Metrik keberhasilan

Metrik berikut adalah usulan MVP. Tetapkan baseline terlebih dahulu; proyek saat ini belum menunjukkan integrasi analitik.

| Metrik | Definisi | Target awal yang diusulkan |
|---|---|---|
| Keberhasilan alur pemesanan | Persentase uji pesanan valid yang membuka WhatsApp dengan detail yang benar | 100% pada pengujian sebelum rilis |
| Kelengkapan katalog | Jumlah produk dengan nama, harga, deskripsi, gambar, dan informasi topping | 20 dari 20 setelah detail tambahan disetujui |
| Keberhasilan navigasi mobile | Pengguna uji dapat menuju katalog dan formulir pada viewport ponsel | Minimal 9 dari 10 sesi uji |
| Kualitas input | Nomor telepon/jumlah tidak valid ditolak dengan pesan yang jelas | 100% kasus uji validasi |
| Performa halaman | LCP persentil ke-75 pada perangkat mobile | ≤ 2,5 detik sebagai sasaran setelah pengukuran |
| Aksesibilitas | Pemeriksaan alur utama dengan keyboard dan audit otomatis tanpa temuan kritis | 100% kontrol utama dapat dijangkau keyboard |

Angka target adalah sasaran awal, bukan hasil pengukuran. Jangan menambahkan pelacakan pengguna tanpa kebutuhan, pemberitahuan, dan peninjauan privasi yang sesuai.

## 9. Asumsi, dependensi, dan risiko

- Harga, promo, jam operasional, alamat, nomor WhatsApp, dan detail menu harus dikonfirmasi pemilik sebelum publikasi.
- Ketersediaan layanan WhatsApp memengaruhi proses pemesanan; `wa.me` dapat membuka aplikasi WhatsApp atau WhatsApp Web sesuai perangkat/browser.
- Keranjang bersifat sementara di memori browser dan akan kosong ketika halaman dimuat ulang.
- Konten dan aset gambar disimpan sebagai file statis di repository.
- Tanpa backend, situs tidak dapat menjamin penerimaan, penyimpanan, atau pemrosesan pesanan.
- Harga produk dikelola dari array katalog di `js/script.js`, sehingga setiap perubahan tetap harus diverifikasi pada kartu, subtotal, dan pesan checkout.
