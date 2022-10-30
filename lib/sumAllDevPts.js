function SumAllDevPts(contribution) {
  return contribution?.reduce(
    (prevValue, currValue) => prevValue + currValue.total,
    0
  );
}

export default SumAllDevPts;
