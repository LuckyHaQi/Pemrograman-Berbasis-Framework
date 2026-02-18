import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <div style={{
        padding: "40px",
        textAlign: "center"
      }}>

        <h1>Tentang Saya</h1>

        <div><br />
          <Image
            src="/images/me.png"
            width={200}
            height={200}
            alt="Foto Luqman"
            style={{
              borderRadius: "50%",
            }}
          />
        </div>

        {/* BIODATA */}<br />
        <div>
          <p><strong>Nama Mahasiswa:</strong> Luqman Ananta Abdul Hakim</p>
          <p><strong>NIM:</strong> 2341720077</p>
          <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>
          <p><strong>Mata Kuliah:</strong> Pemrograman Berbasis Framework</p>
        </div>

        {/* BUTTON */}<br />
        <div>
          <Link href="/">
            <button style={{
              padding: "10px 20px",
              cursor: "pointer"
            }}>
              Kembali ke Halaman Utama
            </button>
          </Link>
        </div>

      </div>
    </>
  )
}
