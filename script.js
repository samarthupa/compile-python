async function executePython() {
    const code = document.getElementById('pythonCode').value;
    // Replace with your backend service URL
    const response = await fetch('https://your-backend-service.com/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
    });
    const result = await response.json();
    document.getElementById('result').textContent = 'Output:\n' + result.output + '\nError:\n' + result.error;
}
