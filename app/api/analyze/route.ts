import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client
// This is commented out for demo purposes but will be used in production
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { chatContent } = await request.json();

    if (!chatContent || typeof chatContent !== 'string') {
      return NextResponse.json(
        { error: 'Chat content is required and must be a string' },
        { status: 400 }
      );
    }

    // Create the prompt for post-mortem analysis
    // This is commented out for demo purposes but will be used with the OpenAI integration
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const prompt = `
      You are a specialized assistant designed to create comprehensive post-mortem reports from Slack conversation logs.
      
      Analyze the following Slack conversation about an incident and create a detailed post-mortem report that includes:
      
      1. A descriptive title for the incident
      2. A concise summary of what happened
      3. The impact of the incident (users affected, services impacted, etc.)
      4. A chronological timeline of events
      5. The root cause of the incident
      6. How the incident was resolved
      7. Team members involved and their contributions
      8. Key learnings and action items
      9. Response metrics (time to detect, time to mitigate, total duration, MTTR)
      
      Format the response as a JSON object with the following structure:
      {
        "title": "string",
        "summary": "string",
        "impact": "string",
        "timeline": [
          {"time": "string", "event": "string"}
        ],
        "rootCause": "string",
        "resolution": "string",
        "teamMembers": [
          {"name": "string", "role": "string", "contribution": "string"}
        ],
        "learnings": ["string"],
        "responseMetrics": {
          "timeToDetect": "string",
          "timeToMitigate": "string",
          "totalOutageDuration": "string",
          "mttr": "string"
        }
      }
      
      Here is the Slack conversation:
      ${chatContent}
    `;

    // In a real application, we would call OpenAI here
    // For demo purposes, we'll return a mock response
    
    // This would be the actual OpenAI call:
    /*
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Use the latest available model
      messages: [
        {
          role: "system",
          content: "You are a specialized post-mortem analysis assistant."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const postMortemData = JSON.parse(completion.choices[0].message.content);
    */

    // Mock data for demonstration
    const postMortemData = {
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

    return NextResponse.json({ 
      data: postMortemData 
    });
    
  } catch (error) {
    console.error('Error analyzing chat:', error);
    return NextResponse.json(
      { error: 'Failed to analyze chat content' },
      { status: 500 }
    );
  }
} 