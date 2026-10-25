<h1>
  <span class="headline">Intro to JavaScript: Debugging Olympics</span>
  <span class="subhead">Setup</span>
</h1>

**Learning objective:** Run an existing JavaScript file and use its error messages to start debugging.

1. Create a github repo called `intro-to-js-debugging`
2. Clone the repo and create a file called `app.js`
3. Open the project folder in VS Code.
4. Open the terminal in VS Code (**Terminal → New Terminal**).
5. Copy and paste the following broken code into `app.js`:
  ```js
  // This program prints a developer's status before and after a team meeting.

  cosnt companyName = 'Pearl Digital'
  const developerName = Aisha
  let tasksCompleted = '3'
  let isAvailable = 'true'
  const currentProject = 'Unassigned'
  let mentorName

  console.log('--- Before the meeting ---')
  console.log('Tasks completed:', tasksCompleted)
  console.log('Tasks type:', typeof tasksCompleted)
  console.log('Availability type:', typeof isAvailable)
  console.log('Project:', currentProject)
  console.log('Mentor:', mentorName)

  // The team meeting has finished. Update the developer's information.
  tasksCompleted = 4
  isAvailable = false
  currentProject = 'Client Portal'
  mentorName = 'Fatima'

  console.Log('--- After the meeting ---')
  console.log('Developer:', developername)
  console.log('Tasks completed:', tasksCompleted)
  console.log('Available:', isAvailable)
  console.log('Project:', currentProject)
  console.log('Mentor:', mentorName)

  const updateMessage = '${developerName} at ${companyName} is working on ${currentProject}.'
  console.log(updateMessage)
  ```
  
6. Run:

```bash
node app.js
```

You should see an error at first. **That is expected!** The code is intentionally broken.

> 💡 Students on Windows can use Git Bash. Students on Mac can use Terminal or zsh.

Continue to the [Debugging Challenge](../challenge/README.md).
