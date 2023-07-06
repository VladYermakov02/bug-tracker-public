export const getPaginatedData = function (
  data: any,
  page: number,
  limit: number
) {
  const items: typeof data = [];
  for (let i = (page - 1) * limit; i < page * limit && data[i]; i += 1) {
    items.push(data[i]);
  }
  return items;
};

export const getLength = function (data: any) {
  return data.length;
};
