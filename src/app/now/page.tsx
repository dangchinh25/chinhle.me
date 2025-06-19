import { InlineLink } from "@/components/InlineLink";
import { TextEntry } from "@/components/TextEntry";

const NowPage = () => {
    return (
        <div>
            <TextEntry>
                Building AI Agents at <InlineLink to="https://retool.com" displayText="Retool" />.
            </TextEntry>
        </div>
    );
};

export default NowPage;
