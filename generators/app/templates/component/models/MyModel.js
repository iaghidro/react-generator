
class <%= upperCamelCase %> {

    constructor( {api, store}) {
        if (!api) {
            return new Error(`Missin backend api`);
        }
        if (!store) {
            return new Error(`Missin store`);
        }
        this.api = api;
        this.store = store;
    }

    ////////////////
    ////// API /////
    ////////////////

    fetchSomething(params) {
        return this.api.fetchSomething(params);
    }
}

export default <%= upperCamelCase %>;