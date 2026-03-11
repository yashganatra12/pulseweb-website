"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Loader2, Check } from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  MagneticButton,
} from "@/components/animations/MotionWrapper";
import { BlogBanner } from "@/components/ProjectMockup";
import { allPosts, getFeaturedPost, getRegularPosts } from "@/data/blogs";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const posts = getRegularPosts();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      // Store in Firebase
      await addDoc(collection(db, "subscribers"), {
        email: email.trim(),
        createdAt: Timestamp.now(),
      });

      // Send email notification
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Blog
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6">
                Insights & <span className="text-gradient">Ideas</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expert perspectives on web development, design, technology, and
                digital strategy from the PulseWeb team.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <Link href={`/blog/${featuredPost.slug}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-3xl bg-surface border border-border hover:border-primary/30 overflow-hidden transition-colors cursor-pointer group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="min-h-[300px] flex items-center justify-center p-4">
                      <BlogBanner
                        gradient={featuredPost.gradient}
                        icon={featuredPost.bannerIcon}
                        elements={featuredPost.bannerElements}
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                        {featuredPost.category} — Featured
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-2xl bg-surface border border-border hover:border-primary/20 overflow-hidden transition-all cursor-pointer group h-full flex flex-col"
                  >
                    <div className="p-3">
                      <BlogBanner
                        gradient={post.gradient}
                        icon={post.bannerIcon}
                        elements={post.bannerElements}
                      />
                    </div>
                    <div className="p-6 pt-3 flex-1 flex flex-col">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Get the latest insights on web development, design, and tech
                delivered to your inbox. No spam, just value.
              </p>
              {status === "success" ? (
                <div className="flex items-center justify-center gap-2 text-green-400 font-medium">
                  <Check size={20} />
                  Thanks for subscribing! We&apos;ll be in touch.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
              )}
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
