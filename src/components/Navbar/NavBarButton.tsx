export type Props = {
  children: React.ReactNode
  className?: string
};
  
export default function NavbarButton({ children, className }: Props) {
  return (
    <button className={
      `h-8 md:h-full w-full md:w-24 ${className} hover:bg-silverLakeBlue transition duration-300 ease-in-out rounded hover:text-platinum shadow-md md:shadow-none`
    }>
      {children}
    </button>
  );
}