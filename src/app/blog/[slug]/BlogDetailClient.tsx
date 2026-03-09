"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { BlogBanner } from "@/components/ProjectMockup";
import {
  FadeIn,
  TextReveal,
  MagneticButton,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrapper";
import type { BlogPost } from "@/data/blogs";

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-2 mb-6 ml-4">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headers = tableRows[0];
      const rows = tableRows.slice(2); // skip separator row
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto mb-6 rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5">
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left text-white font-semibold">
                    {h.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-400">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.includes("|") && line.trim().startsWith("|")) {
      flushList();
      inTable = true;
      const cells = line.split("|").filter((c) => c.trim() !== "");
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headings
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl md:text-2xl font-bold text-white mt-8 mb-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
      continue;
    }

    // List items
    if (line.startsWith("- ") || line.startsWith("* ")) {
      inList = true;
      listItems.push(line.replace(/^[-*] /, ""));
      continue;
    }
    if (/^\d+\. /.test(line)) {
      inList = true;
      listItems.push(line.replace(/^\d+\. /, ""));
      continue;
    }

    // If we were in a list, flush it
    if (inList && line.trim() === "") {
      flushList();
      continue;
    }
    if (inList && !line.startsWith("- ") && !line.startsWith("* ") && !/^\d+\. /.test(line)) {
      flushList();
    }

    // Empty line
    if (line.trim() === "") {
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="text-gray-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
  }

  flushList();
  flushTable();

  return <>{elements}</>;
}

export default function BlogDetailClient({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mb-4">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors ml-auto">
                <Share2 size={14} />
                Share
              </button>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Banner Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <BlogBanner
              gradient={post.gradient}
              icon={post.bannerIcon}
              elements={post.bannerElements}
            />
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose-custom">
              <MarkdownContent content={post.content} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Author + Share */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                PW
              </div>
              <div className="text-center sm:text-left flex-1">
                <h4 className="font-semibold text-white">PulseWeb Technologies</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Our team of 10+ developers, designers, and strategists share insights
                  from building 150+ digital products for businesses worldwide.
                </p>
              </div>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full flex-shrink-0"
                >
                  Work With Us
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">More Articles</h2>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {relatedPosts.map((related) => (
              <StaggerItem key={related.slug}>
                <Link href={`/blog/${related.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-2xl bg-surface border border-border hover:border-primary/20 overflow-hidden transition-all cursor-pointer group h-full flex flex-col"
                  >
                    <div className="p-3">
                      <BlogBanner
                        gradient={related.gradient}
                        icon={related.bannerIcon}
                        elements={related.bannerElements}
                      />
                    </div>
                    <div className="p-6 pt-3 flex-1 flex flex-col">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                        <span>{related.date}</span>
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
