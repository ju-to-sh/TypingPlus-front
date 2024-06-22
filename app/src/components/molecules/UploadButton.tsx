import { Avatar, Button, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent, FC, memo } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

export const UploadButton: FC<Props> = memo((props) => {
  const { onFileSelect } = props;
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files?.length === 0) return;
    const file = files[0];
    onFileSelect(file);
  };

  return (
    <>
      <Button component="label" size="small" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
        Upload
        <VisuallyHiddenInput type="file" accept=".png, .jpg, .jpeg" onChange={onChangeHandler} />
      </Button>
    </>
  );
});
