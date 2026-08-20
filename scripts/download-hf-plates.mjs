import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dest = join(root, 'videos/northern-digital-showcase/assets/plates')

const files = [
  {
    name: 'anovair-home.png',
    url: 'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-7f0524a2-f10c-48ec-99cc-7b0d58a3b8c1.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1787828863&Signature=smXcui4e5yeoXn93w7e9Fd7Z3PLwqxbvA%2Bfn238%2B7PkBAUiI0n6pSYVHEzzdZyiTWFUUyxSPeHEiYeAT2QkYAw1jcBQcLPmH6L7%2Fz0lhGBT9fXzl%2FXnIccM%2Fx2ubEW2WRVltznE4zTKNWBmnMrFQny25dEkAPATi7kTUQSZm%2FB0IOY%2Fn2T%2BNvkDn450wDp8ZutLFWK24gJrkNW0bbVRSDliia1xXDsSGbu5IAOrldrmRlbsE1mmNx7kNpxlMCjA%2FYSgRljIeWQxGq3lY9wYacbgTzALVKOS%2FnkvpzyaVhnNTCwBJFr8GmmofOAs%2F1Q2yngAKTnQ0mNNJcahhrnF9SA%3D%3D',
  },
  {
    name: 'anovair-shop.png',
    url: 'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-7dbe6e40-e723-4aab-a52f-7fed7fef384a.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1787828888&Signature=P3dlwxLYX%2FHDTwOX2l9ZaFW06h6AJivZHj1MFt94W8%2FgYtwS1r%2BZH64Pi3A4sLBRcChXa1b6DeAEzOhmG9u7d%2FAxPjByksquoxoX8nbXhljrNypD6kCNnTwCWYNtyqRHWMHfvtRpMwCpIUwO182%2BD%2Fkdc%2B40vVPWLIQju1SWQOWizfVKVkkBkg8YtJM90rD47vBrYapJhDAGgK04zIEHGyX1zc8kyz9z1NsGcYJFgARzPqPk2hjmTt8%2BFCM5o8oEQJSwvNKSxer6LlvCz7rRw%2FfTipEfNjrKHannMFwLURoCZ4hW4EjYDMHs2%2F4PQe5uK2RO3gOXNYbPhR7nzjLDQw%3D%3D',
  },
  {
    name: 'aqua-home.png',
    url: 'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-e965122a-1103-46ac-9264-b585c1a77a25.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1787828826&Signature=wjlmPPdhiFEa%2BMAY5P6z7rLlvn%2FtkGi%2BL2d%2FOeHas9pXFZhIg2CqvQhHocLY5hB%2F%2Bkh5PQc9ycLi7Wx4z5XQyEPrpiZJ6rTZeR9Vx41rE9Yh%2BAfACbVcmR25SqJuSAWP7fRzk8rAooREIjDlmlp5fzNgCARv9rit4XMNzvgheo54NtNnaFYpx7wuB%2FgWoh%2BW%2F6MJoC%2BD62B4MMFVEVdWYYVzViVpNO4wcAtTviuEpSTkN5MXWzXDKI6AkJrt8nGYMG8cuV%2FNRRGRs52WA7%2FgNFhEp7jXCOsl3AFVzKBuAaJ%2F0M9T6BhaoSb7sxzdMHRTUyxuKTDyP2pNC71yVsEdMw%3D%3D',
  },
  {
    name: 'aqua-platform.png',
    url: 'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-1e6d9074-a9a9-43a7-9155-db46c31e0b47.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1787828913&Signature=Rlg8w60KIR2kZZwFE82Tj%2BY0p3LLWXcxO0ebn2kHXF37PPGcupDGJG7u73CPwhL5QIA6sVsrigHZ6%2FaWP%2BTlBOFFxcynku8Dm0pLE6ZYevXKhMHVFkTNZcoTAdq37BBV%2BvcxAmNdygpCY4sOEbd8vl8YC8yJRUixfJiOKcw6VCBDoraGhWdEb%2F0NTczxV34StzQ%2F9eHguXuYD0wk4bCZ2jRTaJVGxZW4I54v8HMSU6ttljGAmPXJJaEmhRYzXOcxOsY1OECfTFpqEM31p7C3PoeAk4xcAGQsxU6Zb%2F9HQafshJYoTur9ijOkd%2FncnPaRi6Cyntn5ZJDXckqw6lAYKw%3D%3D',
  },
  {
    name: 'proud-home.png',
    url: 'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-f17b19ed-0ba0-418a-8e0e-43e2e73be7a5.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1787828850&Signature=rPSyLwKeG6WncZt%2BkFpbC10LpGXH5MszNvX%2FNbXebDs5ryRmvBcTGUN14OXg2IKVXHwhSftNEu1bsrzQ1y1lTFIav04n%2BWcb1BoSok6WVXUeHKExEitQrV1Arn2RcNCF%2FBlXypugWAduZEUcpx72%2FJU9yAPo4x9sqzKeUvFTPWqp%2FwkkPBrUpz6UrEZukO6qgu4Ji2xzPurxpkLs9QQw%2Feh%2BeTa42w76JWfdPJheCb4n8px%2Fgt8cR%2Faw%2BZcVDoj07MhFIfY%2BWrJ9uw4kcfI%2FYxGoK7jCNAqIDfVNnXLMlohG68DHvOQcrLZc%2FxAN4YbRhiNVg9lgzDv1sYf%2F9uAuIg%3D%3D',
  },
  {
    name: 'proud-shop.png',
    url: 'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-3dc36b80-4cb9-4302-9b28-3aea1099d553.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1787828881&Signature=COTTtRBuw859%2BjTP1MMOwR9FjMVVR4Ul8%2FOmYqxUVKaoMplxjJuKvdEVaBwsF214wFLb01zmpJzzZ4triyxO5SHrMhUsl9lN8c2LXr04fVtAGTBB0qs6QsMsjC%2FJ4LvKVpv4%2Fx1OSnpQSx0wJiRRL83Lj4J2lFQ7oHBXy7h91vKJaCJTVDYzGqNHPaChbSmWPow94LGzXMXQ0YSll5RLDZ4fu9wzmox912oetRJKw2DBzLOkDy5NTLI6Xb6dPTKajBShmTyODZiG6bHjTgkJKSR2eUQZqABircE36gYKF1LYlpxup1bfVLRI%2F0W75JR%2BdBQXAIlw49CXDBBT7hzvDg%3D%3D',
  },
]

await mkdir(dest, { recursive: true })
console.log('downloading plates into', dest)

for (const file of files) {
  const res = await fetch(file.url)
  if (!res.ok) throw new Error(`${file.name}: HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(join(dest, file.name), buf)
  console.log(`wrote ${file.name} ${buf.length} bytes`)
}
