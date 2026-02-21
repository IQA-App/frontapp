/** Matches backend CreateOrderDto. Only customerName is required. */
export interface OrderData {
  customerName: string
  email?: string
  confirmEmail?: string
  customFields?: Record<string, unknown>
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'https://dev0pz.com/api'

export const submitOrder = async (data: OrderData): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Submission failed')
    }
    
    // If you need to return data from the server, you can return it here
    // return await response.json()
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error // Re-throw so the component can handle the UI state (e.g. show error message)
  }
}

