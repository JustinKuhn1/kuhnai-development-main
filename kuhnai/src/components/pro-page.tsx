import React from 'react';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

export function ProPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <span className="text-3xl font-semibold">Kuhn</span>
          <span className="text-3xl font-semibold text-[#2A6B74] ml-1">AI Pro</span>
        </div>
      </div>

      <div className="mb-12 text-center">
        <p className="text-xl text-zinc-700 max-w-3xl mx-auto">
          KuhnAI Pro is the most powerful way to search the internet with unlimited Pro Search, upgraded AI models, unlimited file upload, image generation, custom knowledge hubs, and collaborative spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Standard Plan */}
        <div className="border border-zinc-200 rounded-xl bg-white p-6">
          <h2 className="text-xl font-semibold mb-1">Standard</h2>
          <p className="text-zinc-600 mb-6">Start for free, no credit card needed.</p>

          <div className="mb-6">
            <div className="text-4xl font-bold">Free</div>
            <div className="text-zinc-600">Forever</div>
          </div>

          <Button
            className="w-full bg-zinc-100 text-zinc-800 hover:bg-zinc-200 mb-6"
          >
            Continue with Free
          </Button>

          <ul className="space-y-3">
            <PlanFeature text="Unlimited free searches" />
            <PlanFeature text="3 Pro searches per day" />
            <PlanFeature text="Fast free AI model" />
            <PlanFeature text="Upload 3 files per day" />
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="border border-zinc-200 rounded-xl bg-white p-6">
          <h2 className="text-xl font-semibold mb-1">Professional</h2>
          <p className="text-zinc-600 mb-6">Unlock the full capabilities of KuhnAI and enjoy new perks as they are added.</p>

          <div className="mb-6">
            <div className="text-4xl font-bold">$20</div>
            <div className="text-zinc-600">Monthly</div>
          </div>

          <Button
            className="w-full bg-[#2A6B74] hover:bg-[#215760] mb-6"
          >
            Continue with Pro
          </Button>

          <ul className="space-y-3">
            <PlanFeature text="Unlimited free searches" />
            <PlanFeature text="300+ Pro searches per day" />
            <PlanFeature text="Choose a smarter AI: pick from advanced models" />
            <PlanFeature text="Upload unlimited files" />
            <PlanFeature text="Search your files in Spaces" />
            <PlanFeature text="Custom knowledge hubs and collaborative spaces" />
          </ul>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="border border-zinc-200 rounded-lg p-4 flex items-center gap-4 max-w-xl">
          <div className="text-zinc-600">Want KuhnAI for your team or business?</div>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

function PlanFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="h-5 w-5 text-[#2A6B74] flex-shrink-0 mt-0.5" />
      <span className="text-zinc-700">{text}</span>
    </li>
  );
}
