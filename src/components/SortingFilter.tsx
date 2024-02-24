import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore";

const SortingFilter = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.order);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const orderMapping = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];
  const selectedOrderLabel = orderMapping.find(
    (o) => o.value === selectedSortOrder
  )?.label;
  console.log("ORDER", selectedOrderLabel);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrderLabel ? selectedOrderLabel : "Relevance"}
      </MenuButton>
      <MenuList>
        {orderMapping.map((o) => (
          <MenuItem
            key={o.value}
            value={o.value}
            onClick={() => setSelectedSortOrder(o.value)}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingFilter;
