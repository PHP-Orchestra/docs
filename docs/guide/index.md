# Introduction

PHP Orchestra is a project orchestration tool for engineers to build better PHP applications.

The idea behind the tool is to support developers to better split PHP project layers, to coordinate script execution across the entire project, to ease development setup, and support deployment.

## Sure... but why?
 Implementing projects using PHP is mainly about using a framework and exploring it to the maximum. The coupling points increase over time when using more out-of-the-box features and dependencies, up to a point where migrating to a better framework or different architecture setup will take several years or nearly impossible.
When comparing with other development languages and frameworks, the split of responsibilities is way more visible. In other environments the development application is split into layers that follow specific dependency rules, so why not making this possible in PHP? Why not leverage `Clean Architecture` principles?
Inspired by the concept of the `solution` file in `.Net` from `Microsoft`, this tool aims to give engineering teams the flexibility to have full control over the codebase architecture.
