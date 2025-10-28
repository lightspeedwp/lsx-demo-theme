# Chatmodes Library

This folder contains a collection of custom chatmodes designed to enhance productivity, streamline workflows, and provide specialized assistance for various tasks. Each chatmode is tailored to a specific purpose, ensuring that users can leverage GitHub Copilot effectively for their unique needs.

## Available Chatmodes

Below is a list of all the chatmodes available in this folder, along with a brief description of what each does:

| Chatmode File | Description |
|---------------|-------------|
| [`task-planner.chatmode.md`](./task-planner.chatmode.md) | Helps create actionable task plans, including checklists, implementation details, and prompts, based on validated research. |
| [`research-technical-spike.chatmode.md`](./research-technical-spike.chatmode.md) | Systematically validates technical spike documents through exhaustive research and controlled experimentation. |
| [`refine-issue.chatmode.md`](./refine-issue.chatmode.md) | Refines GitHub issues by adding acceptance criteria, technical considerations, edge cases, and non-functional requirements. |
| [`prompt-builder.chatmode.md`](./prompt-builder.chatmode.md) | Guides users in creating and validating high-quality prompts using best practices for prompt engineering. |
| [`playwright-tester.chatmode.md`](./playwright-tester.chatmode.md) | Focuses on generating, improving, and executing Playwright tests for web applications. |
| [`mentor.chatmode.md`](./mentor.chatmode.md) | Acts as a mentor to guide engineers by challenging assumptions, encouraging critical thinking, and providing constructive feedback. |
| [`implementation-plan.chatmode.md`](./implementation-plan.chatmode.md) | Generates detailed implementation plans for new features or refactoring tasks, ensuring clarity and structure. |
| [`critical-thinking.chatmode.md`](./critical-thinking.chatmode.md) | Encourages critical thinking by challenging assumptions and helping engineers explore alternative solutions. |
| [`address-comments.chatmode.md`](./address-comments.chatmode.md) | Assists in addressing pull request comments by providing guidance on making changes, running tests, and committing updates. |
| [`accesibility.chatmode.md`](./accesibility.chatmode.md) | Ensures code adheres to WCAG 2.1 accessibility standards, providing reminders and tools for creating accessible content. |

## How to Use Chatmodes

1. **Activate a Chatmode**: Open the desired `.chatmode.md` file in your editor or use the `/filename` command in GitHub Copilot Chat to activate the chatmode.
2. **Follow the Instructions**: Each chatmode includes detailed instructions on how to use it effectively. Read the file to understand its purpose and workflow.
3. **Customize as Needed**: Some chatmodes allow customization based on your project requirements. Update the file or provide specific inputs to tailor the chatmode to your needs.
4. **Leverage Tools**: Many chatmodes integrate with tools like `search`, `fetch`, `runCommands`, and `editFiles`. Ensure you have the necessary permissions and tools configured in your environment.
5. **Iterate and Improve**: Use the chatmodes iteratively to refine your tasks, plans, or code. Many chatmodes are designed to work in cycles, ensuring high-quality outputs.

## Creating New Chatmodes

If you want to create a new chatmode for this directory, follow these guidelines:

1. **Use Clear Filenames**: Name the file descriptively with the `.chatmode.md` extension.
2. **Include Frontmatter**: Add a YAML frontmatter section with `description`, `tools`, and other relevant metadata.
3. **Define Purpose and Workflow**: Clearly explain the chatmode's purpose and provide step-by-step instructions for users.
4. **Test Thoroughly**: Validate the chatmode to ensure it works as intended and aligns with project standards.
5. **Update This README**: Add the new chatmode to the table above with a brief description.

## Maintaining Chatmodes

To ensure the chatmodes remain effective and relevant:

1. **Review Regularly**: Periodically review chatmodes to ensure they align with current project needs and standards.
2. **Test Updates**: Test any changes to chatmodes before committing them.
3. **Document Changes**: Clearly document any updates in the commit message and, if necessary, in the chatmode file itself.
4. **Seek Feedback**: Encourage users to provide feedback on the chatmodes to identify areas for improvement.

---

By using these chatmodes, you can streamline your workflows, improve code quality, and enhance collaboration within your projects. If you encounter any issues or have suggestions for new chatmodes, feel free to contribute!