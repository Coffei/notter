import { notes } from "./store"

export const exportNotes = () => {
    const exportContent = JSON.stringify({ notes })
    const fileName = "my-notes.json";

    // Create a Blob object with the file content
    const blob = new Blob([exportContent], { type: 'application/json' });

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
}
