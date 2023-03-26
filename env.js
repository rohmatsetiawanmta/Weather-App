fetch('/.env')
.then(response => response.text())
.then(env => {
    const lines = env.split('\n');
    for (const line of lines) {
        const [key, value] = line.split('=');
        if (key && value) {
            window.__env__[key] = value;
        }
    }
})
.catch(err => {
    console.error('Error loading environment variables:', err);
});
