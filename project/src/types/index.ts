export interface Conversation {
  id: string;
  audioUrl: string;
  transcription: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  duration: number;
  timestamp: string;
  insights: string[];
  keywords: string[];
}

export interface InsightMetrics {
  totalConversations: number;
  averageDuration: number;
  sentimentDistribution: {
    positive: number;
    neutral: number;
    negative: number;
  };
  commonKeywords: Array<{ keyword: string; count: number }>;
}