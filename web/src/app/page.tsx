import Image from 'next/image';

// Example request to cms
const cmsContentType = 'announcements';
fetch(`${process.env.CMS_API}/${cmsContentType}`, {
    headers: {
        authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
})
    .then((ok) => ok.json())
    .then((res) => console.log(res));

export default function Home() {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
}
