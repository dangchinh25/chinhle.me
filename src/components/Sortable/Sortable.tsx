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

type SortableItemProps = {
    id: string;
    element: React.ReactNode;
};

export const SortableItem = ({ id, element }: SortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {element}
        </div>
    );
};

type SortableProps = {
    items: SortableItemProps[];
};

export const Sortable = (props: SortableProps) => {
    const [items, setItems] = useState<SortableItemProps[]>(props.items);
    const { setNodeRef } = useDroppable({
        id: "droppable::sortable",
    });

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id && over) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <div ref={setNodeRef}>
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items.map((item) => (
                        <SortableItem key={item.id} id={item.id} element={item.element} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};
