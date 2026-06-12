# 🐱 Niaraaaa - Love Letter Web App

Aplikasi web interaktif untuk mengirim surat cinta atau pesan khusus dengan tema kucing yang lucu!

## Fitur-Fitur

✨ **Login Page** - Masukkan nama kamu dengan password  
💌 **Message Page** - Baca pesan spesial dan pilih "Maauu" atau "Moal"  
✍️ **Response Page** - Kirim balasan pesan kamu  
🎉 **Success Page** - Konfirmasi pesan sudah terkirim dengan animasi confetti  

## Cara Menggunakan Secara Lokal

### 1. **Membuka File Langsung**
- Ekstrak folder ke lokasi yang diinginkan
- Buka file `index.html` dengan double-click atau buka dengan browser favorit Anda
- Aplikasi akan langsung berjalan!

### 2. **Menggunakan Live Server (Recommended)**

Jika menggunakan VS Code:
1. Install extension "Live Server" (oleh Ritwick Dey)
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Browser akan terbuka otomatis di `http://localhost:5500`

### 3. **Deploy ke Internet**

#### Opsi A: Menggunakan Netlify (Gratis & Mudah)
1. Buka https://netlify.com
2. Sign up dengan email atau GitHub
3. Drag & drop folder project ke Netlify
4. Selesai! URL akan diberikan secara otomatis
5. Share URL dengan siapa saja

**Contoh URL hasil:** https://niaraaaa-love.netlify.app

#### Opsi B: Menggunakan GitHub Pages
1. Buat akun GitHub (jika belum punya)
2. Buat repository baru bernama `niaraaaa`
3. Upload folder project ke repository
4. Aktifkan GitHub Pages di Settings → Pages
5. Pilih branch main sebagai source
6. URL akan menjadi: `https://username.github.io/niaraaaa`

#### Opsi C: Menggunakan Vercel
1. Buka https://vercel.com
2. Klik "New Project"
3. Import dari GitHub repository Anda
4. Deploy
5. URL akan diberikan secara otomatis

## Cara Menggunakan Aplikasi

### Login
1. Masukkan nama (nama panggilan pacar Frans)
2. Masukkan password (minimum 3 karakter)
3. Klik tombol "Login"

### Membaca Pesan
1. Baca pesan khusus yang telah disiapkan
2. Pilih "Maauu" untuk merespons atau "Moal" untuk menolak
3. Jika memilih "Moal", akan muncul konfirmasi lagi

### Mengirim Balasan
1. Tulis pesan balasan Anda di text area
2. Klik tombol "Kirim"
3. Pesan Anda akan tersimpan dan ditampilkan di halaman sukses

### Kembali
1. Klik tombol "Kembali" untuk kembali ke halaman login
2. Anda bisa login dengan nama yang berbeda

## Data & Privacy

- Pesan disimpan di **Local Storage** browser (data hanya tersimpan di perangkat Anda)
- Tidak ada data yang dikirim ke server eksternal
- Setiap perangkat/browser memiliki storage sendiri
- Hapus cache browser untuk menghapus data

## Customization

### Mengubah Pesan Utama
Buka file `index.html`, cari elemen dengan id `messageText` dan ubah isi pesan.

### Mengubah Warna
Buka file `styles.css` dan ubah nilai warna:
- `#D97D3A` = Orange (warna utama kucing)
- `#FF6B35` = Orange terang
- `#E8F4F8` = Biru muda (background)

### Mengubah Password
Password saat ini hanya validasi minimal (3 karakter). Untuk password sebenarnya:
1. Edit file `script.js`
2. Cari fungsi `handleLogin()`
3. Tambahkan validasi password yang lebih ketat

## Browser Support

Mendukung semua browser modern:
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Opera ✓

## Troubleshooting

### Halaman tidak tampil
- Refresh browser (Ctrl+F5 atau Cmd+Shift+R)
- Pastikan file CSS dan JS dalam folder yang sama

### Data hilang setelah refresh
- Ini normal karena data disimpan di Local Storage
- Data hanya hilang jika cache browser dihapus

### Tombol tidak bekerja
- Buka console (F12) dan cek apakah ada error
- Pastikan JavaScript diaktifkan di browser

## Tips & Trik

🎨 **Ubah Tema** - Edit CSS untuk membuat versi sendiri  
📱 **Responsive** - Aplikasi sudah optimized untuk mobile  
⌨️ **Shortcut** - Tekan Enter di halaman login untuk login  
🐱 **Easter Egg** - Buka Console (F12) untuk melihat pesan khusus  

## File Structure

```
niaraaaa/
├── index.html      (Struktur HTML & konten)
├── styles.css      (Styling & layout)
├── script.js       (Logika & interaksi)
└── README.md       (File ini)
```

## Lisensi

Bebas digunakan dan dimodifikasi sesuai kebutuhan Anda!

## Support

Jika ada pertanyaan atau masalah:
1. Cek Troubleshooting section di atas
2. Buka console browser (F12) untuk melihat error messages
3. Coba refresh atau buka di browser berbeda

---

**Dibuat dengan 💕 untuk Niaraaaa** 🐱

Happy coding! 🚀
