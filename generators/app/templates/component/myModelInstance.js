
import store  from '../../reduxStore';
import <%= upperCamelCase %> from './models/<%= upperCamelCase %>';
//import AdminAPI from '../../api/AdminAPI';

const <%= lowerCamelCase %> = new <%= upperCamelCase %>({
    api: {}, //ex: new AdminAPI()
    store: store
});

export default <%= lowerCamelCase %>;