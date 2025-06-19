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
import { GripVertical } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

type SortableItemProps = {
    id: string;
    element: React.ReactNode;
};

export const SortableItem = ({ id, element }: SortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
        zIndex: isDragging ? 9999 : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative group">
            {/* Drag handle - only this area will respond to drag events */}
            <div
                {...attributes}
                {...listeners}
                className="absolute left-0 top-0 w-6 h-full flex items-center justify-center cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity z-10"
                style={{ marginLeft: "-24px" }}
            >
                <GripVertical className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
            </div>
            {/* The actual content - no drag listeners here */}
            <div className="w-full">{element}</div>
        </div>
    );
};

type SortableProps = {
    items: React.ReactNode[];
};

export const Sortable = (props: SortableProps) => {
    const [items, setItems] = useState<SortableItemProps[]>(
        props.items.map((item) => ({
            id: uuidv4(),
            element: item,
        })),
    );
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
