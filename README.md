# GitHub Repositories Explorer

Aplikasi React + TypeScript untuk mencari pengguna GitHub dan melihat daftar repository milik pengguna tersebut menggunakan GitHub REST API.

## Demo

Demo URL:
https://danielchristianto10.github.io/githubrepositoriesexplorer/

## Repositori

GitHub Repositori:
https://github.com/danielchristianto10/githubrepositoriesexplorer

---

## Fitur

- Mencari pengguna GitHub berdasarkan kata kunci.
- Menampilkan maksimal 5 pengguna yang sesuai.
- Menampilkan daftar repository dari pengguna yang dipilih.
- Menampilkan:
  - Nama repository
  - Deskripsi repository
  - Jumlah stars
- Loading state.
- Error handling.
- Responsive untuk mobile dan desktop.
- Debounce.

---

## Teknologi yang Digunakan

- React
- TypeScript
- Vite
- Prettier

---

## Instalasi

Clone repository:

```bash
git clone https://github.com/danielchristianto10/githubrepositoriesexplorer
```

Masuk ke folder project:

```bash
cd githubrepositoriesexplorer
```

Install dependency:

```bash
npm install
```

Tambahkan environment variable `.env`

```
VITE_GITHUB_API=https://api.github.com
VITE_GITHUB_TOKEN=github_pat_XXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXX
```

Jalankan aplikasi:

```bash
npm run dev
```

Aplikasi akan berjalan di:

```text
http://localhost:5173
```

---

## Cara Menggunakan

1. Ketik username GitHub pada kolom pencarian.
2. Sistem akan menampilkan maksimal 5 pengguna yang sesuai.
3. Klik salah satu pengguna.
4. Repository pengguna akan ditampilkan.
5. Informasi repository meliputi:
   - Nama repository
   - Deskripsi repository
   - Jumlah stars

---

## Error Handling

Aplikasi menangani beberapa kondisi berikut:

- GitHub API gagal diakses.

---

## Author

Daniel Christianto

- Email: christiantodaniel530@gmail.com
- GitHub: https://github.com/danielchristianto10

---

## License

Proyek ini dibuat khusus untuk keperluan tes rekrutmen.
