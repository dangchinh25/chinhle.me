"use client";

import type { ComponentProps, FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import { autocompletion } from "@codemirror/autocomplete";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import type { Extension } from "@uiw/react-codemirror";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";

import { editorTheme } from "./editorTheme";

export type MarkdownCodeEditorProps = ComponentProps<typeof CodeMirror>;

export const MarkdownCodeEditor: FC<MarkdownCodeEditorProps> = (props) => {
    const editorViewRef = useRef<EditorView | null>(null);
    const { value: externalValue, onChange: externalOnChange, ...codeMirrorProps } = props;
    const [stringValue, setStringValue] = useState<string>(externalValue ?? "");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const isInitialMount = useRef(true);

    // Sync with external value changes only on initial mount or when explicitly different
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        // Only update if external value is explicitly provided and different from current
        if (externalValue !== undefined && externalValue !== stringValue) {
            setStringValue(externalValue);
        }
    }, [externalValue]);

    // Process markdown to handle single line breaks
    const processedMarkdown = useMemo(() => {
        return stringValue.replace(/\n(?!\n)/g, "\n\n");
    }, [stringValue]);

    const staticMarkdownExtensions = useMemo<Extension[]>(() => {
        return [
            EditorView.lineWrapping,
            markdown({
                base: markdownLanguage,
                codeLanguages: languages,
            }),
        ];
    }, []);

    const autocompletionExtensions = useMemo<Extension[]>(() => {
        return [
            autocompletion({
                activateOnTyping: true,
                closeOnBlur: false,
            }),
        ];
    }, []);

    const extensions = useMemo(
        () => [...staticMarkdownExtensions, ...autocompletionExtensions],
        [staticMarkdownExtensions, autocompletionExtensions],
    );

    const handleTyping = () => {
        setIsTyping(true);
    };

    const handleChange = (value: string) => {
        setStringValue(value);
        handleTyping();
        // Call external onChange if provided
        if (externalOnChange) {
            // @ts-expect-error - CodeMirror onChange can accept just the value string
            externalOnChange(value);
        }
    };

    const handleBlur = () => {
        // Switch to preview mode immediately when editor loses focus
        setIsTyping(false);
    };

    const onClickHandle = () => {
        setIsTyping(true);
        // Focus the editor after a brief delay to ensure it's rendered
        setTimeout(() => {
            if (editorViewRef.current) {
                editorViewRef.current.focus();
            }
        }, 10);
    };

    return (
        <div>
            {isTyping ? (
                <CodeMirror
                    theme={editorTheme}
                    extensions={extensions}
                    basicSetup={{
                        lineNumbers: false,
                        foldGutter: false,
                    }}
                    onCreateEditor={(view) => {
                        editorViewRef.current = view;
                    }}
                    onClick={onClickHandle}
                    value={stringValue}
                    onChange={handleChange}
                    onKeyDown={handleTyping}
                    onBlur={handleBlur}
                    {...codeMirrorProps}
                />
            ) : (
                <div
                    className="p-4 bg-notion-bg-subtle rounded-lg border cursor-pointer hover:bg-notion-bg-subtle/80 transition-colors"
                    onClick={onClickHandle}
                >
                    {stringValue.trim() ? (
                        <ReactMarkdown>{processedMarkdown}</ReactMarkdown>
                    ) : (
                        <div className="text-notion-text-secondary italic">
                            Click to start typing...
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
