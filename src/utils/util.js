import domtoimage from 'dom-to-image';

function saveToImage(name) {
  const confirmSave = window.confirm('Would you like to save your mandalart?');
  if (!confirmSave) return;

  const captureDOM = document.getElementById('capture');
  const userName = name !== '' ? name : '나만';

  domtoimage
    .toJpeg(captureDOM)
    .then((dataURL) => {
      const image = dataURL.replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.setAttribute('download', `${userName}의_만다라트.png`);
      link.setAttribute('href', image);
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      console.error(`${error} failed to save`);
      alert('failed to save! retry saving');
    });
}

export { saveToImage };
