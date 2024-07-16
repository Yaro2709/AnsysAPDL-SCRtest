# AnsysAPDL-SCRtest

AnsysAPDL-SCRtest is a web application written in [React](https://react.dev/), which is designed for screenshot testing of the [ANSYS](https://www.ansys.com/) model, written in apdl.

## Repository structure

- [.github] - files that relate to github (in our case, test automation)
- [.loki] - screenshot testing library files (a web report is generated here)
- [config] - application and test configuration
- [extractedTranslations] - folder with translations (automatically created)
- [public] - files that are used when building the application
- [scripts] - additional commands for screenshot testing of ansys model
- [src] - main application (Feature-Sliced Design)
	- [app] 
	- [entities] - business entities (AnsysProject)
		- [AnsysProject]
			- [Img] - list of images participating in screenshot testing of ANSYS model
			- [Project] - ANSYS Project (using the [AnsysAPDLmac](https://github.com/Yaro2709/AnsysAPDLmac) and using the [AnsysAPDLexamples](https://github.com/Yaro2709/AnsysAPDLexamples))
	- [pages] - site pages
	- [shared] - reused code not related to the specifics of the application/business
	- [widgets] - composition layer for connecting entities and features into independent blocks
 
## Local installation

- Clone the repo: `git clone https://github.com/Yaro2709/AnsysAPDLmac`
- Install dependencies `npm run install` and [NodeJs](https://nodejs.org/)
- Select the Ansys project working folder `./src/entities/AnsysProject/Project`
- Run your project with Mechanical ANSYS APDL.

## Use for screenshot testing

- Preparation for use:
  - Development of a macro in the folder `./src/entities/AnsysProject/Project`
  - Running the `main.mac` macro and taking screenshots in the macro
  - Creating a list of screenshots in the file: `./src/entities/AnsysProject/Img/Img.tsx`
- Preparation for use:
  - Starting the application: `npm run start`
  - Running `StoryBook`: `npm run storybook`
  - Run the report: `npm run report:server`
- Usage:
  - Running screenshot tests: `npm run test:ui`
  - If the screenshot with `MainPage` is successful (green), then the ANSYS model has successfully passed testing
  - If other screenshots are unsuccessful, then you have damaged the application or changed it. If the changes do not suit you, then reinstall the application.
  - Generating a report: `npm run test:ui:report`
  - If we are satisfied with the changes, then save them: `npm run test:ui:ok`
  - If the procedure needs to be repeated, then delete the screenshots: `npm run delete:scr`

## Examples
Examples of using the library can be found in the collection [AnsysAPDLexamples](https://github.com/Yaro2709/AnsysAPDLexamples).


