export const fileToBase64 = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();

        // Read file content on file loaded event
        reader.onload = function(event) {
            resolve(event.target.result);
        };

        // Convert data to base64
        reader.readAsDataURL(file);
    });
};
