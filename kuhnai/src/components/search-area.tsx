import React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Globe } from 'lucide-react';
import { Logo } from './ui/logo';

export function SearchArea() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 pt-12 lg:pt-0">
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-medium text-center mb-6 md:mb-12 text-zinc-800">
          What do you want to know?
        </h1>

        <div className="relative rounded-xl border border-zinc-200 bg-white p-3 md:p-4 shadow-sm">
          <Input
            placeholder="Ask anything..."
            className="border-0 shadow-none text-base md:text-lg py-4 md:py-6 focus-visible:ring-0 pr-20 md:pr-24"
          />
          <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full px-2 md:px-3 gap-1 border-zinc-200 text-xs md:text-sm">
                  <span>Auto</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Choose AI Model</h3>
                  <div className="space-y-3">
                    <button className="flex items-center justify-between w-full p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50">
                      <span className="font-medium">Auto</span>
                      <span className="text-sm text-zinc-500">Recommended</span>
                    </button>
                    <button className="flex items-center justify-between w-full p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50">
                      <span className="font-medium">Fast</span>
                      <span className="text-sm text-zinc-500">Quick responses</span>
                    </button>
                    <button className="flex items-center justify-between w-full p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50">
                      <span className="font-medium">Smart</span>
                      <span className="text-sm text-zinc-500">Pro feature</span>
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button className="rounded-full bg-[#2A6B74] hover:bg-[#215760] h-8 w-8 md:h-10 md:w-10 p-0">
              <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NewsCard
            title="KuhnAI Launches New Smart Assistant"
            imgSrc="https://web-assets.same.dev/2920704330/1731092161.jpeg"
            link="/article/kuhnai-smart-assistant"
          />
          <NewsCard
            title="Advanced Neural Networks"
            imgSrc="https://web-assets.same.dev/1963559767/4098292796.jpeg"
            link="/article/advanced-neural-networks"
          />
          <NewsCard
            title="AI Market Trends 2025"
            imgSrc="https://web-assets.same.dev/1520174748/261793855.jpeg"
            link="/article/ai-market-trends-2025"
          />
        </div>
      </div>

      <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 items-center justify-center text-xs md:text-sm">
        <a href="/pro" className="text-zinc-600 hover:text-zinc-900">Pro</a>
        <a href="/enterprise" className="text-zinc-600 hover:text-zinc-900">Enterprise</a>
        <a href="/api" className="text-zinc-600 hover:text-zinc-900">API</a>
        <a href="/blog" className="text-zinc-600 hover:text-zinc-900">Blog</a>
        <a href="/careers" className="text-zinc-600 hover:text-zinc-900">Careers</a>
      </div>
    </div>
  );
}

function NewsCard({ title, imgSrc, link }: { title: string, imgSrc: string, link: string }) {
  return (
    <a href={link} className="block rounded-xl overflow-hidden border border-zinc-200 hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] relative">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full"
          crossOrigin="anonymous"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm">{title}</h3>
      </div>
    </a>
  );
}