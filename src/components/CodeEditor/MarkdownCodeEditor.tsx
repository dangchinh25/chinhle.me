"use client";

import type { ComponentProps, FC } from "react";
import { useMemo, useRef, useState } from "react";
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
    const { ...codeMirrorProps } = props;
    const [stringValue, setStringValue] = useState<string>(codeMirrorProps.value ?? "");

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

    const onClickHandle = () => {
        if (editorViewRef.current) {
            editorViewRef.current.focus();
        }
    };

    return (
        <div>
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
                onChange={(value) => {
                    setStringValue(value);
                }}
                {...codeMirrorProps}
            />
            {stringValue.trim() && (
                <div className="mt-4 p-4 bg-notion-bg-subtle rounded-lg border">
                    <div className="mb-2 text-sm text-notion-text-secondary">Preview:</div>
                    <ReactMarkdown>{processedMarkdown}</ReactMarkdown>
                </div>
            )}
        </div>
    );
};
