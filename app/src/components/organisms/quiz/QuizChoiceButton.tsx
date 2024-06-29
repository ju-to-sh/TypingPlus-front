import { ChangeEvent, FC, memo, useState } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";



export const QuizChoiceButton: FC = memo(() => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
    setValue(e.target.value);
  };

  return (
    <FormControl>
      <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
        <FormControlLabel
          sx={{
            backgroundColor: "#eee",
            pr: "15px",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#F1938C",
            },
          }}
          value="quiz"
          control={<Radio sx={{ pl: "15px" }} />}
          label=""
        />
      </RadioGroup>
    </FormControl>
  );
});
