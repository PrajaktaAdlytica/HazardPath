from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import json, shutil, os
os.environ['DYLD_FALLBACK_LIBRARY_PATH']='/opt/homebrew/lib'
import cairosvg
from PIL import Image
root=Path('outputs/hazardpath-site')
out=Path('outputs/hazardpath-contour-brand-kit'); out.mkdir(exist_ok=True)
# Three closed contour ribbons with genuinely transparent channels.
paths=[
'M0 0 C66 1 111 28 190 49 C286 65 344 91 344 165 C344 258 279 273 192 285 C139 293 122 315 122 350 L122 384 H102 V349 C102 299 123 276 187 268 C268 258 324 245 324 165 C324 105 276 85 186 69 C110 49 64 26 0 25 Z',
'M0 42 C63 43 109 69 181 86 C259 99 303 115 303 165 C303 224 263 239 182 246 C105 253 86 285 86 343 V384 H57 V340 C57 272 83 234 173 219 C240 209 272 201 272 166 C272 133 237 122 172 111 C104 96 60 68 0 66 Z',
'M0 87 C59 91 95 114 140 133 C169 146 154 174 121 185 C59 206 40 249 40 320 V384 H0 Z'
]
mark=''.join('<path d="'+p+'"/>' for p in paths)
fontpath=root/'node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2'
font=TTFont(fontpath); gs=font.getGlyphSet(); cmap=font.getBestCmap(); upem=font['head'].unitsPerEm
pen=SVGPathPen(gs); x=0
for ch in 'HazardPath':
 g=cmap[ord(ch)]; gs[g].draw(TransformPen(pen,(1,0,0,1,x,0))); x+=gs[g].width-12
word=pen.getCommands(); scale=72/upem; width=x*scale

def svg(w,h,body,title='HazardPath'):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>'
def m(color,trans=''):
 return f'<g fill="{color}" transform="{trans}">{mark}</g>'
def wordmark(color,tx,ty,size):
 return f'<path fill="{color}" transform="translate({tx} {ty}) scale({size/upem} {-size/upem})" d="{word}"/>'
colors={'olive':'#53613B','forest':'#26332B','cream':'#FAF9F0','black':'#000000','white':'#FFFFFF'}
for name,c in colors.items():
 (out/f'symbol-{name}.svg').write_text(svg(384,424,m(c,'translate(20 20)'),'HazardPath Contour symbol'))
 (out/f'logo-horizontal-{name}.svg').write_text(svg(round(width+116),110,m(c,'translate(10 10) scale(.23)')+wordmark(c,110,80,72)))
 (out/f'logo-stacked-{name}.svg').write_text(svg(520,380,m(c,'translate(157 20) scale(.6)')+wordmark(c,(520-width)/2,340,72)))
 (out/f'wordmark-{name}.svg').write_text(svg(round(width+20),100,wordmark(c,10,75,72)))
icon=svg(64,64,'<rect width="64" height="64" rx="13" fill="#E5EACB"/>'+m('#53613B','translate(12 9) scale(.116)'),'HazardPath app icon')
(out/'favicon.svg').write_text(icon)
# Wider clear channels for tiny 16px/32px rendering: original bands remain distinct.
for size in [16,32,48,180,192,512]:
 name=f'favicon-{size}.png' if size<100 else ('apple-touch-icon.png' if size==180 else f'icon-{size}.png')
 cairosvg.svg2png(bytestring=icon.encode(),write_to=str(out/name),output_width=size,output_height=size)
Image.open(out/'icon-512.png').save(out/'favicon.ico',sizes=[(16,16),(32,32),(48,48)])
licensepath=root/'node_modules/@fontsource/cormorant-garamond/LICENSE'
if licensepath.exists(): shutil.copy(licensepath,out/'FONT-LICENSE.txt')
public=root/'public/brand'; public.mkdir(exist_ok=True)
for p in out.iterdir():
 if p.suffix in ['.svg','.png','.ico']: shutil.copy(p,public/p.name)
for name in ['favicon.svg','favicon.ico','apple-touch-icon.png','icon-192.png','icon-512.png']:
 shutil.copy(out/name,root/'public'/name)
shutil.copy(out/'favicon-32.png',root/'public/favicon.png')
(root/'public/site.webmanifest').write_text(json.dumps({'name':'HazardPath','short_name':'HazardPath','start_url':'/','display':'standalone','theme_color':'#53613B','background_color':'#E5EACB','icons':[{'src':f'/icon-{s}.png','sizes':f'{s}x{s}','type':'image/png','purpose':'any'} for s in [192,512]]},indent=2))
(out/'README.txt').write_text('HazardPath — Contour identity\n\nSelected direction: terrain lines forming a P.\nThree closed vector ribbons with transparent channels.\nHorizontal, stacked, wordmark-only and symbol-only SVGs in olive, forest, cream, black and white. SVG lettering is outlined and does not require installed fonts.\nWordmark: Cormorant Garamond Semibold (SIL Open Font License; included).\nFavicons: SVG, ICO (16/32/48), PNG (16/32/48), Apple touch (180), app icons (192/512).\nUse olive or forest on cream/matcha/sky. Use cream or white on forest.\nMaintain at least one ribbon-width clearspace. Prefer the symbol below 140px lockup width. Avoid stretching, rotation, gradients or effects.\nSource construction script: website scripts/build-contour-brand.py.\n')
print('Created',len(list(out.iterdir())),'brand assets in',out)
