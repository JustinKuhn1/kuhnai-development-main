'use client';

import { useEffect, useState } from 'react';
import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';

export default function AutomationSolution() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LayoutWithSidebar>
      <main className="p-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
            Process Automation Solutions
          </h1>

          <p className="text-lg text-zinc-700 mb-8">
            Streamline your business operations with KuhnAI's intelligent process automation solutions. Reduce manual tasks, eliminate errors, and free your team to focus on high-value work.
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-zinc-100">
            <h2 className="text-xl font-semibold mb-4 text-zinc-800">Key Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2A6B74] mt-1"></div>
                <span className="ml-4 text-zinc-700">Reduce operational costs by up to 40%</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2A6B74] mt-1"></div>
                <span className="ml-4 text-zinc-700">Accelerate processing times by 65-80%</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2A6B74] mt-1"></div>
                <span className="ml-4 text-zinc-700">Eliminate manual errors and improve data accuracy</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2A6B74] mt-1"></div>
                <span className="ml-4 text-zinc-700">Scale operations without proportional increases in staffing</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Document Processing</h3>
              <p className="text-zinc-700">Automatically extract, classify, and process data from documents using advanced AI recognition.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Workflow Automation</h3>
              <p className="text-zinc-700">Create intelligent workflows that route information, trigger actions, and notify stakeholders.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Data Validation</h3>
              <p className="text-zinc-700">Ensure data quality with automated validation rules and exception handling.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Integration Hub</h3>
              <p className="text-zinc-700">Connect with your existing systems and third-party applications through our flexible API.</p>
            </div>
          </div>

          <div className="bg-[#f8f8f5] rounded-xl p-8 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-4 text-zinc-800">Ready to automate your business processes?</h2>
            <p className="text-zinc-700 mb-6 max-w-lg">
              Our team will analyze your current workflows and identify the highest-impact automation opportunities.
            </p>
            {isMounted && (
              <Button
                size="lg"
                className="bg-[#2A6B74] text-white hover:bg-[#215760] rounded-full flex items-center gap-2"
              >
                <CalendarClock className="h-4 w-4" />
                Schedule a Consultation
              </Button>
            )}
          </div>
        </div>
      </main>
    </LayoutWithSidebar>
  );
}
