<a name="readme-top"></a>

<div align="center">

<img height="120" src="/images/logo.png">

<h1>Coder Commit</h1>

Use LLM API to review Git changes, generate conventional commit messages that meet the conventions, simplify the commit process, and keep the commit conventions consistent.

## ✨ Features

- 🤯 Support generating commit messages based on git diffs using LLM.
- 🗺️ Support multi-language commit messages.
- 😜 Support adding Gitmoji.
- 📝 Support Conventional Commits specification.

## 🤯 Usage

1. Ensure that you have installed and enabled the "Coder Commit" extension.
2. In VSCode settings, locate the "coder-commit" configuration options and configure them as needed.
3. Make changes in your project and add the changes to the staging area (git add).
4. Next to the commit message input box in the "Source Control" panel, click the "Coder Commit" icon button. After clicking, the extension will generate a commit message and populate it in the input box.
5. Review the generated commit message, and if you are satisfied, proceed to commit your changes.

> **Note**\
> If the code exceeds the maximum token length, consider adding it to the staging area in batches.

### ⚙️ Configuration

In the VSCode settings, locate the "coder-commit" configuration options and configure them as needed:

| Configuration      |  Type   | Default | Required |
| :----------------- | :-----: | :-----: | :------: |
| API_KEY            | string  |  None   |   Yes    |
| API_BASE_URL       | string  |  None   |    Yes    |
| MODEL              | string  |         |   Yes    |
| AI_COMMIT_LANGUAGE | string  |   en    |   Yes    |
| EMOJI_ENABLED      | boolean |  true   |   Yes    |
| FULL_GITMOJI_SPEC  | boolean |  false  |    No    |
