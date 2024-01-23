type CardProps = {
    children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
    return <div className="rounded-xl pt-6 px-6 pb-10 bg-gray-1">{children}</div>;
}
