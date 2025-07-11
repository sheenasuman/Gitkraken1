"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Video from "../../components/includes/Video";
import GitkrakenAI from "../../components/includes/GitkrakenAI";
import Companylogos from "../../components/includes/Companylogos";
import Downloadbutton from "../../components/includes/Downloadbutton";
import Featurecards from "../../components/includes/Featurecards";
import Navbar from "../../components/includes/Navbar";

export default function GitKrakenHero() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="text-center px-4 sm:px-6 md:px-8 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-[39px] font-bold leading-tight md:leading-[72px]">
          Smarter Workflows. Built-In AI. Better Developer Experience.
        </h1>
        <p className="text-base md:text-lg font-bold text-gray-300 mt-4">
          GitKraken AI works for you to seamlessly orchestrate your workflows
        </p>
        <div className="mt-6 flex flex-col items-center gap-8">
          <Downloadbutton />
          <Video />
          <GitkrakenAI />
        </div>
        <h2 className="text-lg font-bold mt-10">
          Not Just for Solo Devs. Solving Git Problems for 100K+ Dev Teams
        </h2>
        <Companylogos />
        <Featurecards />
        <Navbar />
      </section>
      {/* VISUALIZATION SECTION */}
      <section className="px-4 sm:px-6 py-12 max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6">
        <Image src="/images/e321.png" alt="Focus Icon" width={40} height={30} />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Enabling Developers to Quickly Visualize Complex Data, Code, and Progress
          </h2>
          <h3 className="text-sm font-semibold uppercase text-gray-300">Visualize</h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Visualizing complex data sets is a major time saver and it's often a real life saver.
          </h2>
        </div>
      </section>
      {/* BACKGROUND + FOREGROUND IMAGE */}
      <div className="relative w-full h-[60vh]">
        <Image src="/images/bg1.png" alt="Background" fill className="object-cover z-0" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <Image src="/images/a.png" alt="Foreground" width={873} height={700} className="w-full max-w-4xl rounded-lg shadow-2xl" />
        </div>
      </div>
      {/* COMMIT GRAPH */}
      <div className="mt-6 max-w-4xl mx-auto text-center text-gray-300 px-4">
        <p className="text-xl font-bold text-[#BCB5BE]">
          Our Commit Graph enables you to visualize complex Git history across your entire team in seconds
        </p>
        <p className="mt-2 text-sm">
          Available in <span className="text-purple-400">GitKraken Desktop</span>,{" "}
          <span className="text-purple-400">GitKraken CLI</span> or{" "}
          <span className="text-purple-400">GitLens</span>.
        </p>
      </div>
      {/* VISUAL FILE HISTORY */}
      <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col gap-8 items-center">
        <Image src="/images/fourth.png" alt="Visual File History" width={800} height={800} className="rounded-lg shadow-lg w-full max-w-4xl" />
        <div className="text-center text-gray-300">
          <p className="text-xl font-bold text-[#BCB5BE]">
            Use Visual File History to see the entire history of any file — when changes were made, how large they were, and who made them.
          </p>
          <p className="mt-2 text-sm">
            Available in <span className="text-purple-400">GitLens</span>.
          </p>
        </div>
      </section>
      {/* TEAM INSIGHTS */}
      <section className="px-4 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <Image src="/images/E1.png" alt="Icon" width={50} height={20} />
        <div className="max-w-3xl text-center md:text-left">
          <span className="text-sm uppercase text-gray-400">Visualise</span>
          <h2 className="text-2xl md:text-3xl font-bold">
            GitKraken makes the complex simple – saving developers hours per day with intuitive merge tools and interactive rebase.
          </h2>
        </div>
      </section>
      {/* TEAM CTA */}
      <section className="px-4 py-16 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto text-center md:text-left">
        <Image src="/images/E1.png" alt="Icon" width={50} height={50} />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            GitKraken’s legendary tools help teams of all sizes – including team leads and managers.
          </h1>
          <span className="text-sm text-purple-400">Explore Team Insights for Jira</span>
        </div>
      </section>
      <div className="flex justify-center py-12">
        <Image src="/images/d2.png" alt="Team Insights" width={600} height={400} className="rounded-lg" />
      </div>
      {/* GIT FACTS */}
      <section className="px-4 py-12 flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
        <Image src="/images/e11.png" alt="Vertical Icon" width={70} height={50} />
        <div>
          <p className="text-sm text-gray-400">Git Facts</p>
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="text-5xl font-bold">1,000,000,000+</span>
            <span className="text-2xl font-semibold">Commits Visualized with the GitKraken Commit Graph</span>
          </div>
          <p className="text-lg mt-4">
            How did Lansweeper cut PR review time by over 50%?{" "}
            <Link href="#" className="text-purple-300 hover:underline">Read their dev team’s story</Link>
          </p>
        </div>
      </section>
      {/* CONFERENCE CTA */}
      <section className="relative bg-black py-20">
        <div className="bg-[url('/images/bg5.png')] bg-cover bg-center max-w-6xl mx-auto px-6 py-16 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-0" />
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
      {/* FOCUS SECTION */}
      <section className="px-4 py-16 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        <Image src="/images/e29.png" alt="Focus Icon" width={60} height={50} />
        <div>
          <h2 className="text-3xl font-semibold">Helping Developers Focus to Save Time</h2>
          <p className="text-xl font-bold mt-4">
            Distractions and interruptions reduce developer productivity, not to mention their quality of life.
          </p>
        </div>
      </section>

      {/* LAUNCHPAD IMAGE OVERLAY */}
      <div className="relative w-full h-[60vh]">
        <Image src="/images/bg3.png" alt="Background" fill className="object-cover z-0" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <Image src="/images/e1.png" alt="Foreground" width={620} height={600} className="w-full max-w-4xl rounded-lg shadow-2xl" />
        </div>
      </div>

      {/* LAUNCHPAD TEXT */}
      <div className="text-center py-10 px-4 max-w-4xl mx-auto">
        <p className="text-2xl text-[#BCB5BE]">Turn down the noise with our Launchpad</p>
        <p className="text-sm">
          Available in <span className="text-purple-400">GitKraken CLI</span> or <span className="text-purple-400">GitLens</span>
        </p>
      </div>

      {/* FINAL CTA */}
      <div className="px-4 max-w-6xl mx-auto py-10 text-center">
        <Image src="/images/Group-19489.svg" alt="Labs" width={200} height={200} className="mx-auto rounded-lg" />
        <p className="text-lg mt-4 text-gray-300">
          Peek behind the curtain with <span className="font-bold text-white">GitKraken Labs</span>. See what our devs are building.
        </p>
        <a href="#" className="mt-4 inline-block text-sm text-purple-400 hover:underline">
          Tour GitKraken Labs for the latest in Git Innovation
        </a>
      </div>

      {/* MERGE TOOL VISUAL */}
      <Image src="/images/live.png" alt="Innovation" width={600} height={600} className="mx-auto rounded-lg shadow-lg" />

      <section className="relative h-[60vh] w-full overflow-hidden mt-10">
        <Image src="/images/bg2.png" alt="Background" fill className="object-cover z-0" />
        <div className="absolute z-10 inset-0 flex items-center justify-center px-4">
          <Image src="/images/c.png" alt="Foreground" width={873} height={700} className="rounded-lg shadow-2xl w-full max-w-4xl" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto text-center text-gray-300 mt-8 px-4">
        <p className="text-xl md:text-2xl text-[#BCB5BE]">
          Our powerful merge tool enables you to easily visualize changes, so you can untangle and resolve conflicts faster.
        </p>
        <p className="mt-2 text-sm">
          Available in <span className="text-purple-400">GitKraken Desktop</span>
        </p>
      </div>
    </main>
  );
}

