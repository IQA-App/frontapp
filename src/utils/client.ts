interface OrderData {
  name: string,
  description: string
}

export const submitOrder = async (data: OrderData): Promise<void> => {
  try {
    // Replace with your actual API endpoint
    const response = await fetch('https://dev0pz.com/api/orders', {
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

