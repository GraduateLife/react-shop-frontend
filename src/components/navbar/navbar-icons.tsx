import { Icon } from "@chakra-ui/react";
import { RiUser3Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";

export function UserIcon() {
  return <Icon as={RiUser3Line} boxSize={10} color={"brand"}></Icon>;
}
export function ShopIcon() {
  return (
    <Icon
      as={BsShopWindow}
      boxSize={10}
      color={"brand"}
      strokeWidth={0.2}
    ></Icon>
  );
}
