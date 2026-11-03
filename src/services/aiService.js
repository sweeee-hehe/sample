// A robust, fallback network integration for client-side API requests
export const getFinancialAdvice = async (transactions) => {
  try {
    // 1. Paste your exact key string starting with AQ inside the quotes below
    const apiKey = "AQ.Ab8RN..."; 

    if (!apiKey || apiKey.includes("...")) {
      return "Setup Error: Please copy and paste your complete real AQ.Ab8RN key string inside the apiKey variable.";
    }

    if (!transactions || transactions.length === 0) {
      return "No transaction history found. Add some expenses first to get custom insights!";
    }

    // 2. Format your tracking logging entries cleanly
    const details = transactions
      .map(t => `- Category: ${t.category || 'Other'}, Amount: ${t.amount || 0}, Note: ${t.description || t.title || 'None'}`)
      .join('\n');

    const promptText = `You are a professional financial advisor. Analyze these monthly expenses and provide exactly 3 bullet points of highly actionable, direct cost-cutting tips based on this data:\n\n${details}`;

    // 3. Make a direct HTTP request to the recommended Gemini 1.5 Flash endpoint
    const url = `https://googleapis.com{apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();

    // 4. Safely check and extract the generated text response structure
    if (data.candidates && data.candidates[0].content.parts[0].text) {
      return data.candidates[0].content.parts[0].text;
    } else if (data.error) {
      console.error("Gemini Server Reply Error:", data.error);
      return `Server Error: ${data.error.message || "Failed validation checking."}`;
    }

    return "Unexpected data structure returned from the model endpoint.";

  } catch (error) {
    console.error("Network Catch Error:", error);
    return "Network connection failed. Please verify your internet settings or key configurations.";
  }
};
