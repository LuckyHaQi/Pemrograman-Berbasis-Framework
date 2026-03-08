import { useRouter } from "next/router";

const halamanKategori = () => {
    // const Router = useRouter();
    // console.log(Router);
    const { query } = useRouter()
    const slug = query.slug;
    return (
        <div>
            <h1>Halaman Kategori</h1>

            <p>Kategori:</p>

            {Array.isArray(slug) &&
                slug.map((item, index) => (
                    <ul key={index}>{item}</ul>
                ))
            }
        </div>
    );
};

export default halamanKategori;