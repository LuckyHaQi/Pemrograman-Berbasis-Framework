import { useRouter } from "next/router";

export default function ProductIdPage() {
  const router = useRouter();
  const { nama } = router.query;

  return (
    <div><br></br>
      <h1>
        Halaman Produk
      </h1><br></br>

      <p>
        Produk: {nama}
      </p>
    </div>
  );
}