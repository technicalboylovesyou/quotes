import * as React from 'react';
import {Text, View} from 'react-native';

import {installQuotes} from "../../store/actions";
import {connect} from 'react-redux';
import {QuotesList} from "../../components/QuotesList";
import {styles} from "./styles";
import store from "../../store";

const mapStateToProps = (state) => {
  return {
    quotes: state.quotesReducer.quotes,
    prevQuotes: state.quotesReducer.prevQuotes,
    update: state.quotesReducer.update,
    error: state.quotesReducer.error
  };
};

const QuotesScreen = (props) => {
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    if (props.update) {
      const timerId = setInterval(() => {
        const state = store.getState();
        props.installQuotes(state.quotesReducer.quotes);
      }, 5000);
      setTimer(parseInt(String(timerId)))
    } else {
      clearInterval(timer);
      setTimer(0);
    }
  }, [props.update]);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Котировки</Text>
        {props.error !== "" && <Text style={styles.error}>Ошибка обновления</Text>}
      </View>
      <QuotesList data={props.quotes}/>
    </View>
  )
};

export default connect(mapStateToProps, {installQuotes})(QuotesScreen);
