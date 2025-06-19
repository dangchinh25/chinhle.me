import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import { Sortable } from "@/components/Sortable/Sortable";

const ProjectsPage = () => {
    return <Sortable items={[<MarkdownCodeEditor value="TBD" />]} />;
};

export default ProjectsPage;
