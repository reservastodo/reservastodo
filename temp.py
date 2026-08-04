import urllib.request
import re

urls = [
  "https://maps.app.goo.gl/xSFqiN4HdHFBSi219?g_st=awb",
  "https://maps.app.goo.gl/ayAJbTnZ9JTzdgmU6?g_st=awb",
  "https://maps.app.goo.gl/VKZ3soSSTAgTh1Rd8?g_st=awb",
  "https://maps.app.goo.gl/uHauBKW5yXYNdGcr8?g_st=awb",
  "https://maps.app.goo.gl/dVaKhxULrkBC6o4fA?g_st=awb"
]

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    title = re.search(r'<meta\s+property="og:title"\s+content="([^"]+)"', html)
    img = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
    print("URL:", url)
    print("Title:", title.group(1) if title else 'No title')
    print("Image:", img.group(1) if img else 'No image')
    print("-----")
