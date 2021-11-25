
import 'https://cdn.img.ly/packages/imgly/cesdk-js/1.2.0/cesdk.umd.js';

CreativeEditorSDK.init('#cesdk_container').then(async (cesdk) => {
  // highlight-fetch
  const sceneUrl = 'https://cdn.img.ly/packages/imgly/cesdk-js/1.2.0/assets/templates/cesdk_postcard_1.scene';
  const scene = await fetch(sceneUrl)
    .then((response) => { return response.text() });
  // highlight-fetch

  // highlight-load
  cesdk.load(scene).then(() => {
    console.log('Load succeeded')
  }).catch((error) => {
    console.error('Load failed', error)
  });
  // highlight-load
});
