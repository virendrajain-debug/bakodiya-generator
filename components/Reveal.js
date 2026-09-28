"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  tag = "div",
  delay = 0,
  y = 26,
  immediate = false,
  className,
  style,
  amount = 0.12,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[tag] || motion.div;

  if (reduce) {
    const Static = tag;
    return (
      <Static className={className} style={style} {...rest}>
        {children}
      </Static>
    );
  }

  const from = { opacity: 0, y };
  const to = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, delay, ease: EASE };

  return (
    <MotionTag
      className={className}
      style={style}
      {...rest}
      initial={from}
      {...(immediate
        ? { animate: to }
        : { whileInView: to, viewport: { once: true, amount } })}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
