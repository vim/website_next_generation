import React from 'react';

export default function page({ params }: { params: { slug: string[] } }) {
    return <div>{JSON.stringify(params.slug)}</div>;
}
