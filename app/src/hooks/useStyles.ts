import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  greenFont: {
    color: "#689f38",
    display: "inline",
    fontSize: "24px",
    whiteSpace: "pre-wrap",
  },
  redFont: {
    backgroundColor: "#e0e0e0",
    color: "red",
    display: "inline",
    fontSize: "24px",
  },
  whiteFont: {
    color: "#fff",
    display: "inline",
    fontSize: "24px",
    whiteSpace: "pre-wrap",
  },
  blackFont: {
    color: "#333",
    backgroundColor: "#e0e0e0",
    display: "inline",
    fontSize: "24px",
  },
  modalBox: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #fff",
    backgroundColor: "#fff",
    padding: "16px",
    outline: "none",
  },
}));
