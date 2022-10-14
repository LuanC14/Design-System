import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';


export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

// Foi definido que o tamanho padrão, caso não seja definido, como 'medium'.
// Dando ao CLSX a Condição de tamanhos do padrão dado pelo Tailwind para os definidos pelos Tokens trazidos do Figma.
export function Heading({ size = 'md', children, asChild }: HeadingProps) {

    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp className={clsx(
            'text-gray-100 font-bold font-sans',
            {
                'text-lg': size == 'sm',
                'text-xl': size == 'md',
                'text-xxl': size == 'lg',
            },
        )}
        >
            {children}
        </Comp>
    )
}