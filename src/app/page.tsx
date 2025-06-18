"use client";

import { useState } from "react";

import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, useDroppable } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { MarkdownCodeEditor } from "@/components/CodeEditor/MarkdownCodeEditor";
import { LINK } from "@/const";

const AboutPage = () => {
    const [items, setItems] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7"]);

    const { setNodeRef } = useDroppable({
        id: "about::droppable",
    });

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id && over) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id as string);
                const newIndex = items.indexOf(over.id as string);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <div ref={setNodeRef}>
            <MarkdownCodeEditor value="I love making and sharing things." />
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
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items.map((item) => (
                        <SortableItem key={item} id={item} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default AboutPage;

const SortableItem = ({ id }: { id: string }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            Drag me {id}
        </div>
    );
};
