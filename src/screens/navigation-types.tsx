type AboutScreenParams = {};
type QuotesScreenParams = {};

export type HomeStackParams = {
  About: AboutScreenParams;
  Quotes: QuotesScreenParams;
};

export type MainStackParams = {
  Home: HomeStackParams;
}
