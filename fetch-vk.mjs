import https from 'node:https';

https.get('https://vk.com/cityservice74', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/<meta property="?og:image"? content="?([^"]+)"?/i);
    if (match) {
      console.log('Image URL:', match[1]);
    } else {
      console.log('No og:image found');
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
