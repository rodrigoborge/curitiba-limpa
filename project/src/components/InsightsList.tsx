import React from 'react';
import { Lightbulb } from 'lucide-react';

const mockInsights = [
  {
    id: 1,
    text: "Clientes frequentemente mencionam preocupações com prazos de entrega durante horários de pico",
    timestamp: "2024-03-15T14:30:00Z",
    sentiment: "neutral"
  },
  {
    id: 2,
    text: "Feedback positivo consistente sobre a qualidade do atendimento ao cliente",
    timestamp: "2024-03-15T15:45:00Z",
    sentiment: "positive"
  },
  {
    id: 3,
    text: "Sugestões recorrentes para melhorar o processo de devolução de produtos",
    timestamp: "2024-03-15T16:20:00Z",
    sentiment: "negative"
  },
  {
    id: 4,
    text: "Clientes elogiam a variedade de produtos disponíveis na plataforma",
    timestamp: "2024-03-15T17:10:00Z",
    sentiment: "positive"
  }
];

export function InsightsList() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Principais Insights</h3>
      </div>
      <div className="space-y-4">
        {mockInsights.map((insight) => (
          <div 
            key={insight.id}
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
          >
            <p className="text-gray-800 dark:text-gray-200">{insight.text}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className={`text-sm px-2 py-1 rounded-full ${
                insight.sentiment === 'positive' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                insight.sentiment === 'negative' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
              }`}>
                {insight.sentiment.charAt(0).toUpperCase() + insight.sentiment.slice(1)}
              </span>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(insight.timestamp).toLocaleTimeString()}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}