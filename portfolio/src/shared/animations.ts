export const appearFromLeft = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { delay: 0.3, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  export const appearFromRight = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { delay: 0.3, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  export const appearFromBottom = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
    transition: { delay: 0.2, duration: 0.3 },
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  export const appearFromTop = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
    transition: { delay: 0.2, duration: 0.3 },
    variants: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  
  export const slowTransition = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
    transition: { delay: 0.3, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0 },
    },
  };