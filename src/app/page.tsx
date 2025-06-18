import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import InlineLink from "@/components/InlineLink";
import TextEntry from "@/components/TextEntry";
import { LINK } from "@/const";

const AboutPage = () => {
    return (
        <div>
            <TextEntry>I love making and sharing things.</TextEntry>
            <TextEntry>I mostly speak English and Vietnamese, sometimes Typescript.</TextEntry>
            <TextEntry>
                My main focus is making cool software tools that help making my day to day life
                easier, thus enables me to build even more cool stuff or just to have fun with
                technology. You can see my existing projects{" "}
                <InlineLink to="/projects" displayText="here" />.
            </TextEntry>
            <TextEntry>
                Currently exploring the idea of <b>Second Brain </b>
                and <b>Digital Garden</b>. I share everything I know{" "}
                <InlineLink to={LINK.WIKI} displayText="here" />.
            </TextEntry>
            <TextEntry>
                I'm also into photography and videography, you can checkout my photos on{" "}
                <InlineLink to={LINK.INSTAGRAM} displayText="Instagram" /> or watch my videos on{" "}
                <InlineLink to={LINK.YOUTUBE} displayText="Youtube" />.
            </TextEntry>
            <TextEntry>
                If you want to know more about me, you can see{" "}
                <InlineLink to="/likes" displayText="what I like" />, or{" "}
                <InlineLink to={LINK.WIKI} displayText="explore the wiki" />.
            </TextEntry>
            <TextEntry>
                I love meeting new people to discuss various topics. Check out my{" "}
                <InlineLink to="/now" displayText="Now page" /> to see where I am right now.
            </TextEntry>
            <TextEntry>
                Feel free to shoot me anything <InlineLink to="/contact" displayText="here" />,
                follow me on <InlineLink to={LINK.GITHUB} displayText="Github" /> to see me building
                more stuff, or connect me on{" "}
                <InlineLink to={LINK.LINKEDIN} displayText="Linkedin" />.
            </TextEntry>
            <MarkdownCodeEditor value="I love making and sharing things." />
        </div>
    );
};

export default AboutPage;
