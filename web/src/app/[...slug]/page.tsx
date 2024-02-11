import React from 'react';

async function getPageProps(slug: string) {
    const respose = await fetch(`${process.env.CMS_API}/pages/${slug}`, {
        // headers: {
        //     authorization: `Bearer ${process.env.CMS_TOKEN}`,
        // },
    });
    if (!respose.ok) {
        throw new Error('Failed to fetch page');
    }
    return (await respose.json()).data;
}

export default async function page({ params }: { params: { slug: string[] } }) {
    const pageProps = await getPageProps(params.slug[0]);
    console.log({ pageProps });
    return <div>{JSON.stringify(pageProps)}</div>;
}
