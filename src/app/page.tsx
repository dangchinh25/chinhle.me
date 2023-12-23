import TextEntry from '@/components/TextEntry';
import { LINK } from '@/const';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <TextEntry>
        I love making and sharing things.
      </TextEntry>
      <TextEntry>
        Currently exploring the idea of <b>Second Brain </b> 
        and <b>Digital Garden</b>. I share everything I know <span> </span>
        <Link href={LINK.WIKI} className='underline'>
          <b>here</b>
        </Link>.
      </TextEntry>
      <TextEntry>
        Feel free to ask me anything.
      </TextEntry>
    </div>
  );
}
