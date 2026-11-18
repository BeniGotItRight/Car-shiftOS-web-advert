import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../articles";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `https://carshiftos.co.ke/insights/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Car ShiftOS | ${article.seoTitle}`,
      description: article.metaDescription,
      url,
      siteName: "Car ShiftOS",
      images: [
        {
          url: article.image.src,
          width: 1200,
          height: 630,
          alt: article.image.alt,
        },
      ],
      locale: "en_KE",
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `Car ShiftOS | ${article.seoTitle}`,
      description: article.metaDescription,
      images: [article.image.src],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const url = `https://carshiftos.co.ke/insights/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `https://carshiftos.co.ke${article.image.src}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: `https://carshiftos.co.ke${article.author.href}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Car ShiftOS",
      logo: {
        "@type": "ImageObject",
        url: "https://carshiftos.co.ke/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticlePageClient article={article} />
    </>
  );
}
