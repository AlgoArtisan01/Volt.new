import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { cn } from "../utils/cn";

export function FaqSection() {
  const faqs = [
    {
      question: "How does Volt turn my prompts into a website?",
      answer:
        "Volt’s AI reads your description, understands your intent, and instantly generates a functional website with clean code that matches your vision.",
    },
    {
      question: "Can I customize the generated website?",
      answer:
        "Yes! You can tweak every detail using Volt’s built-in code editor. Your updates reflect in real-time, giving you full creative control.",
    },
    {
      question: "What kind of websites can I create with Volt?",
      answer:
        "Volt is versatile—you can build landing pages, portfolios, blogs, e-commerce stores, dashboards, and more, all tailored to your needs.",
    },
    {
      question: "Do I need coding experience to use Volt?",
      answer:
        "Not at all. Volt is beginner-friendly, so anyone can create in minutes. If you’re a developer, you can dive deeper and fine-tune with custom code.",
    },
    {
      question: "How do I deploy my website?",
      answer:
        "Volt makes it easy—download your site as a ready-to-host package and deploy with one click to platforms like GitHub Pages, Netlify, or Vercel.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-30 relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              FAQ's
            </h2>
            <p className="text-lg text-gray-400">
              Find answers to common questions about Volt.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
              initial={{ filter: "blur(10px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-teal-500/50">
                      <span className="text-base font-medium bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-cyan-400 transition-transform",
                          open ? "transform rotate-180" : ""
                        )}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-6 py-2 text-sm bg-gray-900/30 backdrop-blur-sm text-gray-300">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
