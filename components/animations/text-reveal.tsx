"use client"

import { motion } from "framer-motion"
import React from "react"

interface TextRevealProps {
  text: string | React.ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Component = "h1",
}: TextRevealProps) {
  // Check if text is string or React element
  const isString = typeof text === 'string';
  
  // Get text content for screen readers
  const textContent = isString ? text : 
    React.isValidElement(text) ? extractTextFromElement(text) : '';

  // Function to extract text from React element
  function extractTextFromElement(element: React.ReactNode): string {
    if (typeof element === 'string') return element;
    if (React.isValidElement(element)) {
      const children = element.props.children;
      if (typeof children === 'string') return children;
      if (Array.isArray(children)) {
        return children.map(child => extractTextFromElement(child)).join('');
      }
    }
    return '';
  }

  // Render string text with animation
  const renderAnimatedText = (text: string) => {
    const words = text.split(" ")

    return (
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%" },
                visible: {
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </motion.span>
    );
  };

  // Render React element with animation
  const renderAnimatedElement = (element: React.ReactNode): React.ReactNode => {
    if (typeof element === 'string') {
      return renderAnimatedText(element);
    }
    
    if (React.isValidElement(element)) {
      // Clone the element with animated children
      const newChildren = React.Children.map(element.props.children, (child) => {
        if (typeof child === 'string') {
          return renderAnimatedText(child);
        }
        return child;
      });
      
      return React.cloneElement(element, {}, newChildren);
    }
    
    return element;
  };

  return (
    <Component className={className}>
      <span className="sr-only">{textContent}</span>
      {isString ? renderAnimatedText(text as string) : renderAnimatedElement(text)}
    </Component>
  )
}

// Alternative simpler version
export function TextRevealSimple({
  text,
  className,
  delay = 0,
  as: Component = "h1",
}: TextRevealProps) {
  // If text is React element, wrap it in motion div
  if (React.isValidElement(text)) {
    return (
      <Component className={className}>
        <span className="sr-only">
          {React.isValidElement(text) ? 
            (text.props.children || '').toString() : 
            text.toString()
          }
        </span>
        <motion.div
          aria-hidden
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
        >
          {text}
        </motion.div>
      </Component>
    );
  }

  // Original string animation logic
  const words = (text as string).split(" ")

  return (
    <Component className={className}>
      <span className="sr-only">{text as string}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%" },
                visible: {
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </motion.span>
    </Component>
  )
}