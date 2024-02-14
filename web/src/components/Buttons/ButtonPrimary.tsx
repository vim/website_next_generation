import{ ReactNode } from 'react';

type PrimaryButtonProps = {
    children: ReactNode;
    type:string
}

export default function ButtonPrimary({children, type}:PrimaryButtonProps){
    return(
        <button className={`px-6 py-4 bg-transparent text-secondary font-semibold text-2xl leading-12 tracking-normal rounded-full border border-secondary opacity-100 ${type}`}>
            {children}
        </button>
    )
}