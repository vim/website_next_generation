// const cmsContentType = 'announcements';
// fetch(`${process.env.CMS_API}/${cmsContentType}`, {
//     headers: {
//         authorization: `Bearer ${process.env.CMS_TOKEN}`,
//     },
// })
//     .then((ok) => ok.json())
//     .then((res) => console.log(res));

export default async function Home() {
    const result = await fetchSingleTypeComponentHome()
    .catch(error => {
        console.log('Fetch failed:', error);
    });
    console.log(result);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Vim Landing Page</h1>
            <button className="btn inverted">Download</button>
        </main>
    );
}
