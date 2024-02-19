import{ ReactNode } from 'react';
import '../../styles/_card.scss';



type CardProps = {
    width: number;
    children: ReactNode;
  };

export default function Card({ width, children }: CardProps) {
  return (
    <div className={`card col-span-${width} p-8`}>
      {children}
    </div>
  );
}