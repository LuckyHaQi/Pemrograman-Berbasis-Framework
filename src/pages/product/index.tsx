import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
    const { push } = useRouter();
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        if (!isLogin) {
            push("/auth/login");
        }
    },[]);

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        push("/auth/login");
    };

    return (
        <div>
            Product Page

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default ProductsPage;