import { Box, Button, TextField, Stack, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { FC, memo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useApi } from "../../../hooks/useApi";

type Inputs = {
  title: string;
  category: number | null;
  level: number | "";
};

export const SearchForm: FC = memo(() => {
  const { control, handleSubmit } = useForm<Inputs>({ defaultValues: { title: "", category: null, level: "" } });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    // await useApi
    //   .post("/login", data)
    //   .then((res) => {})
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log(`submit: ${data.title}`);
    console.log(`submit: ${data.category}`);
    console.log(`submit: ${data.level}`);
  };

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} direction="row" spacing={3} alignItems="center" justifyContent="center">
      <Controller name="title" control={control} render={({ field }) => <TextField {...field} label="タイトル名" type="text" margin="dense" />} />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <FormControl>
            <FormLabel id="radio-buttons-category">カテゴリー</FormLabel>
            <RadioGroup row aria-labelledby="radio-buttons-category" value={field.value} name="category">
              <FormControlLabel {...field} value={0} control={<Radio />} label="Ruby" />
              <FormControlLabel {...field} value={1} control={<Radio />} label="Rails" />
            </RadioGroup>
          </FormControl>
        )}
      />
      <Controller
        name="level"
        control={control}
        render={({ field }) => (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="level-label">難易度</InputLabel>
            <Select labelId="level-label" label="難易度" {...field}>
              <MenuItem value="">クリア</MenuItem>
              <MenuItem value={1}>レベル1</MenuItem>
              <MenuItem value={2}>レベル2</MenuItem>
              <MenuItem value={3}>レベル3</MenuItem>
              <MenuItem value={4}>レベル4</MenuItem>
              <MenuItem value={5}>レベル5</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Button variant="contained" sx={{ backgroundColor: "#F1938C", ":hover": { background: "#c57771" } }} type="submit" size="large">
        検索
      </Button>
    </Stack>
  );
});
