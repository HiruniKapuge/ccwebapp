document.addEventListener('DOMContentLoaded', () => {
    const checkStatusBtn = document.getElementById('checkStatus');
    const statusResult = document.getElementById('statusResult');
    
    checkStatusBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/status');
            const data = await response.json();
            
            statusResult.className = 'status-result success';
            statusResult.innerHTML = `
                <strong>Status:</strong> ${data.status.toUpperCase()}<br>
                <strong>Message:</strong> ${data.message}
            `;
        } catch (error) {
            statusResult.className = 'status-result error';
            statusResult.innerHTML = `
                <strong>Error:</strong> Failed to connect to server<br>
                <strong>Details:</strong> ${error.message}
            `;
        }
    });
});
