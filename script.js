

// Record button functionality
document.getElementById('record-btn').addEventListener('click', () => {
    console.log('Record button clicked');
    // Implement recording functionality here
});

// Screenshot button functionality
document.getElementById('screenshot-btn').addEventListener('click', () => {
    console.log('Screenshot button clicked');
    // Implement screenshot functionality here
});

// Gallery button functionality
document.getElementById('gallery-btn').addEventListener('click', () => {
    console.log('Gallery button clicked');
    // Implement gallery functionality here
});

// Color picker functionality
document.getElementById('color-picker').addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});
