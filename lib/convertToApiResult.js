export default function convertToApiResult(result, landId) {
  let arrOfApi = [];

  result.forEach((week) => {
    if (week[1] === "Invalid date") {
      week[1] = week[0];
      arrOfApi.push(
        `https://api-lok-live.leagueofkingdoms.com/api/stat/land/contribution?landId=${landId}&from=${week[0]}&to=${week[0]}`
      );
    } else {
      arrOfApi.push(
        `https://api-lok-live.leagueofkingdoms.com/api/stat/land/contribution?landId=${landId}&from=${week[0]}&to=${week[1]}`
      );
    }
  });

  return arrOfApi;
}
