import https from 'node:https';

https.get('https://vk.com/cityservice74', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
    if (match) {
      console.log('Image URL:', match[1]);
    } else {
      console.log('No og:image found');
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
