import InlineLink from '@/components/InlineLink';
import TextEntry from '@/components/TextEntry';

export default function NowPage() {
  return (
    <div>
      <TextEntry>
        Building AI Agents at <InlineLink to='https://retool.com' displayText='Retool'/>.
      </TextEntry>
    
    </div>
  );
}