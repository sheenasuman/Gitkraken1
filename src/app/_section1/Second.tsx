"use client";
import { ChevronDown, Monitor, Code, Terminal, Globe, Puzzle } from 'lucide-react';
import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';

export default function VisualizeSection() {
  const [isOpen, setIsOpen] = useState(false);
  const tools = [
    { name: 'GitKraken Desktop', icon: <Monitor size={18} /> },
    { name: 'GitLens for VS Code', icon: <Code size={18} /> },
    { name: 'GitKraken CLI', icon: <Terminal size={18} /> },
    { name: 'GitKraken.dev', icon: <Globe size={18} /> },
    { name: 'GitKraken Browser Extension', icon: <Puzzle size={18} /> },
  ];

  return (
    <main className="bg-black text-white px-4 md:px-6 lg:px-10">
      {/* Background and Foreground Image Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image src="/images/bg2.png" alt="Background" fill className="object-cover z-0" />
        <div className="absolute z-10 inset-0 flex items-center justify-center px-4">
          <Image src="/images/c.png" alt="Foreground" width={873} height={700} className="rounded-lg shadow-2xl w-full max-w-4xl" />
        </div>
      </section>

      {/* Merge Tool Description */}
      <div className="max-w-4xl mx-auto text-center text-gray-300 mt-8">
        <p className="text-xl md:text-2xl text-[#BCB5BE]">
          Our powerful merge tool enables you to easily visualize changes, so you can untangle and resolve conflicts faster.
        </p>
        <p className="mt-2 text-sm">
          Available in <span className="text-purple-400">GitKraken Desktop</span>
        </p>
      </div>

      {/* Team Insights Section */}
      <section className="py-16 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <Image src="/images/E1.png" alt="Icon" width={50} height={50} />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            And GitKraken’s legendary tools aren’t just for devs. We cater to teams of all sizes – and help team leads and managers focus on what’s most important.
          </h1>
          <span className="text-sm text-purple-400 mt-2 block">Explore Team Insights for Jira</span>
        </div>
      </section>

      {/* Team Insights Image */}
      <div className="flex justify-center py-10">
        <Image src="/images/d2.png" alt="Team Insights" width={600} height={400} className="rounded-lg" />
      </div>

      {/* Git Facts Section */}
      <section className="py-16 flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto">
        <Image src="/images/e11.png" alt="Icon" width={70} height={50} />
        <div>
          <p className="text-sm font-semibold text-gray-400 mb-2">Git Facts</p>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <span className="text-5xl font-bold text-white">1,000,000,000+</span>
            <span className="text-2xl font-semibold text-white">Commits Visualized with the GitKraken Commit Graph</span>
          </div>
          <p className="mt-4 text-lg">
            How did Lansweeper cut PR review time by over 50% with GitKraken Desktop?{' '}
            <Link href="#" className="text-purple-300 hover:underline">Read their dev team’s story</Link>
          </p>
        </div>
      </section>

      {/* Virtual Conference Section */}
      <section className="relative bg-black py-20">
        <div className="bg-[url('/images/bg5.png')] bg-cover bg-center max-w-6xl mx-auto px-6 py-16 rounded-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Image src="/images/V.png" alt="git.kon" width={100} height={100} className="rounded-lg" />
              <h2 className="text-2xl md:text-3xl mt-4">Elevating developer experience</h2>
              <p className="text-sm text-gray-300">Join us on December 10–11, 2024</p>
            </div>
            <a
              href="#"
              className="border border-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 text-sm font-medium"
            >
              Watch on-demand
            </a>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-16 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        <Image src="/images/e29.png" alt="Focus Icon" width={60} height={50} />
        <div>
          <h2 className="text-3xl font-semibold">Helping Developers Focus to Save Time</h2>
          <p className="text-xl font-bold mt-4">
            Distractions and interruptions reduce developer productivity, not to mention their quality of code and quality of life.
          </p>
        </div>
      </section>

      {/* Background with Foreground Overlay */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image src="/images/bg3.png" alt="Background" fill className="object-cover z-0" />
        <div className="absolute z-10 inset-0 flex items-center justify-center px-4">
          <Image src="/images/e1.png" alt="Foreground" width={620} height={600} className="rounded-lg shadow-2xl w-full max-w-4xl" />
        </div>
      </div>

      {/* Launchpad Section */}
      <div className="py-10 text-center max-w-4xl mx-auto">
        <p className="text-2xl text-[#BCB5BE]">
          Turn down the noise with our Launchpad, helping you find & extend your flow state
        </p>
        <p className="text-sm">
          Available in <span className="text-purple-400">GitKraken CLI</span> or <span className="text-purple-400">GitLens</span>
        </p>
      </div>

      {/* Final Git Facts Section */}
      <section className="bg-black text-white px-4 py-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Image src="/images/e11.png" alt="Icon" width={75} height={40} />
          <div>
            <p className="text-md text-gray-400 font-semibold mb-2">Git Facts</p>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-[48px] md:text-[59px] font-bold">4 out of 5</h2>
              <p className="text-lg font-semibold">
                developers say time lost to distraction & interruptions are among their biggest pain points
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold">
              How did Johnson Controls improve their developer experience?{' '}
              <a href="#" className="text-purple-400 hover:underline">Read their dev team’s story</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
