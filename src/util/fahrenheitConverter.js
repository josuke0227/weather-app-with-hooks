function fahrenheitConverter(temp) {
  const answer = (temp * 9) / 5 + 32;

  return Math.round(answer);
}

export default fahrenheitConverter;
