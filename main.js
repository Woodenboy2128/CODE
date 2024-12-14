function runCode() {
    const code = document.getElementById('code').value;
    const output = document.getElementById('output');
    
    // Clear previous output
    output.innerHTML = '';

    try {
        // Check if the code is HTML or JavaScript
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
