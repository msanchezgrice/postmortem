'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export default function ChatInput() {
  const [chatContent, setChatContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatContent.trim()) {
      setError('Please paste in your Slack conversation');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // In a real app with actual auth, we would first verify if the user is logged in
      // If not logged in, we would redirect to auth, then process after they authenticated
      
      // For this demo, we'll skip actual authentication and call the API directly
      // In a production app, you would secure this API with proper authentication
      
      // Call our analysis API
      /*
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze chat');
      }

      const { data } = await response.json();
      */
      
      // For demo purposes, we'll just store the chat content in session storage
      // In a real app, we would store the analysis result in the database
      sessionStorage.setItem('slackChat', chatContent);
      
      // Navigate to the results page (in a real app, we would pass the analysis ID)
      router.push('/results');
    } catch (err) {
      console.error('Error processing the chat:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary-600">
            Post Mortem
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Paste Your Slack Conversation</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Copy and paste your Slack conversation below. Our AI will analyze the content and generate a comprehensive post-mortem report.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="chat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Slack Conversation
                </label>
                <textarea
                  id="chat"
                  rows={15}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Paste your Slack conversation here..."
                  value={chatContent}
                  onChange={(e) => setChatContent(e.target.value)}
                />
              </div>

              {error && (
                <div className="mb-4 text-red-500 text-sm">
                  {error}
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-colors flex items-center"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Generate Post-Mortem'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-4">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Tips for Best Results</h3>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-400 space-y-1 text-sm">
              <li>Include the entire conversation related to the incident</li>
              <li>Make sure timestamps and user names are visible</li>
              <li>Include any relevant links or references mentioned in the chat</li>
              <li>For large incidents, focus on the key parts of the conversation</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 