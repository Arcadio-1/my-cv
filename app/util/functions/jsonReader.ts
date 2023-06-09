const getFromJson = async (fileName: string) => {
  const request = await fetch(`/jsons/${fileName}`);
  const data = await request.json();
  const dataArray = [];
  for (const key in data) {
    dataArray.push({
      ...data[key],
    });
  }
  return dataArray;
};
export default getFromJson;
