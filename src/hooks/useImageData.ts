import { useEffect, useState } from "react";

export interface data_schema {
    _id: string;
    category_id: number;
    img: string;
    name: string;
}

const data_cache: data_schema[] | null = null;

export default function useImageData() {
    const [data, setData] = useState<data_schema[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!data_cache) {
            setLoading(true);
            fetch("/image-games.json")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                });
        }
    }, []);

    return { data, loading };
}
