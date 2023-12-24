import InlineLink from '@/components/InlineLink';
import TextEntry from '@/components/TextEntry';

export default function NowPage() {
  return (
    <div>
      <TextEntry>
        Scaling Microservices at Veryable at Core Platform team in Dallas, TX.
      </TextEntry>
      <TextEntry>
        Trying to finish my backlog of <InlineLink to='/projects' displayText='ideas'/> and learn Rust.
      </TextEntry>
      <TextEntry>
        Digesting <InlineLink to='https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/' displayText='Building Microservices' /> 
        <span> </span>and <InlineLink to='https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/' displayText='Staff Engineer Path' />.
      </TextEntry>
    </div>
  );
}