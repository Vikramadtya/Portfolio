import siteMetadata from "@/lib/metadata";

const navLinks = [
  { key: 1, href: siteMetadata.blogLink, title: "Blog", shortcut: "⌘+B" },
  { key: 2, href: "/resume", title: "Resume", shortcut: "⌘+R" },
  { key: 3, href: "/about", title: "About", shortcut: "⌘+A" },
  { key: 4, href: "/projects", title: "Projects", shortcut: "⌘+P" },
];

export default navLinks;

export const dropDownMenuNavLinks = [
  { key: 1, href: "/", title: "Home", icon: "home", shortcut: "⌘+H" },
  { key: 2, href: "/resume", title: "Resume", icon: "resume", shortcut: "⌘+R" },
  { key: 3, href: "/about", title: "About", icon: "me", shortcut: "⌘+A" },
  {
    key: 4,
    href: "/projects",
    title: "Projects",
    icon: "wrenchAndHammer",
    shortcut: "⌘+P",
  },
  {
    key: 0,
    href: siteMetadata.blogLink,
    title: "Blog",
    icon: "memo",
    shortcut: "⌘+B",
  },
  { key: 5, href: "", title: "", icon: "", shortcut: "" },
  {
    key: 6,
    href: "/timeline",
    title: "Journey",
    icon: "rocket",
    shortcut: "⌘+J",
  },
  {
    key: 7,
    href: "/stats",
    title: "Statistic",
    icon: "stats",
    shortcut: "⌘+S",
  },
  {
    key: 8,
    href: "/snippets",
    title: "Snippets",
    icon: "snippet",
    shortcut: "⌘+X",
  },
  {
    key: 9,
    href: "/reading",
    title: "Reading",
    icon: "reading",
    shortcut: "⌘+V",
  },
  {
    key: 10,
    href: "/watching",
    title: "Watching",
    icon: "watching",
    shortcut: "⌘+W",
  },
  { key: 11, href: "/tools", title: "Tools", icon: "tool", shortcut: "⌘+T" },
  { key: 12, href: "/quotes", title: "Quotes", icon: "quote", shortcut: "⌘+Q" },
  {
    key: 13,
    href: "/photography",
    title: "Photography",
    icon: "photography",
    shortcut: "⌘+P",
  },
  { key: 14, href: "/now", title: "Now", icon: "now", shortcut: "⌘+N" },
  { key: 15, href: "", title: "", icon: "", shortcut: "" },
  {
    key: 16,
    href: siteMetadata.analyticsURL,
    title: "Analytics",
    icon: "chart",
    shortcut: "⌘+U",
  },
];
