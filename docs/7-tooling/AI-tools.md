AI Tools for LightSpeed Interns

Modern web development increasingly relies on artificial intelligence (AI) tools to speed up coding, summarise information, manage design processes, and automate repetitive tasks. This guide lists all required and recommended AI-powered apps, browser tools, and editor extensions LightSpeed interns should use, ensuring alignment with the Block Theme & Plugin Developer Internship. Every tool includes a description, installation steps, links, and sign-in notes.

AI Chatbots & Assistants

Browser AI Assistants

AI-Related VS Code Extensions

Design System & Code-to-Design AI Integration

Tips for Using AI in Development

FAQ

AI Chatbots & Assistants

| Tool               | Purpose & Features                                                                                                                                                   | How to Access/Install                                                                                                                       | Notes                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ChatGPT            | Generative AI by OpenAI. Text, speech, image generation; answers, brainstorming, code, translation, document summaries (GPT-5).                                      | Visit https://chat.openai.com/, create account. Install from App Store / Google Play.                                                       | Use Google account. Chrome Extension available for search integration.                          |
| Claude (Anthropic) | AI Assistant & code generator. Text/image processing, advanced reasoning (Claude 3: Haiku/Sonnet/Opus). Focus on safe, clear output.                                 | Access via https://www.claude.ai/, sign up (Google login optional). Mobile app varies by region.                                            | Use for research, brainstorming, summarization, code. VS Code extension available (see below).  |
| Gemini (Google AI) | Multimodal AI: language, code, image, audio, translation, design. Built into Google services (Docs, Gmail, Sheets, Chrome DevTools, AI Studio).                      | Visit https://gemini.google.com/ with Google account. On Pixel devices, Gemini is native. Activate in Google AI Studio and Chrome DevTools. | Use for writing assistance, code, doc analysis, and explanation. Gemini Code Assist in VS Code. |
| Brave Leo          | AI assistant built into Brave Browser. Summarises, generates content, translates text; privacy-focused, no account required. Supports Mixtral, Claude, Llama models. | Download Brave browser and enable Leo in sidebar: https://brave.com/                                                                        | Works on desktop/mobile; ideal for quick web summaries, translations.                           |
| NotebookLM         | Gemini-powered research notebook; uploads PDFs, URLs, Docs, Slides, audio, video. Summarises with citations, generates study notes, auto flashcards, deep dive.      | Visit https://notebooklm.google.com/ and sign in with Google.                                                                               | Great for research, onboarding, summarizing long docs. PWA, runs standalone in browser.         |
| Fireflies.ai       | AI meeting/notes assistant. Records meetings, transcribes, summarises action items, integrates with Google Calendar, Docs.                                           | Install Chrome Extension. Sign in with Google. Also available as web & mobile apps: https://fireflies.ai/                                   | Use to capture notes in team/client calls. Can auto-save to Docs.                               |
| Loom               | AI-powered screen recorder. Chrome extension & desktop app. Generates video summaries, chapters, transcripts, automatic titles.                                      | Create account and install desktop and Chrome extension. Sign in with Google/Slack: https://www.loom.com/                                   | Use for async bug reports, tutorials. Videos can be shared to GitHub/Slack.                     |

Browser AI Assistants

| Tool/Extension         | Purpose & Features                                                                                                    | How to Enable/Install                                                                                                                         | Notes                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Chrome DevTools AI     | Gemini-powered panel in DevTools. Context-aware debugging, CSS/DOM analysis, code explanations, accessibility checks. | Open DevTools (F12), settings/experiments, enable AI Assistance. Learn more: https://developer.chrome.com/docs/devtools/ (check AI features). | Excellent for debugging block themes, layouts, and styles. |
| Microsoft Edge Copilot | Microsoft AI assistant. In-browser explanations, suggestions, code, search, summaries.                                | Download Microsoft Edge, sign in. Enable Copilot via browser icon: https://www.microsoft.com/edge                                             | Great for both code and content research.                  |
| Brave Leo              | Same as above; built into Brave browser.                                                                              | Enable via sidebar in Brave: https://brave.com/                                                                                               | No account needed. Private summaries for any webpage.      |

AI-Related VS Code Extensions

| Extension Name & ID                              | Description                                                                                                        | Marketplace Link                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Claude Code (anthropic.claude-code)              | Connects the Claude model to VS Code: AI-powered code completion, generation, and editing for PHP/JS/config files. | https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code                                  |
| Gemini Code Assist (google.geminicodeassist)     | Google Gemini-powered code suggestions, completion, and help in VS Code.                                           | https://marketplace.visualstudio.com/items?itemName=google.geminicodeassist                                |
| GitHub Copilot (github.copilot)                  | Real-time AI pair programming and code suggestions, plus Copilot chat for queries/snippets.                        | https://github.com/features/copilot and https://marketplace.visualstudio.com/items?itemName=GitHub.copilot |
| Copilot Vision (ms-vscode.vscode-copilot-vision) | Adds vision/model diagram/data understanding to GitHub Copilot, enabled in VS Code.                                | https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-copilot-vision                        |
| Codeium (codeium.codeium)                        | Multi-language AI code completion engine (alternative to Copilot).                                                 | https://www.codeium.com/ and https://marketplace.visualstudio.com/items?itemName=codeium.codeium           |
| CodeRabbit (coderabbit.coderabbit-vscode)        | AI code reviewer that analyses, explains code, and offers refactoring suggestions.                                 | https://marketplace.visualstudio.com/items?itemName=coderabbit.coderabbit-vscode                           |

Other suggested extensions:
Copilot Chat

Design System & Code-to-Design AI Integration

Interns often use AI to:

-   Map Figma design tokens and variables to theme.json in WordPress (MCP docs)
-   Generate starter code and design assets via VS Code extensions
-   Prompt block theme code/snippets directly from Figma using supported plugins
-   Summarize design assets, patterns, or variable changes using built-in AI features in Figma

| Tool/Plugin      | Purpose & Feature                                            | How to Access                                                                            | Notes                                                                        |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Figma MCP        | "Model–Code–Prompt" for design-system-driven code generation | See Figma MCP at https://www.figma.com/community                                         | MCP is enabled on agency files and key themes for direct code/design syncing |
| Figma AI Plugins | Summarise, refactor, and prompt code/design assets using AI  | Search "AI" in Figma Community Plugins & add to account: https://www.figma.com/community | Use for mapping tokens/patterns and getting component usage help             |

Tips for Using AI in Development

Be descriptive in prompts: Clearly state your code context and goal (e.g., "Generate a WordPress block for ...", "Summarise this issue ...").

Always review AI output: Treat suggestions as drafts; test for correctness/security.

Respect privacy: Don’t share sensitive data (passwords, keys, private code) with any AI service. Prefer tools that don’t retain your chats.

Keep up-to-date: Watch LightSpeed announcements for recommended models/extensions and AI policy updates.

See also:

-   VS Code Extensions Guide
-   Chrome Extensions Guide
-   Mobile Apps Guide
-   Internship Curriculum

FAQ

Q: Are all the required AI tools and extensions free for interns?
A: Yes. All core AI tools (ChatGPT, Claude, Gemini, Copilot, Codeium, NotebookLM, Brave Leo, Fireflies, Loom) are free to use or provided by LightSpeed.

Q: How do I select which AI plugin to use for code?
A: Try Claude, Copilot, Gemini, Codeium, or CodeRabbit (see VS Code Extensions). Select based on your workflow. Most interns install all for comparison.

Q: Can I use AI for design work?
A: Yes! Use Figma's built-in AI, MCP, and plugins for mapping design tokens, summarizing components, generating starter code.

Q: Is my data/chat with these AI assistants private?
A: Tools like Brave Leo state they do not retain data. Always avoid submitting confidential info. Review each platform’s privacy policy.

Q: Should I install AI Chrome extensions and mobile apps?
A: Yes—ChatGPT, Claude, Fireflies, Loom, etc. have Chrome extensions and mobile apps (see other guides).

Q: Does this list change during the internship?
A: If new AI tools emerge or agency recommendations shift, your mentor will advise the update.

This guide aligns with the WordPress Internship and ensures new interns have direct access and context for the AI tools used in study, code, and design workflows at LightSpeed.
