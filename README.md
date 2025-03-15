# Post Mortem App

A web application that analyzes Slack conversations and generates comprehensive post-mortem reports using AI. This tool helps teams turn chaotic incident discussions into structured, actionable post-mortems in seconds.

## Features

- **Slack Conversation Analysis**: Paste your Slack conversation and let AI do the work
- **Comprehensive Reports**: Get detailed post-mortems with root cause, timeline, team contributions, and more
- **Actionable Insights**: Extract key learnings and action items automatically
- **Response Metrics**: Track detection time, mitigation time, and incident duration

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, DaisyUI
- **Backend**: Next.js API Routes (serverless)
- **AI**: OpenAI GPT-4.5 API
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key
- Supabase account and project (for production use)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/post-mortem.git
   cd post-mortem
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env.local`
   - Add your OpenAI API key and Supabase credentials

4. Run the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Paste your Slack conversation into the text area
2. Click "Generate Post-Mortem"
3. Review and export the generated post-mortem report

## Deployment

### Deploy to Vercel

The easiest way to deploy the application is using Vercel:

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Set the environment variables in the Vercel dashboard
4. Deploy

### Supabase Setup

For production use with user authentication and saved reports:

1. Create a new Supabase project
2. Set up authentication providers
3. Create the necessary tables:
   - `users`: User information
   - `reports`: Stored post-mortem reports
   - `chat_logs`: Raw chat logs (if needed)

## Roadmap

- Direct Slack integration via OAuth
- Customizable post-mortem templates
- Team collaboration features
- Historical incident analytics
- PDF and Markdown export

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the powerful GPT-4.5 API
- Vercel for hosting
- Supabase for the backend infrastructure
