"use client";

import type { ComponentProps, FC } from "react";
import { useMemo, useRef } from "react";

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
            {...codeMirrorProps}
        />
    );
};
