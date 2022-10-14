import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

 export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

// Foi definido que o tamanho padrão, caso não seja definido, como 'medium'.
// Dando ao CLSX a Condição de tamanhos do padrão dado pelo Tailwind para os definidos pelos Tokens trazidos do Figma.
export function Text({ size = 'md', children, asChild }: TextProps) {
    
    const Comp = asChild ? Slot : 'span'
    
    return (
        <Comp className={clsx(
            'text-gray-100',
            {
                'text-xs': size == 'sm',
                'text-sm': size == 'md',
                'text-md': size == 'lg',
            }

        )}
        >
            {children}
        </Comp>
    )
}