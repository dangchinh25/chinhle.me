import { EditorView } from "@uiw/react-codemirror";

export const editorTheme = EditorView.theme({
    "&": {
        // border: `1px solid ${theme.colors.backgroundGrey}`,
        // borderRadius: theme.radii.small,
        textAlign: "left",
        fontFamily: "Inter, system-ui, sans-serif",
    },
    ".cm-activeLine": {
        background: "transparent",
    },
    "&.cm-editor .cm-scroller": {
        cursor: "text",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "0.5rem",
    },
    "&.cm-editor:hover": {
        outline: "none",
    },
    "&.cm-editor:focus-within": {
        outline: "none",
    },
});
