#### Init to win it

#### Cospec demo

## Bug Triage Process

This document outlines the process for triaging and fixing bugs in this repository.

### 1. Bug Tracking
- Bugs are tracked in Airtable (base: "tester", table: "Bugs")
- Each bug entry contains:
  - Issue number (e.g., COS-4)
  - Status (To do, In progress, Done)
  - GitHub issue URL

### 2. Information Gathering
When triaging a bug, gather information from multiple sources:

1. **Airtable**: Check the bug tracking database for status and basic info
2. **GitHub Issues**: Review the full issue description and comments
3. **Notion**: Check linked Notion pages for detailed requirements and documentation
4. **Slack**: Review team discussions in linked Slack threads for context

### 3. Implementation Process
1. Analyze all gathered information from the sources above
2. Implement the fix or feature following the requirements
3. Create a pull request with clear description
4. Update the Slack thread with PR link
5. Update Airtable status to "Done" once merged

### 4. Acceptance Criteria
Before marking a bug as complete, ensure:
- All requirements from GitHub issue are met
- All requirements from Notion docs are addressed
- Slack thread concerns are resolved
- Code is well-documented with clear comments
- PR is created and reviewed