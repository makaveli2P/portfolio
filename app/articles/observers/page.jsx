"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

const articleContent = `
# Observers: The Design Pattern That Keeps You in the Loop

In the vast, interconnected world of software development, keeping track of changes can be as challenging as monitoring the stock market. But just as traders rely on real-time data to make informed decisions, software developers have a secret weapon to handle change: the Observer design pattern. Let's explore how this pattern is the unsung hero behind many responsive and interactive applications.

## 1. The Problem: Staying Updated in a Changing World

Imagine you're building a stock market application. Prices fluctuate constantly, and you need to ensure your display reflects the latest information. You could check for updates continuously, but that's inefficient and resource-intensive. What you need is a way for your components to be notified whenever there's a change.

Enter the Observer pattern. This design pattern provides a clean and efficient way to stay updated, making it essential in scenarios where state changes need to be reflected immediately.

## 2. The Solution: Observers and Subjects

At the heart of the Observer pattern are two main components: the Subject and the Observers. The Subject holds the data and knows when it changes. Observers register with the Subject to be notified of changes, ensuring they always have the latest information.

| Role     | Description                                      |
|----------|--------------------------------------------------|
| Subject  | Holds the data and notifies observers of changes |
| Observer | Registers with the subject to get updates        |

*Table: Key components of the Observer pattern*

## 3. The Implementation: Bringing Observers to Life

Now, let's see how we can put this pattern into action. We'll create a Subject, register some Observers, and watch as they get updated in real-time.

\`\`\`cpp
#include <iostream>
#include <vector>
#include <memory>

// Observer interface
class Observer {
public:
    virtual void update(float price) = 0;
};

// Subject class
class Subject {
    float price;
    std::vector<std::shared_ptr<Observer>> observers;
public:
    void registerObserver(std::shared_ptr<Observer> observer) {
        observers.push_back(observer);
    }

    void notifyObservers() {
        for (auto& observer : observers) {
            observer->update(price);
        }
    }

    void setPrice(float newPrice) {
        price = newPrice;
        notifyObservers();
    }
};

// Concrete Observer
class StockDisplay : public Observer {
    std::string name;
public:
    StockDisplay(const std::string& displayName) : name(displayName) {}

    void update(float price) override {
        std::cout << name << " updated with new price: " << price << std::endl;
    }
};

int main() {
    auto subject = std::make_shared<Subject>();

    auto display1 = std::make_shared<StockDisplay>("Display 1");
    auto display2 = std::make_shared<StockDisplay>("Display 2");

    subject->registerObserver(display1);
    subject->registerObserver(display2);

    subject->setPrice(100.0f); // Both displays get updated
    subject->setPrice(105.5f); // Both displays get updated again

    return 0;
}
\`\`\`

When the price changes, all registered displays receive the update, ensuring they always show the latest information. This decouples the components, making the system more flexible and easier to maintain.

## 4. The Benefits: Why Use the Observer Pattern?

The Observer pattern offers several benefits that make it a valuable tool in a developer's arsenal:

- **Decoupling:** Subjects and Observers are loosely coupled. Changes to the Subject don't directly affect Observers and vice versa.
- **Scalability:** Adding new Observers is straightforward. You can expand your system without significant changes to existing code.
- **Efficiency:** Observers are only notified of relevant changes, reducing unnecessary computations and checks.

## 5. Real-World Applications: Where Observers Shine

The Observer pattern is prevalent in many real-world applications:

- 🎨 User Interfaces
- ⚙️ Event Handling Systems
- 🌐 Distributed Systems
- 📊 Real-Time Data Displays
- 🔄 Change Management Systems

## Conclusion: Observers – The Silent Guardians of Change

In the dynamic world of software development, the Observer design pattern stands as a vigilant sentinel, ensuring that components stay informed and synchronized. Its ability to efficiently manage changes makes it indispensable in creating responsive and interactive applications.

Whether you're building a stock market tracker, a real-time dashboard, or a sophisticated event-handling system, the Observer pattern is your go-to solution for keeping everything in the loop. Embrace the power of Observers and let your applications thrive in the ever-changing landscape of technology.

Remember: In the realm of software, staying updated is not just a necessity—it's a strategy for success. Happy coding!
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
