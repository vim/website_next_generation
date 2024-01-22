import React from 'react';

type CardProps = {
    children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
    return <div>{children}</div>;
}
