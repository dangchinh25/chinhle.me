import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import { Sortable } from "@/components/Sortable/Sortable";

const LikesPage = () => {
    return <Sortable items={[<MarkdownCodeEditor value="TBD" />]} />;
};

export default LikesPage;
