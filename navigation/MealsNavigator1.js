import { BackHandler } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  }

  backButtonClick(){
    if(this.props.navigation && this.props.navigation.goBack){
      this.props.navigation.goBack(null);
      return true;
    }
    return false;
  }
}