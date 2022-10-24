export default function download(data, fileName) {
  const blobURL = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = blobURL;
  link.setAttribute('download', fileName);
  link.click();
}