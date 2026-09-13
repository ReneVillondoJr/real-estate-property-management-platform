import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';
import { Slot } from 'radix-ui';

const buttonVariants = cva(
  "ui-button [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'ui-button-primary',
        destructive: 'ui-button-danger',
        outline: 'ui-button-outline',
        secondary: 'ui-button-secondary',
        ghost: 'ui-button-ghost',
        link: 'ui-button-ghost underline-offset-4 hover:underline',
      },
      size: {
        default: 'has-[>svg]:px-3',
        xs: "min-h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'min-h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'min-h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9 min-h-9 px-0',
        'icon-xs':
          "size-6 min-h-6 rounded-md px-0 [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8 min-h-8 px-0',
        'icon-lg': 'size-10 min-h-10 px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
