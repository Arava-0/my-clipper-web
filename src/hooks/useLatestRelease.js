import { useState, useEffect } from 'react'

const CACHE_KEY = 'my-clipper-release'
const CACHE_TTL = 3 * 60 * 1000

const FALLBACK = {
  version: 'v1.0.6',
  downloadUrl: 'https://github.com/Arava-0/my-clipper/releases/latest',
  releaseUrl: 'https://github.com/Arava-0/my-clipper/releases/latest',
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

export function useLatestRelease() {
  const cached = readCache()
  const [release, setRelease] = useState(cached ?? FALLBACK)
  const [loading, setLoading] = useState(!cached)

  useEffect(() => {
    if (cached) return

    fetch('https://api.github.com/repos/Arava-0/my-clipper/releases/latest')
      .then(r => r.json())
      .then(data => {
        if (!data.tag_name) throw new Error('No release')
        const asset = data.assets?.find(a => a.name.endsWith('.exe'))
        const release = {
          version: data.tag_name,
          downloadUrl: asset?.browser_download_url ?? FALLBACK.downloadUrl,
          releaseUrl: data.html_url ?? FALLBACK.releaseUrl,
        }
        writeCache(release)
        setRelease(release)
      })
      .catch(() => setRelease(FALLBACK))
      .finally(() => setLoading(false))
  }, [])

  return { release, loading }
}
