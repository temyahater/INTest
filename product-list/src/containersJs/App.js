import {connect} from 'react-redux';
import * as phonesActions from '../actions/phonesAction';
import App, { sortLowPrice, sortHighPrice } from '../componentsJsx/App'
import * as sortActions from '../actions/sort';
import { bindActionCreators } from 'redux';


const thisSort=(phones,typeSort)=>{
    switch(typeSort){
        case 'cheap':
            return sortLowPrice(phones,'cheap');
        case 'expensive':
            return sortHighPrice(phones,'expensive');
        default:
            return phones;
    }
}

const mapState = ({phones})=>({
    phones: thisSort(phones.phones, phones.sort),
    loading: phones.loading
});

const mapDispatch = dispatch=>({
    ...bindActionCreators(phonesActions, dispatch),
    ...bindActionCreators(sortActions, dispatch)
});
  
export default connect(mapState, mapDispatch)(App);