"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

const articleContent = `
# Why C++: The Language That Refuses to Retire

In a world where new programming languages pop up faster than startups in Silicon Valley, C++ stands tall like a digital Colossus. You might think this 40-year-old language would be ready for retirement, but C++ is having its second (or third, or fourth) wind. Let's dive into why C++ is more relevant than ever and why it's the secret sauce in many of today's cutting-edge technologies.

## 1. Speed Demon: C++ and High-Frequency Trading

Imagine you're in a drag race, but instead of cars, you're racing financial algorithms. In this high-stakes world of High-Frequency Trading (HFT), every nanosecond counts. C++ is the nitro boost that traders rely on.

| Language | Execution Time (ns) |
|----------|---------------------|
| C++      | 0.4                 |
| Java     | 0.8                 |
| Python   | 10                  |

*Table: Comparison of execution times for a simple operation*

C++'s ultra-low latency capabilities make it the undisputed champion in HFT. When millions of dollars can be made or lost in microseconds, C++ is the trusty steed that traders ride into battle.

## 2. The Renaissance: C++ Standards Evolution

C++ isn't resting on its laurels. Since C++11, the language has been evolving faster than ever. Here's a quick timeline of recent C++ standards:

- C++11: The game-changer
- C++14: The tune-up
- C++17: The modernizer
- C++20: The revolutionary
- C++23: The innovator (coming soon!)

Each new standard brings features that make C++ more powerful, more expressive, and (believe it or not) easier to use. It's like your favorite superhero getting new powers with each sequel!

## 3. Versatility: From Microcontrollers to Supercomputers

C++ is the Swiss Army knife of programming languages. Need to program a tiny microcontroller? C++ has got you covered. Building software for a supercomputer? C++ is there for you. Here's where C++ shines:

- 🎮 Game Development
- 🚀 Aerospace Systems
- 🤖 Robotics
- 🧠 Machine Learning Libraries
- 💻 Operating Systems

## 4. Performance with Style: Modern C++

Gone are the days when C++ meant verbose, hard-to-read code. Modern C++ is sleek, expressive, and dare we say... sexy? Features like auto type deduction, lambda expressions, and smart pointers have made C++ code more readable and safer than ever.

\`\`\`cpp
// Old C++
for (std::vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {
    std::cout << *it << std::endl;
}

// Modern C++
for (const auto& element : vec) {
    std::cout << element << std::endl;
}
\`\`\`

## 5. The Ecosystem: Libraries, Tools, and Community

C++ isn't just a language; it's a thriving ecosystem. With powerful libraries like Boost, Qt, and OpenCV, you're never coding alone. Add to that robust tools like CMake, Clang, and Visual Studio, and you've got a full-fledged development powerhouse at your fingertips.

## Conclusion: C++ – Here to Stay

In the ever-changing landscape of programming languages, C++ is like that cool rock formation that not only withstands erosion but gets more impressive over time. Its combination of performance, versatility, and continuous evolution ensures that C++ will remain a crucial language for years to come.

So, whether you're building the next big video game, programming a Mars rover, or trying to shave nanoseconds off your trading algorithms, C++ is ready to take on the challenge. It's not just surviving; it's thriving!

Remember: In C++, we don't just code. We craft, we optimize, and sometimes, we make the impossible possible. Happy coding!
`;

const WhyCpp = () => {
  const [readTime, setReadTime] = useState('');
  const [addedTime, setAddedTime] = useState('');

  useEffect(() => {
    // Calculate read time
    const wordCount = articleContent.split(/\s+/).length;
    const readTimeMinutes = Math.ceil(wordCount / 200); // Assuming 200 words per minute
    setReadTime(`${readTimeMinutes} min read`);


    const addedDate = new Date(); // Use the current date and time
    const now = new Date();
    const diffHours = Math.floor((now - addedDate) / (1000 * 60 * 60));
    setAddedTime(`${diffHours} hours ago`);
}, [articleContent]);


  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
              opacity: 1,
              transition: {delay: 1.8, duration: 0.35, ease: "easeIn"}
          }}
          className="flex flex-col gap-8"
        >
          {/* Back button */}
          <Link 
            href="/articles"
            className="flex items-center text-white hover:text-accent transition-all duration-300"
          >
            <BsArrowLeft className="mr-2" />
            Back to Articles
          </Link>

          {/* Article content */}
          <div className="text-white/80 space-y-6 pb-12">  {/* Added padding-bottom class */}
          <ReactMarkdown 
  components={{
    h1: ({node, ...props}) => (
      <>
        <h1 className="text-4xl font-bold text-accent my-4" {...props} />
        <div className="flex justify-between items-center mt-2 mb-6">
          <span className="text-white/60 text-sm">
            {readTime} · {addedTime}
          </span>
        </div>
      </>
    ),
    h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-white my-3" {...props} />,
    p: ({node, ...props}) => <p className="my-2" {...props} />,
    table: ({node, ...props}) => <table className="border-collapse border border-white/20 my-4" {...props} />,
    th: ({node, ...props}) => <th className="border border-white/20 p-2" {...props} />,
    td: ({node, ...props}) => <td className="border border-white/20 p-2" {...props} />,
    code: ({node, inline, ...props}) => 
      inline ? (
          <code className="bg-gray-800 rounded px-1" {...props} />
      ) : (
          <code className="block bg-gray-800 p-4 rounded my-4" {...props} />
      ),
  }}
>
  {articleContent}
</ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCpp;
