export type Props = {
  children: React.ReactNode
};

export default function TextEntry({ children }: Props) {
  return (
    <p className='mb-2'>
      <li>
        {children}
      </li>
    </p>
  );
}