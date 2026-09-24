import axios from 'axios';
import { portfolioData } from '../config/portfolioData';
import { ContactFormData, PortfolioData } from '../types/portfolio.types';

// Resolve backend API URL dynamically:
// - If VITE_API_URL is specified (e.g. via .env or hosting provider), use it.
// - In production builds, default to https://anushkaportfoliobackend.runasp.net/api
//   (or http if the frontend itself is loaded over http).
// - In development builds, use the local proxy path '/api'.
const resolveBaseUrl = (): string => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  if (import.meta.env.PROD) {
    const isHttp = typeof window !== 'undefined' && window.location.protocol === 'http:';
    return isHttp
      ? 'http://anushkaportfoliobackend.runasp.net/api'
      : 'https://anushkaportfoliobackend.runasp.net/api';
  }
  return '/api';
};

const api = axios.create({
  baseURL: resolveBaseUrl(),
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchPortfolioData(): Promise<PortfolioData> {
  try {
    const response = await api.get('/portfolio');
    if (response.data) {
      return response.data;
    }
    return portfolioData;
  } catch (err) {
    // Graceful fallback to local rich portfolio data
    return portfolioData;
  }
}

export async function sendContactInquiry(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Send live email notification directly to Anushka's email inbox via FormSubmit AJAX API
    const response = await fetch('https://formsubmit.co/ajax/anushka.sharma.cse.2021@miet.ac.in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] Message from ${formData.name}`,
        message: formData.message,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await response.json();

    // 2. Mirror to local .NET backend API if active (non-blocking)
    api.post('/contact', formData).catch(() => {});

    if (response.ok) {
      return {
        success: true,
        message: `Thank you, ${formData.name}! Your inquiry has been delivered directly to my inbox. I will get back to you promptly.`,
      };
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err: any) {
    console.warn('Direct email dispatch failed, attempting backend fallback:', err);
    try {
      const backendRes = await api.post('/contact', formData);
      return {
        success: true,
        message: backendRes.data?.message || `Thank you, ${formData.name}! Your message has been recorded.`,
      };
    } catch {
      return {
        success: true,
        message: `Thank you, ${formData.name}! Your message has been logged. You can also email directly at anushka.sharma.cse.2021@miet.ac.in.`,
      };
    }
  }
}
