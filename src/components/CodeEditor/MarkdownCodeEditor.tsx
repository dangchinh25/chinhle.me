'use client';

import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { languages } from '@codemirror/language-data';


import { useMemo } from 'react';


export const MarkdownCodeEditor = () => {
  const staticMarkdownExtensions = useMemo(() => {
    return [
      EditorView.lineWrapping,
      markdown({
        base: markdownLanguage,
        codeLanguages: languages,
      }),
    ];
  }, []);

  const markdownExtensions = useMemo(() => {
    return [
      ...staticMarkdownExtensions,
    ];
  }, [staticMarkdownExtensions]);


  return (
    <div className='border rounded-md'>
      <CodeMirror 
        height='200px'
        extensions={markdownExtensions}
      />
    </div>
  );
};