import React from "react";
import { cn } from "../../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../shadcn_components/ui/navigation-menu";
import { get_events_data } from "../../../services/get_events_data";
import { useQuery } from "@tanstack/react-query";
import { GetEvent } from "../../../util/types";
const EventsMenu = () => {
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
      <NavigationMenu dir="rtl">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="px-4">{data.data[0].name}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {data.data.map((item) => {
                return (
                  <NavigationMenuLink className="px-10" key={item.id}>
                    {item.name}
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default EventsMenu;
