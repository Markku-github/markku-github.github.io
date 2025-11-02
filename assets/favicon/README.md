Favicon assets for the site

Place your actual icon image files in this folder using the exact filenames below.
Once the files are present, the site will automatically use them (links are already added to the pages).

Recommended files and sizes
- apple-touch-icon.png (180x180)
- favicon-32.png (32x32)
- favicon-16.png (16x16)
- site.webmanifest (JSON manifest - example below)

Example ImageMagick (Windows PowerShell) commands to generate icons from a single source image (logo.png):

# Generate PNG sizes
magick convert logo.png -resize 16x16 assets/favicon/favicon-16.png
magick convert logo.png -resize 32x32 assets/favicon/favicon-32.png
magick convert logo.png -resize 180x180 assets/favicon/apple-touch-icon.png

# Generate favicon.ico (contains multiple sizes)
magick convert assets/favicon/favicon-16.png assets/favicon/favicon-32.png assets/favicon/favicon-48.png assets/favicon/favicon.ico

Sample site.webmanifest (edit as needed):
{
  "name": "Markku Kirjava",
  "short_name": "Markku",
  "icons": [
    { "src": "/assets/favicon/favicon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/assets/favicon/favicon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#ffffff",
  "background_color": "#ffffff"
}

Notes:
- If you don't have ImageMagick, many online favicon generators will create the needed files and a downloadable ZIP.
- After adding the files, commit them and push to GitHub; GitHub Pages will serve them from /assets/favicon/.
