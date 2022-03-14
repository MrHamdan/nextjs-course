import Link from "next/link";

// our-domain.com/news
function NewsPage(){
    return (
        <>
        <h1>The News Page</h1>
        <ul>
            <li><Link href="/news/nextjs-is-a-great-framework">NextJs is a great framework</Link></li>
            <li>Something Else</li>
        </ul>
        </>
    );
}
export default NewsPage;