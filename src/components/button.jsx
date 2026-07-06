import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const variants = {
  filled: 'bg-blue-600 text-white hover:bg-blue-500',
  outline: 'border border-blue-500/40 text-white hover:bg-blue-500/10',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
};

const shapes = {
  rounded: 'rounded-full',
  square: 'rounded-xl',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
  icon: 'h-10 w-10 p-0',
};

export function Button({
  children,
  icon: Icon,
  iconPosition = 'right',
  variant = 'filled',
  shape = 'square',
  size = 'md',
  to,
  href,
  className,
  ...props
}) {
  const iconOnly = Icon && !children;
  const Component = to ? NavLink : href ? 'a' : 'button';

  return (
    <Component
      {...(to ? { to } : {})}
      {...(href ? { href } : {})}
      {...(!to && !href ? { type: props.type || 'button' } : {})}
      className={clsx(
        'group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300',
        'hover:-translate-y-0.5',
        variants[variant],
        shapes[shape],
        iconOnly ? sizes.icon : sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}

      {children}

      {Icon && iconPosition === 'right' && (
        <Icon className="-ml-2 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Component>
  );
}