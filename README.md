## Welcome to RLModGen (Rocket Loans Module Generator)

### Dependencies
Before installation, check...
- `node -v` is 4.1.2 or 4.2.1
- `npm -v` is 2.14.7

1. First install Yeoman `npm install -g yo@1.4.8`

### Usage

1. Navigate to the folder in which you wish to make the new module.
2. The folder name should match the name you will give the module. (ie: rlAutocomplete)
3. install the generator `npm i -g generator-rlmodgen`
4. From the terminal run: `yo rlmodgen path/to/directory/from/step/1` or `yo rlmodgen $(pwd)`

### Options

1. You can name the module
2. You can build a ui or node type module
3. If it's a ui module, you can add a directive and service as well.
