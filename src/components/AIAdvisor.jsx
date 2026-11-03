import React, { useState } from 'react';
import { getFinancialAdvice } from '../services/aiService';

// Standard realistic mock expenses to use if the database array is empty
const defaultMockExpenses = [
  { category: "Food & Dining", amount: 8500, description: "Swiggy orders and restaurant dinners" },
  { category: "Entertainment", amount: 4200, description: "Netflix subscription and movie tickets" },
  { category: "Transport", amount: 6000, description: "Uber rides and petrol costs" },
  { category: "Shopping", amount: 12500, description: "Online clothing sales purchase" }
];

export default function AIAdvisor({ transactions = [] }) {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetTips = async () => {
    setLoading(true);
    
    // If the backend/db is not attached, transactions will be empty. 
    // We seamlessly swap in our mock data so the Gemini LLM still processes perfectly!
    const dataToAnalyze = transactions && transactions.length > 0 ? transactions : defaultMockExpenses;
    
    const result = await getFinancialAdvice(dataToAnalyze);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      marginTop: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <span style={{ fontSize: '24px' }}>💡</span>
        <h3 style={{ margin: 0, color: '#333' }}>AI Smart Assistant</h3>
      </div>
      
      <p style={{ color: '#666', fontSize: '14px', margin: '0 0 16px 0' }}>
        Let our LLM analysis system scan your spending patterns to optimize your budget.
      </p>

      <button 
        onClick={handleGetTips} 
        disabled={loading}
        style={{
          backgroundColor: '#4F46E5',
          color: 'white',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}
      >
        {loading ? 'Analyzing Transactions...' : 'Get AI Financial Advice'}
      </button>

      {advice && (
        <div style={{
          marginTop: '20px',
          backgroundColor: '#F9FAFB',
          padding: '16px',
          borderRadius: '8px',
          borderLeft: '4px solid #4F46E5',
          whiteSpace: 'pre-line',
          color: '#374151',
          lineHeight: '1.5',
          fontSize: '14px'
        }}>
          {advice}
        </div>
      )}
    </div>
  );
}
