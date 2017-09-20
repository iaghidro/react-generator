Scaffolding tools for RocketLoans React projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-rlreact using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

1) Clone this repo

2) navigate to top level of this directory

3) Install (may need to switch off wifi to install)

    npm i 

4) Install yeoman globally

    npm install -g yo

5) install this repo 

    npm link


## Usage

1) Create a new directory after your component, ex: 'myComponent'

2) cd into your directory

3) start the generator

    yo rlreact

4) follow prompts :)


## Next Steps 

Once you've created your new component, here are the next couple of steps that require a manual touch (for now)

1) add the new reducer to the root reducer in appRoot/reduxReducer

2) add an api to the model instance located in models/

3) add the new component to the barrel file for angular access in appRoot/index.js

