// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = url => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track tool usage
export const trackToolUsage = (toolName, action = "used") => {
  event({
    action: action,
    category: "Tool Usage",
    label: toolName,
  });
};

// Track form submissions
export const trackFormSubmission = formName => {
  event({
    action: "submit",
    category: "Form",
    label: formName,
  });
};

// Track downloads
export const trackDownload = fileName => {
  event({
    action: "download",
    category: "File",
    label: fileName,
  });
};
