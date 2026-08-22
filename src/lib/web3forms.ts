export type Web3FormPayload = {
  subject: string
  from_name: string
  email: string
  message: string
  [key: string]: string | boolean | number | undefined
}

type Web3FormsResponse = {
  success: boolean
  message?: string
}

const ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitWeb3Form(payload: Web3FormPayload): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (!accessKey || typeof accessKey !== 'string') {
    throw new Error('Form submissions are not configured. Please email us directly.')
  }

  const formData = new FormData()
  formData.append('access_key', accessKey)

  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined) continue
    formData.append(key, String(value))
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    body: formData,
  })

  let data: Web3FormsResponse | null = null
  try {
    data = (await response.json()) as Web3FormsResponse
  } catch {
    throw new Error('Something went wrong sending your message. Please try again.')
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Something went wrong sending your message. Please try again.')
  }
}
