import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, MessageCircle, TrendingUp, Brain } from 'lucide-react';
import type { InsightMetrics } from '../types';
import { InsightsList } from './InsightsList';

const mockData: InsightMetrics = {
  totalConversations: 128,
  averageDuration: 8.5,
  sentimentDistribution: {
    positive: 65,
    neutral: 42,
    negative: 21
  },
  commonKeywords: [
    { keyword: "produto", count: 45 },
    { keyword: "preço", count: 38 },
    { keyword: "entrega", count: 32 },
    { keyword: "qualidade", count: 28 }
  ]
};

export function Dashboard() {
  const sentimentData = [
    { name: 'Positivo', value: mockData.sentimentDistribution.positive },
    { name: 'Neutro', value: mockData.sentimentDistribution.neutral },
    { name: 'Negativo', value: mockData.sentimentDistribution.negative }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total de Conversas"
          value={mockData.totalConversations}
          icon={<MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
        />
        <MetricCard
          title="Duração Média"
          value={`${mockData.averageDuration} min`}
          icon={<Clock className="h-6 w-6 text-green-600 dark:text-green-400" />}
        />
        <MetricCard
          title="Taxa de Positividade"
          value={`${Math.round((mockData.sentimentDistribution.positive / mockData.totalConversations) * 100)}%`}
          icon={<TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
        />
        <MetricCard
          title="Insights Gerados"
          value={mockData.commonKeywords.length}
          icon={<Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Distribuição de Sentimentos</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.375rem',
                    color: '#F3F4F6'
                  }}
                />
                <Bar dataKey="value" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Palavras-chave Mais Comuns</h3>
          <div className="space-y-4">
            {mockData.commonKeywords.map((keyword) => (
              <div key={keyword.keyword} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{keyword.keyword}</span>
                <div className="flex items-center">
                  <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                    <div
                      className="h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                      style={{
                        width: `${(keyword.count / mockData.commonKeywords[0].count) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{keyword.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InsightsList />
    </div>
  );
}

function MetricCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}