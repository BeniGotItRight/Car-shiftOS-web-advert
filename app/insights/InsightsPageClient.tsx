"use client";

import Link from "next/link";
import Image from "next/image";
import { articles, type Article } from "./articles";

function AuthorAvatar({ name, className }: { name: string; className?: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div
      className={`rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 ${className ?? "size-8 text-xs"}`}
    >
      {initial}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Repeating bento pattern so tiles interlock irregularly instead of a flat
// uniform grid, however many articles exist. Index 0 of every 5-tile cycle
// is the "hero" tile for that row group.
const TILE_SPANS = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2", // big tile
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2", // tall tile
  "sm:col-span-2 lg:col-span-1 lg:row-span-1",
];

function ArticleTile({ article, large }: { article: Article; large: boolean }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col h-full rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-colors"
    >
      <div className="relative flex-1 min-h-[160px]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className={`flex flex-col text-left ${large ? "p-8" : "p-6"}`}>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
          {article.category} <span className="text-slate-700">&bull;</span> {article.readTime}
        </span>
        <h2
          className={`font-bold leading-snug mb-4 group-hover:text-blue-400 transition-colors text-left ${
            large ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {article.title}
        </h2>
        {large && (
          <p className="text-slate-400 font-light leading-relaxed mb-5 line-clamp-2">
            {article.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-center gap-2.5">
          <AuthorAvatar name={article.author.name} className={large ? "size-10" : undefined} />
          <div className="text-left">
            <p className="text-sm font-semibold text-white leading-tight">{article.author.name}</p>
            <p className="text-xs text-slate-500 leading-tight">{formatDate(article.publishedAt)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function InsightsPageClient() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6">
            Insight<span className="text-blue-500">s.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            Practical guidance for running a car dealership in Kenya: inventory, sales, workshop operations and growing your yard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px] gap-6">
          {articles.map((article, i) => {
            const span = TILE_SPANS[i % TILE_SPANS.length];
            const large = i % TILE_SPANS.length === 0;
            return (
              <div key={article.slug} className={span}>
                <ArticleTile article={article} large={large} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
