export default abstract class UtilsService {
  static downloadFile(data: unknown, filename: string, type: string): void {
    // Creating a blob object from non-blob data using the Blob constructor
    const blob = new Blob([data as BlobPart], { type });
    const url = URL.createObjectURL(blob);
    // Create a new anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    a.click();
    a.remove();
  }
}
