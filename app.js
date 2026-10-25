// This program prints a developer's status before and after a team meeting.

const companyName = 'Pearl Digital'
const developerName = 'Aisha'
let tasksCompleted = '3'
let isAvailable = 'true'
let currentProject = 'Unassigned'
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

console.log('--- After the meeting ---')
console.log('Developer:', developerName)
console.log('Tasks completed:', tasksCompleted)
console.log('Available:', isAvailable)
console.log('Project:', currentProject)
console.log('Mentor:', mentorName)

const updateMessage = '${developerName} at ${companyName} is working on ${currentProject}.'
console.log(updateMessage)
