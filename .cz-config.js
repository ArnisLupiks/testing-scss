module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
    },
    { value: "test", name: "test:     Adding missing tests" },
    {
      value: "chore",
      name: "chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation",
    },
    { value: "revert", name: "revert:   Revert to a commit" },
    { value: "WIP", name: "WIP:      Work in progress" },
  ],

  scopes: [
    { name: "header" },
    { name: "config" },
    { name: "core" },
    { name: "docs" },
    { name: "setup" },
  ],

  appendBranchNameToCommitMessage: false,
  isSubjectEmpty: false,
  questions: {
    subject: {
      required: true, // make required
      minLength: 30, // set min length
    },
  },

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "Denote the SCOPE of this change:",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any AZURE BOARDS ISSUES CLOSED by this change (optional). E.g.: AB#1234, AB#12344:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix", "refactor"],
  // limit subject length
  subjectLimit: 100,
  breaklineChar: "|", // It is supported for fields body and footer.
  footerPrefix: "",
  askForBreakingChangeFirst: true, // default is false
};
