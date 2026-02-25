import { useRouter } from "next/router";

const ProductPage = () => {
    // const Router = useRouter();
    // console.log(Router); 
    const { query } = useRouter();
    return (
        <div><br></br>
        <h1>
            Halaman Produk
        </h1><br></br>

        <p>
            Produk: {query.id}
        </p>
        </div>
    );
};

export default ProductPage;