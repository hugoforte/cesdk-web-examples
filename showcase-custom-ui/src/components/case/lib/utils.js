export function getImageSize(url) {
  const img = document.createElement('img');

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      // Natural size is the actual image size regardless of rendering.
      // The 'normal' `width`/`height` are for the **rendered** size.
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      // Resolve promise with the width and height
      resolve({ width, height });
    };

    // Reject promise on error
    img.onerror = reject;
  });

  // Setting the source makes it start downloading and eventually call `onload`
  img.src = url;

  return promise;
}

const getUserAgent = () => {
  return (window && window.navigator && window.navigator.userAgent) || '';
};

export const isEdge = () => {
  const userAgent = getUserAgent();
  return userAgent.indexOf('Edge') !== -1;
};

export const isIE = () => {
  const userAgent = getUserAgent();
  return !!userAgent.match(/msie|trident/i);
};

export const isWindows = () => {
  const userAgent = getUserAgent();
  return !!userAgent.match(/windows/i);
};
