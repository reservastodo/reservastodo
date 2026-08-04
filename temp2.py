import urllib.request

urls = [
  "https://maps.app.goo.gl/xSFqiN4HdHFBSi219",
  "https://maps.app.goo.gl/ayAJbTnZ9JTzdgmU6",
  "https://maps.app.goo.gl/VKZ3soSSTAgTh1Rd8",
  "https://maps.app.goo.gl/uHauBKW5yXYNdGcr8",
  "https://maps.app.goo.gl/dVaKhxULrkBC6o4fA"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print("Redirected URL:", res.geturl())
    except Exception as e:
        print("Error:", e)
