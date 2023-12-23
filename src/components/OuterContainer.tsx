export type Props = {
  children: React.ReactNode
};

export default function OuterContainer({ children }: Props) {
  return (
    <div className='flex flex-row justify-center w-screen h-screen bg-platinum'>
      <div className='w-3/6'>
        {children}
      </div>
    </div>
  );
}