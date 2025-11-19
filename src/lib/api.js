const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function fetchVets({ q = '', city = '', region = '', limit = 50 } = {}) {
  const params = new URLSearchParams()
  if (q) params.set('q', q)
  if (city) params.set('city', city)
  if (region) params.set('region', region)
  if (limit) params.set('limit', String(limit))
  const res = await fetch(`${BASE_URL}/api/vets?${params.toString()}`)
  if (!res.ok) throw new Error('Failed to fetch vets')
  return res.json()
}

export async function fetchVet(id) {
  const res = await fetch(`${BASE_URL}/api/vets/${id}`)
  if (!res.ok) throw new Error('Vet not found')
  return res.json()
}

export async function createVet(payload) {
  const res = await fetch(`${BASE_URL}/api/vets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error('Failed to create vet')
  return res.text()
}

export async function fetchReviews(vetId) {
  const res = await fetch(`${BASE_URL}/api/vets/${vetId}/reviews`)
  if (!res.ok) throw new Error('Failed to fetch reviews')
  return res.json()
}

export async function createReview(payload) {
  const res = await fetch(`${BASE_URL}/api/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error('Failed to create review')
  return res.text()
}

export const backendBaseUrl = BASE_URL
