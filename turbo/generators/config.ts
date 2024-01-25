import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {

	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator("react-component", {
		description: "Adds a new react component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the component?",
			},
		],
		actions: [
			{
				type: "add",
				path: "packages/{{kebabCase name}}.tsx",
				templateFile: "templates/component.hbs",
			},
			{
				type: "append",
				path: "index.tsx",
				pattern: /"exports": {(?<insertion>)/g,
				template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
			},
		],
	});

	// Example creating new file at root
	plop.setGenerator("example", {
		description:
			"An example Turborepo generator - creates a new file at the root of the project",
		prompts: [
			{
				type: "input",
				name: "file",
				message: "What is the name of the new file to create?",
				validate: (input: string) => {
					if (input.includes(".")) {
						return "file name cannot include an extension";
					}
					if (input.includes(" ")) {
						return "file name cannot include spaces";
					}
					if (!input) {
						return "file name is required";
					}
					return true;
				},
			},
			{
				type: "list",
				name: "type",
				message: "What type of file should be created?",
				choices: [".md", ".txt"],
			},
			{
				type: "input",
				name: "title",
				message: "What should be the title of the new file?",
			},
		],
		actions: [
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}",
				templateFile: "templates/turborepo-generators.hbs",
			},
		],
	});

}
