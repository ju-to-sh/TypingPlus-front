import { FC, memo } from "react";
// import { ReactComponent as Icon } from "../../assets/logo.svg";

type Props = {
  width: number;
};

export const Logo: FC<Props> = memo((props) => {
  const { width } = props;
  return (
    <img width={`${width}px`} height="auto" src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
    // <Icon style={{ width: `${width}px`, height: `${height}px` }} />
  );
});
