import * as HotelActions from './hotel';
import * as LoginActions from './login';

const ActionCreators = Object.assign({},
  LoginActions,
  HotelActions
)

export default ActionCreators;