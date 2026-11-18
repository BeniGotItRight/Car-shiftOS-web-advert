"use client";

import Link from "next/link";
import Image from "next/image";
import { articles } from "./articles";

function AuthorAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div className="size-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
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

export default function InsightsPageClient() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Intro tile */}
          <div className="flex flex-col justify-center rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-slate-900/40 backdrop-blur-xl p-8">
            <h1 className="text-3xl font-black tracking-tight mb-3">
              Insight<span className="text-blue-400">s.</span>
            </h1>
            <p className="text-slate-400 font-light leading-relaxed text-sm">
              Practical guidance for running a car dealership in Kenya: inventory, sales, workshop operations and growing your yard.
            </p>
          </div>

          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-colors"
            >
              <div className="relative aspect-video">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  {article.category} <span className="text-slate-700">&bull;</span> {article.readTime}
                </span>
                <h2 className="text-lg font-bold mb-4 leading-snug group-hover:text-blue-400 transition-colors text-left">
                  {article.title}
                </h2>
                <div className="mt-auto flex items-center gap-2.5">
                  <AuthorAvatar name={article.author.name} />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white leading-tight">{article.author.name}</p>
                    <p className="text-xs text-slate-500 leading-tight">{formatDate(article.publishedAt)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
