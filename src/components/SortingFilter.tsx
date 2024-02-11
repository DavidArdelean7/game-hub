import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrder: string | null;
  onSelectOrder: (order: string) => void;
}
const SortingFilter = ({ selectedOrder, onSelectOrder }: Props) => {
  const orderMapping = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];
  const selectedOrderLabel = orderMapping.find(
    (o) => o.value === selectedOrder
  )?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrderLabel || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderMapping.map((o) => (
          <MenuItem
            key={o.value}
            value={o.value}
            onClick={() => onSelectOrder(o.value)}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingFilter;
