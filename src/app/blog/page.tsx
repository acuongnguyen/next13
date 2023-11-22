'use client'

import AppTable from '@/components/app.table';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import useSWR from "swr";

const Blog = () => {

    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "https://655c79f125b76d9884fd57eb.mockapi.io/api/v1/blogs",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    console.log("check data =>", data);

    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    if (!data) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <AppTable blogs={data} />
        </div>
    )
}
export default Blog;