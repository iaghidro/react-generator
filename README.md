## Welcome to RLGen (Rocket Loans Module Generator)

### Dependencies
Before installation, check...
- `node -v` is 4.1.2 or 4.2.1
- `npm -v` is 2.14.7

1. Install Yeoman `npm install -g yo@1.4.8`
2. Navigate to the root level of this app
3. Run `npm link`

### Usage

1. Navigate to the folder in which you wish to generate the file(s)/ module.
        a. If it's a module, he folder name should match the name you will give the module. (ie: rlAutocomplete)
2. From the terminal run: `yo rlgen $(pwd)` or `yo rlgen path/to/directory/from/step/1`

### Options

1. You can name the module
2. You can build a ui or node type module
3. If it's a ui module, you can add a directive and service as well.
