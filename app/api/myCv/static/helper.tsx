// "use client";
export const getStatixCv = async () => {
  const res = await fetch("/api/myCv/static");
  const data = await res.json();

  return data.data;
};
