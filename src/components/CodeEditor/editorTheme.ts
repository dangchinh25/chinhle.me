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
        "min-height": "75px",
        cursor: "text",
        fontFamily: "Inter, system-ui, sans-serif",
    },
    "&.cm-editor:hover": {
        outline: "none",
    },
    "&.cm-editor:focus-within": {
        outline: "none",
    },
});
