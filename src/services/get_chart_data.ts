export const get_chart_data = async () => {
  try {
    return (await fetch("https://vo2.ir/api/getChartsData")).json();
  } catch (error) {
    throw error;
  }
};
