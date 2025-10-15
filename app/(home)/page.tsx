import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import GradientText from "@/components/ui/GradientText";
import Prism from "@/components/ui/Prism";
import { BookOpen, FileText, Code, Search } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1 relative">
      {/* Prism Background */}
      <div className="absolute inset-0 -z-10">
        <Prism
          animationType="rotate"
          timeScale={0.2}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.2}
          glow={0.8}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <GradientText
            className="text-4xl md:text-6xl font-bold mb-6"
            colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]}
            animationSpeed={6}
          >
            技术笔记与文档
          </GradientText>

          <p className="text-xl md:text-2xl text-fd-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            记录学习历程，分享技术心得，构建知识体系
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/docs/ue5"
              className={buttonVariants({
                variant: "primary",
                className: "px-8 py-3 text-lg font-semibold",
              })}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              开始探索
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
