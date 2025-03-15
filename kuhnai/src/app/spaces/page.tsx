'use client';

import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export default function Spaces() {
  return (
    <LayoutWithSidebar>
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Spaces</h1>
            <p className="text-zinc-600">Collaborate and organize your research</p>
          </div>
          <Button className="bg-[#2A6B74] hover:bg-[#215760]">
            <Plus className="mr-2 h-4 w-4" /> New Space
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample spaces */}
          <SpaceCard
            title="AI Research"
            description="Collection of research papers and notes on artificial intelligence"
            updatedAt="Updated 2 days ago"
            itemCount={12}
          />

          <SpaceCard
            title="Project Ideas"
            description="Brainstorming for new project concepts"
            updatedAt="Updated yesterday"
            itemCount={8}
          />

          <SpaceCard
            title="Learning Resources"
            description="Tutorials, courses, and materials for learning"
            updatedAt="Updated 5 days ago"
            itemCount={24}
          />

          <CreateSpaceCard />
        </div>
      </main>
    </LayoutWithSidebar>
  );
}

function SpaceCard({
  title,
  description,
  updatedAt,
  itemCount
}: {
  title: string;
  description: string;
  updatedAt: string;
  itemCount: number;
}) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-20 bg-zinc-50 rounded-md flex items-center justify-center border border-zinc-100">
          <span className="text-sm text-zinc-400">{itemCount} items</span>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-zinc-500">
        {updatedAt}
      </CardFooter>
    </Card>
  );
}

function CreateSpaceCard() {
  return (
    <Card className="border-dashed border-zinc-300 hover:shadow-md transition-shadow flex items-center justify-center h-[215px] cursor-pointer">
      <div className="text-center">
        <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Plus className="h-6 w-6 text-zinc-400" />
        </div>
        <p className="font-medium text-zinc-700">Create a new space</p>
      </div>
    </Card>
  );
}
