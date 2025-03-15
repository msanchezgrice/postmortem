'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaDownload, FaLink, FaSpinner } from 'react-icons/fa';

// Define types for our data
interface TimelineItem {
  time: string;
  event: string;
}

interface TeamMember {
  name: string;
  role: string;
  contribution: string;
}

interface ResponseMetrics {
  timeToDetect: string;
  timeToMitigate: string;
  totalOutageDuration: string;
  mttr: string;
}

interface PostMortem {
  title: string;
  summary: string;
  impact: string;
  timeline: TimelineItem[];
  rootCause: string;
  resolution: string;
  teamMembers: TeamMember[];
  learnings: string[];
  responseMetrics: ResponseMetrics;
}

// Mock data for demonstration purposes
const mockPostMortem: PostMortem = {
  title: 'Database Outage Post-Mortem',
  summary: 'On May 15, 2023, our primary database experienced an outage lasting 2 hours and 37 minutes, affecting approximately 40% of our users. The root cause was identified as an unexpected spike in database connections due to a misconfigured connection pool in a newly deployed service.',
  impact: 'Users experienced slow response times and intermittent errors when attempting to access their data or make purchases. Approximately 40% of users were affected, resulting in an estimated revenue loss of $25,000.',
  timeline: [
    { time: '14:32 EDT', event: 'Monitoring alerts triggered for database response time' },
    { time: '14:40 EDT', event: 'On-call engineer acknowledged alert and began investigation' },
    { time: '15:05 EDT', event: 'Issue identified as connection pool exhaustion' },
    { time: '15:15 EDT', event: 'Incident escalated to database and backend teams' },
    { time: '16:20 EDT', event: 'Fix implemented by reducing connection pool size in new service' },
    { time: '17:09 EDT', event: 'Services restored to normal operation' },
  ],
  rootCause: 'A newly deployed microservice was configured with an excessive database connection pool size, which during peak traffic caused the database to exhaust available connections.',
  resolution: 'The immediate fix was to reduce the connection pool size in the problematic service. Long-term, we implemented connection limiting and better monitoring of connection pool usage.',
  teamMembers: [
    { name: 'Jane Smith', role: 'Database Engineer', contribution: 'Identified the root cause and implemented immediate mitigation' },
    { name: 'Mike Johnson', role: 'Backend Developer', contribution: 'Deployed the fix to the connection pool configuration' },
    { name: 'Sarah Lee', role: 'DevOps Engineer', contribution: 'Monitored system recovery and enhanced alerting' },
  ],
  learnings: [
    'Implement pre-deployment checks for connection pool configurations',
    'Add better monitoring for database connection utilization',
    'Develop circuit breakers to prevent cascading failures',
    'Review and update on-call runbooks for database connection issues',
  ],
  responseMetrics: {
    timeToDetect: '8 minutes',
    timeToMitigate: '1 hour 48 minutes',
    totalOutageDuration: '2 hours 37 minutes',
    mttr: '2 hours 37 minutes',
  },
};

export default function Results() {
  const [isLoading, setIsLoading] = useState(true);
  const [postMortem, setPostMortem] = useState<PostMortem | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real application, we would fetch the analysis from our API
    // For demo purposes, we'll simulate API call and use mock data
    const chatData = sessionStorage.getItem('slackChat');
    
    if (!chatData) {
      router.push('/chat-input');
      return;
    }

    const fetchAnalysis = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Set mock data
        setPostMortem(mockPostMortem);
      } catch (error) {
        console.error('Error fetching analysis:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, [router]);

  const handleCopyLink = () => {
    // In a real app, this would be a unique shareable link
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard');
  };

  const handleDownloadPDF = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF download functionality would be implemented here');
  };

  const handleDownloadMarkdown = () => {
    // In a real app, this would generate and download a Markdown file
    alert('Markdown download functionality would be implemented here');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-primary-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Generating Your Post-Mortem...</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">This may take a minute as our AI analyzes your conversation.</p>
        </div>
      </div>
    );
  }

  if (!postMortem) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error Generating Post-Mortem</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Something went wrong while analyzing your conversation.</p>
          <Link 
            href="/chat-input" 
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Try Again
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary-600">
            Post Mortem
          </Link>
          <div className="flex space-x-2">
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <FaDownload className="mr-1" /> PDF
            </button>
            <button 
              onClick={handleDownloadMarkdown}
              className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <FaDownload className="mr-1" /> Markdown
            </button>
            <button 
              onClick={handleCopyLink}
              className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <FaLink className="mr-1" /> Share
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">{postMortem.title}</h1>
            <p className="mt-2 text-primary-100">Generated on {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Summary</h2>
              <p className="text-gray-600 dark:text-gray-300">{postMortem.summary}</p>
            </section>

            {/* Impact */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Impact</h2>
              <p className="text-gray-600 dark:text-gray-300">{postMortem.impact}</p>
            </section>

            {/* Timeline */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Timeline</h2>
              <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Event</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {postMortem.timeline.map((item: TimelineItem, index: number) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''}>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">{item.time}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">{item.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Root Cause */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Root Cause</h2>
              <p className="text-gray-600 dark:text-gray-300">{postMortem.rootCause}</p>
            </section>

            {/* Resolution */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Resolution</h2>
              <p className="text-gray-600 dark:text-gray-300">{postMortem.resolution}</p>
            </section>

            {/* Team Members */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Team Members Involved</h2>
              <div className="space-y-4">
                {postMortem.teamMembers.map((member: TeamMember, index: number) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{member.name} - {member.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{member.contribution}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learnings */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Key Learnings</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {postMortem.learnings.map((learning: string, index: number) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </section>

            {/* Response Metrics */}
            <section>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Response Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Time to Detect</p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-1">{postMortem.responseMetrics.timeToDetect}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Time to Mitigate</p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-1">{postMortem.responseMetrics.timeToMitigate}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Total Duration</p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-1">{postMortem.responseMetrics.totalOutageDuration}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">MTTR</p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-1">{postMortem.responseMetrics.mttr}</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            Generated using AI analysis. The accuracy of this report depends on the provided conversation data.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/chat-input" 
              className="px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              New Analysis
            </Link>
            <button 
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
              onClick={() => alert('This would allow you to edit the report in a real application')}
            >
              Edit Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 