// import { useState } from 'react'

import MonacoEditor from 'react-monaco-editor';

export default function CodeEditor() {
  const code = "// ここにコードを書いてください\nfunction hello() {\n  console.log('Hello, world!');\n}";
  const options = {
    selectOnLineNumbers: true
  };

  return (
    <MonacoEditor
      width="500"
      height="200"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
    />
  );
}



