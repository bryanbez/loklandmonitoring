function GroupByFieldName(contribution, fieldname) {
  return contribution?.reduce((acc, obj) => {
    const key = obj[fieldname];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

export default GroupByFieldName;
