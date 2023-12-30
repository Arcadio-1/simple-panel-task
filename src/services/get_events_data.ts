export const get_events_data = async () => {
  try {
    return (await fetch("https://vo2.ir/api/getEvents")).json();
  } catch (error) {
    throw error;
  }
};
