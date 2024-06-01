# Practice: Redux Toolkit

This repo is me practically working with Redux Toolkit and is based on the works of Steve Kinney's course
titled Advanced Redux with Redux Toolkit (Thanks Steve) via Frontend Masters

If curious here's the link:

- [Advanced Redux with Redux Toolkit](https://frontendmasters.com/courses/advanced-redux/)
- [Frontend Masters](https://frontendmasters.com/)

## Project

Project was bootstrapped with Vite and its React template. While the repository was intended solely for Redux Toolkit and RTK Query... I did add a few more packages.

- [TailwindCSS](https://tailwindcss.com/) - Didn't want to write CSS from scratch
- [MirageJS](https://miragejs.com/) - Mocking API
- [Falso JS](https://ngneat.github.io/falso/) - Fake data generator. Simplified the workflow for generating initial state/data
- [Vitest](https://vitest.dev/) - Always heard good things about it though I don't write unit tests much often

```
DIRECTORY STRUCTURE


.
└── src/
    ├── components
    ├── constants
    ├── hooks
    ├── mock-server [Contains work with MirageJS and Falso ]
    ├── pages
    ├── reducers [Old Redux stuff]
    ├── services [RTK Query setup]
    ├── slice [Redux Toolkit stuff]
    ├── store
    └── tests
```

## Running Project

Running the project is simple

1. Download repo
2. `npm i` or `yarn install`
3. `npm run dev` or `yarn dev`

### Testing

Run the command `npm run test`
