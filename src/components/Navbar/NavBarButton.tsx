export type Props = {
  children: React.ReactNode
  className?: string
};
  
export default function NavbarButton({ children, className }: Props) {
  return (
    <button className={
      `h-full w-24 ${className} hover:bg-silverLakeBlue transition duration-300 ease-in-out rounded hover:text-platinum`
    }>
      {children}
    </button>
  );
}