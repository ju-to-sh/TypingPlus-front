import { FC, memo } from "react";
// import { ReactComponent as Icon } from "../../assets/logo.svg";

type Props = {
  width: number;
};

export const Logo: FC<Props> = memo((props) => {
  const { width } = props;
  return (
    <img width={`${width}px`} height="auto" src='../../images/logo.png' alt="logo" />
  );
});
