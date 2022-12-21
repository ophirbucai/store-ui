import Comp from "../components/ProductCard.comp";
import { ProductType } from "../types";

interface Props extends ProductType {}

export const ProductCard = (props: Props) => {
  return (
    <Comp.wrapper>
      <Comp.title>{props.title}</Comp.title>
      <Comp.label>{props.category.name}</Comp.label>
      <Comp.description>{props.description || lorem}</Comp.description>
    </Comp.wrapper>
  );
};

const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia architecto magni deleniti, ipsa, distinctio fugiat velit possimus eius rerum hic rem ipsam doloribus sequi repellendus deserunt eveniet quaerat laboriosam aspernatur. Voluptatem ab sunt iure voluptas, pariatur sed tempora est! Tempore recusandae ab quos fuga laborum quia odio molestias perferendis voluptate, officiis tempora natus deserunt culpa dolor doloribus aliquam explicabo. Distinctio?`;
