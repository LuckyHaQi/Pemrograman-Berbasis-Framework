import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Praktikum NextJS Pages Router</h1> <br />
      <p>Mahasiswa D-IV Teknik Informatika</p>

      <Link href="/about">
          <button style={{
            cursor: "pointer"
          }}>
            Ke Halaman About
          </button>
      </Link>
      
    </div>
  )
}
