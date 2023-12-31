import React from "react";
import { GetEvent } from "../../util/types";
import { useQuery } from "@tanstack/react-query";
import { get_events_data } from "../../services/get_events_data";

const Events = () => {
  const { isPending, error, data } = useQuery<GetEvent>({
    queryKey: ["Events"],
    queryFn: get_events_data,
  });
  if (isPending)
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>error</h1>
      </div>
    );

  console.log(data);
  return (
    <div>
      <ul>
        {data.data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Events;
