function runCode() {
    const code = document.getElementById('code').value;
    const output = document.getElementById('output');
    
    try {
        const result = eval(code);
        output.textContent = `Output: ${result}`;
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}
