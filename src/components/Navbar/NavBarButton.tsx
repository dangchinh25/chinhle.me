export type Props = {
  children: React.ReactNode
  className?: string
};
  
export default function NavbarButton({ children, className }: Props) {
  return (
    <button className={`h-full w-16 ${className}`}>
      {children}
    </button>
  );
}