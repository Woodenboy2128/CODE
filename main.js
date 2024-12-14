require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.40.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: "// Start coding...\n",
        language: "javascript",  // Set language to JavaScript
        theme: "vs-dark"  // Dark theme like VS Code
    });

    // Function to get code and run it
    window.runCode = function () {
        const code = editor.getValue();
        const output = document.getElementById('output');
        output.innerHTML = '';

        try {
            if (code.trim().startsWith('<') && code.trim().endsWith('>')) {
                // If it's HTML, inject it into the output
                output.innerHTML = code;
            } else {
                // Otherwise, evaluate it as JavaScript
                const result = eval(code);
                output.textContent = `Output: ${result}`;
            }
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    }
};
document.getElementById('languageSelector').addEventListener('change', function () {
    const language = this.value;
    monaco.editor.setModelLanguage(editor.getModel(), language);
});
