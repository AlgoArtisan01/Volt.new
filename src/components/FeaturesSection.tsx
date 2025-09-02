import { Cpu, Code, Zap, FlaskConical, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Generation',
      description:
        'Describe your website in natural language and watch as Volt generates all the code and assets for you.',
    },
    {
      icon: <Code className="w-6 h-6 text-teal-400" />,
      title: 'Interactive Editor',
      description:
        'Make precise adjustments with our fully-featured code editor with syntax highlighting and autocompletion.',
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: 'Reprompt and Edit',
      description:
        'Easily reprompt or edit your website to get the perfect design and functionality you desire.',
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-cyan-400" />,
      title: 'WebContainer Technology',
      description:
        'Run your web applications directly in the browser with our cutting-edge WebContainer technology.',
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      title: 'Step-by-Step Guidance',
      description:
        'Follow our intuitive step-by-step process to bring your web application from concept to completion.',
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Download and Deploy',
      description:
        'Easily download your generated website as a zip file and host it on any platform of your choice.',
    },
  ];

  return (
    <motion.section
      id="features"
      className="relative z-10"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center text-3xl font-bold mt-20">
        <h1 className="bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
          Powerful Features!
        </h1>
      </div>
      <div className="text-center text-lg text-gray-400 mt-4">
        <h3>
          Volt is a powerful tool that combines the best of AI and web
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 text-center px-4 sm:px-0 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-left md:ml-7 border border-gray-800 rounded-lg p-5 bg-gray-900/40 backdrop-blur-sm hover:border-teal-500/50 transition-all"
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              {/* gradient badge wrapper */}
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400">
                <div className="bg-gray-900 p-1 rounded-md">
                  {feature.icon}
                </div>
              </div>
              <div className="text-md mb-1 font-semibold bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                {feature.title}
              </div>
            </div>
            <div className="font-regular max-w-sm text-sm text-gray-400 mt-1">
              {feature.description}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
