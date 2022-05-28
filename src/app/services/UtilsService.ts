export default abstract class UtilsService {
  static deepEqual(x: unknown, y: unknown): boolean {
    const ok = Object.keys,
      tx = typeof x,
      ty = typeof y;
    return x && y && tx === "object" && tx === ty
      ? ok(x).length === ok(y).length &&
          ok(x).every((key) => UtilsService.deepEqual(x[key], y[key]))
      : x === y;
  }

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
