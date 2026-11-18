"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Article } from "../articles";

function AuthorAvatar({ name, className }: { name: string; className?: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div
      className={`rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 ${className ?? "size-11"}`}
    >
      {initial}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlePageClient({ article }: { article: Article }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link
            href="/insights"
            className="flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            &larr; Back to Insights
          </Link>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
            {article.category}
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-500">{article.readTime}</span>
          </span>
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-black mb-0 tracking-tighter leading-[1.05]">
            {article.title}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 mb-12"
            >
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover"
              />
            </motion.div>

            <article className="max-w-[720px] space-y-6">
              {article.content.map((block, i) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={i} className="text-lg text-slate-300 font-light leading-relaxed">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="text-2xl sm:text-3xl font-black tracking-tight text-white pt-6">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  const ListTag = block.ordered ? "ol" : "ul";
                  return (
                    <ListTag key={i} className="space-y-3 pl-1">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex gap-3 text-lg text-slate-300 font-light leading-relaxed">
                          <span className="text-blue-500 font-bold shrink-0">
                            {block.ordered ? `${ii + 1}.` : "•"}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ListTag>
                  );
                }
                if (block.type === "cta") {
                  return (
                    <div
                      key={i}
                      className="mt-10 p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                    >
                      <p className="text-xl font-bold text-white">{block.lead}</p>
                      <Link
                        href={block.href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-colors shrink-0"
                      >
                        {block.linkText}
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  );
                }
                return null;
              })}
            </article>
          </div>

          <aside className="lg:sticky lg:top-32 h-fit space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Published by</p>
              <div className="flex items-center gap-3 mb-4">
                <AuthorAvatar name={article.author.name} />
                <div>
                  <Link
                    href={article.author.href}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {article.author.name}
                  </Link>
                  <p className="text-xs text-slate-500">{formatDate(article.publishedAt)}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Car ShiftOS is the dealer management system built for independent car yards in Kenya.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">
              <p className="text-base font-bold text-white mb-4">See everything Car ShiftOS does</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm text-white transition-colors"
              >
                Explore the platform
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
