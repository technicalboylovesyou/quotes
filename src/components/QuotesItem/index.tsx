import * as React from 'react';
import {View, Animated} from 'react-native';
import {connect} from "react-redux";
import { pure } from 'recompose';

import {styles} from "./styles";

const mapStateToProps = (state) => {
  return {
    prevQuotes: state.quotesReducer.prevQuotes
  };
};

const QuotesItem = (props) => {

  const Cell = ({text, id, type}) => {
    const opacity = React.useRef(new Animated.Value(1)).current;


    React.useEffect(() => {
      const prevTextArray = props.prevQuotes.filter(quote => quote.id === id);
      if (prevTextArray.length > 0) {
        if (prevTextArray[0][type] !== text) {
          Animated.sequence([
            Animated.timing(opacity, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true
            }),
            Animated.timing(opacity, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true
            }),
          ]).start()
        }
      }

    }, [text]);
    return <Animated.Text style={[styles.text, {opacity: opacity}]}>{text}</Animated.Text>;
  };
  return (
    <View style={styles.row}>
      <View style={styles.cell}><Cell text={props.item.name} id={props.item.id} type={'name'}/></View>
      <View style={styles.cell}><Cell text={props.item.last} id={props.item.id} type={'last'}/></View>
      <View style={styles.cell}><Cell text={props.item.highestBid} id={props.item.id} type={'highestBid'}/></View>
      <View style={styles.cell}><Cell text={props.item.percentChange} id={props.item.id} type={'percentChange'}/></View>
    </View>
  )
};

export default pure(connect(mapStateToProps, {})(QuotesItem));
