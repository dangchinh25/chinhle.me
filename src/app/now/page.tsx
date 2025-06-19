import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import { Sortable } from "@/components/Sortable/Sortable";

const NowPage = () => {
    return (
        <Sortable
            items={[
                <MarkdownCodeEditor value="Building AI Agents at [Retool](https://retool.com)." />,
            ]}
        />
    );
};

export default NowPage;
