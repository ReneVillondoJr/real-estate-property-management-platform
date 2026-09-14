'use client';

import { useEffect, useRef, useState } from 'react';

import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Check,
  Clock3,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type MessageRole = 'assistant' | 'user';

type Message = {
  id: number;
  role: MessageRole;
  content: string;
};

type ConciergeCategory = {
  id: string;
  label: string;
  description: string;
  questions: string[];
};

const conciergeCategories: ConciergeCategory[] = [
  {
    id: 'buy',
    label: 'Find a home',
    description: 'Explore homes, property types, and what fits your needs.',
    questions: [
      'Can you help me find a three-bedroom home?',
      'Which area would be best for a growing family?',
      'What should I prioritize when choosing a home?',
      'What type of home would fit my needs best?',
    ],
  },
  {
    id: 'sell',
    label: 'Sell a property',
    description: 'Understand pricing, preparation, and the selling process.',
    questions: [
      'How should I prepare my home for sale?',
      'What can I do to make my property more appealing?',
      'How does the home selling process work?',
      'What factors affect my property value?',
    ],
  },
  {
    id: 'neighborhoods',
    label: 'Explore neighborhoods',
    description: 'Compare locations based on lifestyle and priorities.',
    questions: [
      'Which neighborhoods are best for families?',
      'What areas are convenient for commuting?',
      'Which areas have good access to shops and restaurants?',
      'How should I choose the right neighborhood?',
    ],
  },
  {
    id: 'budget',
    label: 'Budget & financing',
    description: 'Think through affordability and your realistic price range.',
    questions: [
      'How much should I budget for a home?',
      'How do I determine a realistic price range?',
      'What costs should I plan for when buying?',
      'How can I avoid stretching my budget too far?',
    ],
  },
  {
    id: 'viewing',
    label: 'Viewing & next steps',
    description: 'Get prepared for property visits and your next move.',
    questions: [
      'What should I prepare before viewing a property?',
      'What should I look for during a viewing?',
      'What questions should I ask at a property viewing?',
      'What happens after I find a home I like?',
    ],
  },
];

const responses = [
  {
    keywords: ['family', 'school', 'children', 'kids'],
    response:
      'For a growing family, I would start with the daily routine rather than the house itself. Look at school access, commute time, outdoor space, storage, and whether the floor plan can adapt as your needs change.',
  },
  {
    keywords: ['budget', 'afford', 'price', 'cost'],
    response:
      'A practical starting point is to keep your monthly housing cost comfortable alongside your other expenses. From there, compare your financing capacity with the property prices in the neighborhoods you prefer. I would rather narrow the search to a realistic range than stretch the budget for one property.',
  },
  {
    keywords: [
      'three-bedroom',
      'three bedroom',
      '3-bedroom',
      '3 bedroom',
      'bedroom',
    ],
    response:
      'A three-bedroom home gives you useful flexibility for guests, working from home, or future family needs. I would prioritize room proportions, storage, natural light, and how the living areas connect before focusing on the exact square footage.',
  },
  {
    keywords: ['viewing', 'view property', 'prepare', 'visit', 'tour'],
    response:
      'Before a viewing, I recommend having your financing position clear, knowing your non-negotiables, and deciding which practical details matter most to you. During the visit, pay attention to light, noise, storage, condition, and how the home feels at different times of day.',
  },
  {
    keywords: ['sell', 'selling', 'seller', 'property value', 'listing'],
    response:
      'When selling a property, the strongest starting point is understanding its current market position. Pricing, presentation, condition, photography, and how the property is positioned can all affect the result. I would focus on those together rather than looking at price alone.',
  },
  {
    keywords: ['neighborhood', 'neighbourhood', 'area', 'location', 'where'],
    response:
      'The right neighborhood usually comes down to lifestyle: commute, schools, restaurants, parks, shopping, and the pace of the area. Tell me what matters most in your day-to-day life and I can help you narrow the search.',
  },
];

function generateResponse(question: string) {
  const normalized = question.toLowerCase();

  const matchedResponse = responses.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword)),
  );

  return (
    matchedResponse?.response ??
    'That is a good place to start. I would look at your budget, preferred location, timeline, and must-have features together before narrowing the search. A focused shortlist usually makes the next step much easier.'
  );
}

function getTypingDelay(message: string) {
  const baseDelay = 900;
  const characterDelay = Math.min(message.length * 12, 2200);

  return baseDelay + characterDelay;
}

export function QuestionerAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');

  const [selectedCategory, setSelectedCategory] =
    useState<ConciergeCategory | null>(null);

  const [showCategories, setShowCategories] = useState(true);
  const [showNextActions, setShowNextActions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        'Welcome. I can help you explore homes, neighborhoods, budgets, selling, and the next steps in your property journey.',
    },
  ]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen && !showCategories && !selectedCategory) {
      requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
    }
  }, [isOpen, showCategories, selectedCategory]);

  const handleCategorySelect = (category: ConciergeCategory) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setShowNextActions(false);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setShowCategories(true);
    setShowNextActions(false);
  };

  const handleSuggestion = (suggestion: string) => {
    setQuestion(suggestion);
    setShowNextActions(false);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  const handleAskAnother = () => {
    setSelectedCategory(null);
    setShowCategories(false);
    setShowNextActions(false);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  const handleChooseAnotherTopic = () => {
    setSelectedCategory(null);
    setShowCategories(true);
    setShowNextActions(false);
  };

  const handleSubmit = () => {
    const trimmed = question.trim();

    if (!trimmed || isTyping) {
      return;
    }

    const response = generateResponse(trimmed);

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);

    setQuestion('');
    setSelectedCategory(null);
    setShowCategories(false);
    setShowNextActions(false);
    setIsTyping(true);

    const delay = getTypingDelay(response);

    timeoutRef.current = setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response,
      };

      setMessages((current) => [...current, assistantMessage]);

      setIsTyping(false);
      setShowNextActions(true);

      timeoutRef.current = null;
    }, delay);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleClose = () => {
    setIsOpen(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsTyping(false);
    setShowNextActions(false);
  };

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      {isOpen && (
        <div className='mb-3 flex w-[min(94vw,420px)] flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_28px_90px_rgba(20,28,24,0.18)]'>
          {/* Header */}
          <div className='border-b border-black/5 bg-[#f7f5ef] px-5 py-4'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center gap-3'>
                <div className='relative flex size-10 items-center justify-center rounded-full bg-[#252822] text-white'>
                  <Bot size={17} strokeWidth={1.6} />

                  <span className='absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-[#f7f5ef] bg-emerald-600' />
                </div>

                <div>
                  <p className='text-[9px] font-medium uppercase tracking-[0.2em] text-[#9a7650]'>
                    Real estate concierge
                  </p>

                  <div className='mt-0.5 flex items-center gap-2'>
                    <h3 className='text-sm font-semibold text-[#252822]'>
                      Morrow AI
                    </h3>

                    <span className='flex items-center gap-1 text-[10px] text-[#77756d]'>
                      <Clock3 size={11} strokeWidth={1.7} />
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <button
                type='button'
                onClick={handleClose}
                aria-label='Close AI concierge'
                className='flex size-8 items-center justify-center rounded-full border border-black/10 text-[#77756d] transition-colors hover:bg-white hover:text-[#252822]'
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Conversation */}
          <div className='max-h-[58vh] overflow-y-auto px-5 py-5'>
            <div className='space-y-4'>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === 'assistant' ?
                      'flex items-start gap-3'
                    : 'flex justify-end'
                  }
                >
                  {message.role === 'assistant' && (
                    <div className='mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f0eee8] text-[#9a7650]'>
                      <Sparkles size={13} strokeWidth={1.7} />
                    </div>
                  )}

                  <div
                    className={
                      message.role === 'assistant' ?
                        'max-w-[84%] rounded-2xl rounded-tl-md bg-[#f6f4ef] px-4 py-3'
                      : 'max-w-[84%] rounded-2xl rounded-tr-md bg-[#252822] px-4 py-3 text-white'
                    }
                  >
                    <p className='text-sm leading-6'>{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className='flex items-start gap-3'>
                  <div className='mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f0eee8] text-[#9a7650]'>
                    <Sparkles size={13} strokeWidth={1.7} />
                  </div>

                  <div className='rounded-2xl rounded-tl-md bg-[#f6f4ef] px-4 py-3'>
                    <div className='flex items-center gap-1.5'>
                      <span className='size-1.5 animate-bounce rounded-full bg-[#8d8b83] [animation-delay:-0.3s]' />
                      <span className='size-1.5 animate-bounce rounded-full bg-[#8d8b83] [animation-delay:-0.15s]' />
                      <span className='size-1.5 animate-bounce rounded-full bg-[#8d8b83]' />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main category picker */}
            {showCategories && !isTyping && (
              <div className='mt-6'>
                <p className='text-[9px] font-medium uppercase tracking-[0.18em] text-[#8a887f]'>
                  How can I help?
                </p>

                <p className='mt-1 text-xs text-[#77756d]'>
                  Choose a topic to get started.
                </p>

                <div className='mt-4 space-y-2'>
                  {conciergeCategories.map((category) => (
                    <button
                      key={category.id}
                      type='button'
                      onClick={() => handleCategorySelect(category)}
                      className='group flex w-full items-center justify-between gap-4 rounded-xl border border-black/8 bg-[#faf8f4] px-4 py-3.5 text-left transition-colors hover:border-[#9a7650]/40 hover:bg-[#f4f7f1]'
                    >
                      <div>
                        <p className='text-sm font-medium text-[#252822]'>
                          {category.label}
                        </p>

                        <p className='mt-0.5 text-xs leading-5 text-[#8a887f]'>
                          {category.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.6}
                        className='shrink-0 text-[#8a887f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selected category questions */}
            {selectedCategory && !showCategories && !showNextActions && (
              <div className='mt-6'>
                <button
                  type='button'
                  onClick={handleBackToCategories}
                  className='mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a887f] transition-colors hover:text-[#252822]'
                >
                  <ArrowLeft size={12} />
                  All topics
                </button>

                <p className='text-[9px] font-medium uppercase tracking-[0.18em] text-[#9a7650]'>
                  {selectedCategory.label}
                </p>

                <p className='mt-1 text-xs text-[#77756d]'>
                  Choose a question or write your own below.
                </p>

                <div className='mt-4 space-y-2'>
                  {selectedCategory.questions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type='button'
                      onClick={() => handleSuggestion(suggestion)}
                      className='group flex w-full items-center justify-between gap-3 rounded-xl border border-black/8 bg-[#faf8f4] px-3.5 py-3 text-left text-sm text-[#252822] transition-colors hover:border-[#9a7650]/40 hover:bg-[#f4f7f1]'
                    >
                      <span>{suggestion}</span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.6}
                        className='shrink-0 text-[#8a887f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Next actions */}
            {!isTyping && showNextActions && (
              <div className='mt-6'>
                <p className='text-[9px] font-medium uppercase tracking-[0.18em] text-[#8a887f]'>
                  What would you like to do next?
                </p>

                <div className='mt-3 grid gap-2 sm:grid-cols-2'>
                  <button
                    type='button'
                    onClick={handleAskAnother}
                    className='group flex items-center justify-between gap-3 rounded-xl border border-black/8 bg-[#faf8f4] px-3.5 py-3 text-left text-sm text-[#252822] transition-colors hover:border-[#9a7650]/40 hover:bg-[#f4f7f1]'
                  >
                    <span>Ask another question</span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      className='shrink-0 text-[#8a887f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    />
                  </button>

                  <button
                    type='button'
                    onClick={handleChooseAnotherTopic}
                    className='group flex items-center justify-between gap-3 rounded-xl border border-black/8 bg-[#faf8f4] px-3.5 py-3 text-left text-sm text-[#252822] transition-colors hover:border-[#9a7650]/40 hover:bg-[#f4f7f1]'
                  >
                    <span>Choose another topic</span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      className='shrink-0 text-[#8a887f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className='border-t border-black/5 bg-white p-4'>
            <div className='rounded-2xl border border-black/8 bg-[#faf9f6] p-2'>
              <Textarea
                ref={textareaRef}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                placeholder='Ask anything about homes, neighborhoods, selling, or buying...'
                className='min-h-[82px] resize-none border-0 bg-transparent px-2 py-2 text-sm shadow-none focus-visible:ring-0'
              />

              <div className='mt-2 flex items-center justify-between gap-3 px-1 pb-1'>
                <div className='flex items-center gap-2 text-[10px] text-[#8a887f]'>
                  {isTyping ?
                    <>
                      <span className='size-1.5 animate-pulse rounded-full bg-[#9a7650]' />
                      Morrow is thinking...
                    </>
                  : <>
                      <Check size={12} />
                      Enter to send
                    </>
                  }
                </div>

                <Button
                  type='button'
                  onClick={handleSubmit}
                  disabled={!question.trim() || isTyping}
                  className='rounded-full px-4 text-[10px] uppercase tracking-[0.14em]'
                >
                  Send
                  <Send size={13} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating launcher */}
      <button
        type='button'
        onClick={() => setIsOpen((current) => !current)}
        className='group flex items-center gap-2 rounded-full border border-white/15 bg-[#252822] px-4 py-2 text-white shadow-[0_18px_40px_rgba(20,28,24,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(20,28,24,0.28)]'
      >
        <span className='flex size-6 items-center justify-center rounded-full bg-white/10'>
          <Sparkles size={15} strokeWidth={1.7} />
        </span>

        <span className='text-sm font-medium'>
          {isOpen ? 'Close concierge' : 'Ask Morrow AI'}
        </span>

        <ArrowUpRight
          size={14}
          strokeWidth={1.7}
          className='text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
        />
      </button>
    </div>
  );
}
