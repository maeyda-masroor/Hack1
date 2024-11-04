document.getElementById('printButton').addEventListener('click', () => {
    // Generate unique identifier
    const uniqueId = generateUniqueId();

    // Placeholder for base64 PDF data
    const pdfData = 'JVBERi0xLjQK...(base64 content here)...'; // Replace with actual base64 data

    // Create shareable link using base64 data and unique ID
    const shareableLink = `${window.location.origin}/#pdf=${uniqueId}`;

    // Display the shareable link
    const shareLinkElement = document.getElementById('shareLink');
    if (shareLinkElement) {
        shareLinkElement.innerHTML = `Shareable Link: <a href="${shareableLink}" target="_blank">${shareableLink}</a>`;
    }

    // Open PDF in a new tab using base64 data
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write(
        `<iframe width="100%" height="100%" src="data:application/pdf;base64,${pdfData}"></iframe>`
    );
});

function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}
