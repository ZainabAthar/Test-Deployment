"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is an AI text generator, exactly?",
    answer:
      "An AI text generator uses artificial intelligence to create text that resembles human writing based on the input or prompts provided.",
  },
  {
    question: "How does an AI text generator work?",
    answer:
      "AI text generators use machine learning models trained on vast amounts of data to predict and generate coherent, contextually relevant text.",
  },
  {
    question: "What can an AI writing generator do for me?",
    answer:
      "It can help generate content for blogs, marketing materials, emails, and more, saving time and boosting productivity.",
  },
  {
    question: "Will content writing be fully automated by AI writing generators?",
    answer:
      "While AI can assist in writing, human input is often needed to ensure creativity, accuracy, and alignment with brand voice.",
  },
  {
    question: "What languages do you support with AI writing?",
    answer:
      "AI writing generators support a variety of languages, including English, Spanish, French, German, and many more.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="w-full">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium flex justify-between items-center py-3 border-b border-gray-300 focus:outline-none"
              >
                <span>{item.question}</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Smooth Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="mt-2 text-md text-gray-600 px-2 sm:px-0">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
