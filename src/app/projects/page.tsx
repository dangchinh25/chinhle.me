import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import { Sortable } from "@/components/Sortable/Sortable";

const ProjectsPage = () => {
    return (
        <Sortable
            items={[
                <MarkdownCodeEditor value="**Retool Agent**: [Launch Blog Post](https://retool.com/blog/retool-automates-100-million-hours-of-work-launching-agents)" />,
                <MarkdownCodeEditor value="**Leetcode Proficiency Tracker**: [Github](https://github.com/dangchinh25/leetcode-review-dashboard)" />,
            ]}
        />
    );
};

export default ProjectsPage;
