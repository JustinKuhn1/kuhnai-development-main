'use client';

import { useEffect, useState } from 'react';
import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { BarChart3, PieChart, LineChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BusinessIntelligence() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LayoutWithSidebar>
      <main className="p-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
            Business Intelligence Solutions
          </h1>

          <p className="text-lg text-zinc-700 mb-8">
            Transform your business data into actionable insights with KuhnAI's advanced business intelligence platform. Make data-driven decisions that drive growth and efficiency.
          </p>

          <div className="bg-gradient-to-r from-[#2A6B74]/10 to-[#2A6B74]/5 rounded-xl p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-zinc-800">AI-Powered Analytics</h2>
                <p className="text-zinc-700 mb-4">
                  Our advanced algorithms analyze your business data to uncover hidden patterns, trends, and opportunities that traditional BI tools miss.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#2A6B74] rounded-full mr-2"></div>
                    <span className="text-zinc-700">Predictive forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#2A6B74] rounded-full mr-2"></div>
                    <span className="text-zinc-700">Anomaly detection</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#2A6B74] rounded-full mr-2"></div>
                    <span className="text-zinc-700">Smart recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-40 h-40 bg-white rounded-full shadow-md flex items-center justify-center">
                  <TrendingUp size={60} className="text-[#2A6B74]" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-zinc-800">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100 flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-[#e8f4f5] rounded-full">
                <BarChart3 size={28} className="text-[#2A6B74]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-800">Interactive Dashboards</h3>
              <p className="text-zinc-600">Customizable dashboards that provide real-time visibility into your KPIs and metrics.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100 flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-[#e8f4f5] rounded-full">
                <PieChart size={28} className="text-[#2A6B74]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-800">Data Visualization</h3>
              <p className="text-zinc-600">Turn complex data into clear, intuitive visualizations that tell the story behind your numbers.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100 flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-[#e8f4f5] rounded-full">
                <LineChart size={28} className="text-[#2A6B74]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-800">Automated Reporting</h3>
              <p className="text-zinc-600">Schedule and distribute reports automatically to keep stakeholders informed.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden mb-10">
            <div className="p-6 border-b border-zinc-100">
              <h2 className="text-xl font-semibold text-zinc-800">Business Impact</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-zinc-800">Revenue Growth</h3>
                  <div className="w-full bg-zinc-100 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#2A6B74] h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-zinc-500">
                    <span>Average: 18%</span>
                    <span>KuhnAI Clients: 32%</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-zinc-800">Decision Speed</h3>
                  <div className="w-full bg-zinc-100 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#2A6B74] h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-zinc-500">
                    <span>Average: 3-5 days</span>
                    <span>KuhnAI Clients: 4-12 hours</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-zinc-800">Cost Reduction</h3>
                  <div className="w-full bg-zinc-100 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#2A6B74] h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-zinc-500">
                    <span>Average: 10%</span>
                    <span>KuhnAI Clients: 24%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f8f5] rounded-xl p-8 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-4 text-zinc-800">Start Making Data-Driven Decisions</h2>
            <p className="text-zinc-700 mb-6 max-w-lg">
              Our team will help you implement a BI solution tailored to your unique business needs and objectives.
            </p>
            {isMounted && (
              <Button
                size="lg"
                className="bg-[#2A6B74] text-white hover:bg-[#215760] rounded-full"
              >
                Request a Demo
              </Button>
            )}
          </div>
        </div>
      </main>
    </LayoutWithSidebar>
  );
}
