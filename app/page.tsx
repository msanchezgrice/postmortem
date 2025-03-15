import Link from "next/link";
import { FaLightbulb, FaClock, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Turn Chaotic Incident Chats into Structured Post-Mortems
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Let AI analyze your Slack conversations and automatically generate comprehensive post-mortem reports in seconds.
          </p>
          <Link 
            href="/chat-input" 
            className="btn btn-primary btn-lg text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Analyze Your Chat Now
          </Link>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary-500 text-4xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold mb-2">Extract Key Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automatically identify root causes, resolution steps, and learning opportunities from your incident discussions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary-500 text-4xl mb-4">
              <FaClock />
            </div>
            <h3 className="text-xl font-bold mb-2">Save Hours of Work</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transform hours of manual documentation work into a 30-second process. Focus on fixing problems, not writing reports.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary-500 text-4xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold mb-2">Improve Over Time</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build a standardized incident history to spot patterns, track improvements, and prevent future incidents.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center max-w-xs">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Paste Your Slack Chat</h3>
              <p className="text-gray-600 dark:text-gray-400">Copy and paste your incident conversation or connect directly to Slack.</p>
            </div>
            
            <div className="hidden md:block text-gray-300 dark:text-gray-600 text-4xl">→</div>
            
            <div className="text-center max-w-xs">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">Our AI reads through the conversation to identify key information and insights.</p>
            </div>
            
            <div className="hidden md:block text-gray-300 dark:text-gray-600 text-4xl">→</div>
            
            <div className="text-center max-w-xs">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Get Your Report</h3>
              <p className="text-gray-600 dark:text-gray-400">Receive a complete, professional post-mortem that you can export or share.</p>
            </div>
          </div>
        </div>

        {/* Demo/Mock-up */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8">See the Transformation</h2>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Demo Video Coming Soon</p>
              {/* Replace with actual video or animated demo when available */}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Incident Analysis?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Stop spending hours manually creating post-mortems. Let AI do the heavy lifting.
          </p>
          <Link 
            href="/chat-input" 
            className="btn btn-primary btn-lg text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Try It Now - It&apos;s Free!
          </Link>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, we take data security seriously. Your chat data is processed securely and not stored permanently unless you choose to save your reports.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">What format can I export my report in?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You can export your post-mortem reports as PDF, Markdown, or share them via a secure link.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I customize the post-mortem template?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, premium users can customize their post-mortem templates to match their organization&apos;s requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Post Mortem App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
