"use client";

import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import { LINK } from "@/const";

const AboutPage = () => {
    return (
        <div>
            <MarkdownCodeEditor value="I like making and sharing things." />
            <MarkdownCodeEditor value="I mostly speak English and Vietnamese, sometimes Typescript." />
            <MarkdownCodeEditor value="My main focus is making cool software tools that help making my day to day life easier, thus enables me to build even more cool stuff or just to have fun with technology. You can see my existing projects [here](./projects)." />
            <MarkdownCodeEditor
                value={`Currently exploring the idea of **Second Brain** and **Digital Garden**. I share everything I know [here](${LINK.WIKI}).`}
            />
            <MarkdownCodeEditor
                value={`I'm also into photography and videography, you can checkout my photos on [Instagram](${LINK.INSTAGRAM}) or watch my videos on [Youtube](${LINK.YOUTUBE}).`}
            />
            <MarkdownCodeEditor
                value={`If you want to know more about me, you can see [what I like](./likes), or [explore the wiki](${LINK.WIKI}).`}
            />
            <MarkdownCodeEditor
                value={`I love meeting new people to discuss various topics. Check out my [Now page](./now) to see where I am right now.`}
            />
            <MarkdownCodeEditor
                value={`Feel free to shoot me anything [here](./contact), follow me on [Github](${LINK.GITHUB}) to see me building more stuff, or connect me on [Linkedin](${LINK.LINKEDIN}).`}
            />
        </div>
    );
};

export default AboutPage;
