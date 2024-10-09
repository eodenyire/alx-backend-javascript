# Project: 0x04. Typescript

## Resources

#### Read or watch:

* [TypeScript in 5 minutes]
* [TypeScript documentation]


## About
- Basic types in Typescript
- Interfaces, classes, functions
- Working with DOM and Typescript
- Generic types
- Using namespaces
- Merging declaration
- Using ambient namespaces to import an external library
- Nominal typing with Typescript

### Configuration Files
Please use these files for the following tasks

`package.json`

Click to show/hide file contents

`.eslintrc.js`

Click to show/hide file contents

`tsconfig.json`

Click to show/hide file contents

`webpack.config.js`

Click to show/hide file contents
```
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

## Tasks
0. Student interface:
    - Accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
    - Cr

1. Teacher interface
    - Has attributes: `firstName(string)` and `lastName(string)` that should only be modifiable when a `Teacher` is first initialized
    - `fullTimeEmployee(boolean)`attribute should always be defined
    - `yearsOfExperience(number)` attribute is optional
    location(string) this attribute should always be defined
    - Can add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

2. Director Interface
    - Extends `Teacher` interface.
    - Requires attribute `numberOfReports(number)`


3. Annotating functions
    - Function `printTeacher(firstName, lastName)`


4. TS Classes
    - class`StudentClass`:
    - Constructor accepts `firstName(string)` and `lastName(string)` arguments.
    - Methods: `workOnHomework` and `displayName`
    - Class constructor defined through an interface
    - Class described through an interface


5. Advanced types
    - Interfaces:
        - `DirectorInterface`
        - `TeacherInterface`
    - Classes:
        - `Director` extends `DirectorInterface`
        - `Teacher` extends `TeacherInterface`

6. Handling unions in functions
    - Functions: `isDirector(employee)` and `executeWork(employee)`

7. String literal types
    - String literal type `Subjects`:
    - Function `teachClass(todayClass)`

8. Ambient Namespaces
    - Interface `RowID` and `RowElement`

9. Namespaces and declaration merging
    - Namespaces: `Subjects` - common namespace across multiple files.
    - Interfaces:
        - `Teacher`: define structure of teacher object. Multiple declaration in different files sharing same namespace.
        - `Subjects`
    - Classes:
        - `Subject`: base class with property `Teacher`
        - `Cpp`: extends `Subject` with methods `getRequirements()` and `getAvailableTeacher()`.
        - `React`: extends `Subject` with methods `getRequirements()` and `getAvailableTeacher()`.
        - `Java`: extends `Subject` with methods `getRequirements()` and `getAvailableTeacher()`.

10. Using shared namespaces
    - creates and exports a constant `cpp` for Cpp Subjects
    - creates and exports a constant `java` for Java Subjects
    - creates and exports a constant `react` for React Subjects
    - creates and exports one `Teacher` object `cTeacher` with `experienceTeachingC = 10`
    - for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
    - for Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
    - for React subject, log to the console React, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return

11. Nominal typing and type assertions
    - Interfaces `MajorCredits` and `MinorCredits`:
        - Each interface defines a number named `credits`
        - Each interfaces has `brand` property to uniquely identify tje interface.
    - Functions named `sumMajorCredits` and `sumMinorCredits`:
        - Each function takes two arguments `subject1` and `subject2`
    - `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
    - Each function sums the credits of the two subjects


## Tasks

| Task | File |
| ---- | ---- |
| 0. Creating an interface for a student | [task_0/js/main.ts](./task_0/js/main.ts), [task_0/package.json](./task_0/package.json), [task_0/.eslintrc.js](./task_0/.eslintrc.js), [task_0/tsconfig.json](./task_0/tsconfig.json), [task_0/webpack.config.js](./task_0/webpack.config.js) |
| 1. Let's build a Teacher interface | [task_1/js/main.ts](./task_1/js/main.ts), [task_1/webpack.config.js](./task_1/webpack.config.js), [task_1/tsconfig.json](./task_1/tsconfig.json), [task_1/package.json](./task_1/package.json) |
| 2. Extending the Teacher class | [task_1/js/main.ts](./task_1/js/main.ts) |
| 3. Printing teachers | [task_1/js/main.ts](./task_1/js/main.ts) |
| 4. Writing a class | [task_1/js/main.ts](./task_1/js/main.ts) |
| 5. Advanced types Part 1 | [task_2/js/main.ts](./task_2/js/main.ts), [task_2/webpack.config.js](./task_2/webpack.config.js), [task_2/tsconfig.json](./task_2/tsconfig.json), [task_2/package.json](./task_2/package.json) |
| 6. Creating functions specific to employees | [task_2/js/main.ts](./task_2/js/main.ts) |
| 7. String literal types | [task_2/js/main.ts](./task_2/js/main.ts) |
| 8. Ambient Namespaces | [task_3/js/main.ts](./task_3/js/main.ts), [task_3/js/interface.ts](./task_3/js/interface.ts), [task_3/js/crud.d.ts](./task_3/js/crud.d.ts) |
| 9. Namespace & Declaration merging | [task_4/package.json](./task_4/package.json), [task_4/tsconfig.json](./task_4/tsconfig.json), [task_4/js/subjects/Cpp.ts](./task_4/js/subjects/Cpp.ts), [task_4/js/subjects/Java.ts](./task_4/js/subjects/Java.ts), [task_4/js/subjects/React.ts](./task_4/js/subjects/React.ts), [task_4/js/subjects/Subject.ts](./task_4/js/subjects/Subject.ts), [task_4/js/subjects/Teacher.ts](./task_4/js/subjects/Teacher.ts) |
| 10. Update task_4/js/main.ts | [task_4/js/main.ts](./task_4/js/main.ts) |
| 11. Brand convention & Nominal typing | [task_5/js/main.ts](./task_5/js/main.ts), [task_5/package.json](./task_5/package.json), [task_5/webpack.config.js](./task_5/webpack.config.js), [task_5/tsconfig.json](./task_5/tsconfig.json) |
