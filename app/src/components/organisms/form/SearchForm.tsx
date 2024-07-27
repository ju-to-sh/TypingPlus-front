import { Button, TextField, Stack, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, MenuItem } from "@mui/material";
import { FC, memo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useApi } from "../../../hooks/useApi";
import { GameListsData } from "../../../types/api/gameList";

type Inputs = {
  title_cont: string;
  category_eq: number | null;
  level_eq: number | "";
};

type Props = {
  setGameLists: React.Dispatch<React.SetStateAction<GameListsData[]>>;
};

export const SearchForm: FC<Props> = memo((props) => {
  const { setGameLists } = props;
  const { control, handleSubmit } = useForm<Inputs>({ defaultValues: { title_cont: "", category_eq: null, level_eq: "" } });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await useApi
      .get("/search", {
        params: {
          q: { title_cont: data.title_cont, category_eq: data.category_eq, level_eq: data.level_eq },
        },
      })
      .then((res) => {
        setGameLists(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} direction={{ xs: "column", sm: "column", md: "row" }} spacing={3} alignItems="center" justifyContent="center" sx={{}}>
      <Controller name="title_cont" control={control} render={({ field }) => <TextField {...field} label="タイトル名" type="text" margin="dense" sx={{ width: "300px" }} />} />
      <Stack direction="row">
        <Controller
          name="category_eq"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel id="radio-buttons-category" sx={{ textAlign: "left" }}>
                カテゴリー
              </FormLabel>
              <RadioGroup row aria-labelledby="radio-buttons-category" value={field.value} name="category_eq">
                <FormControlLabel {...field} value={0} control={<Radio />} label="Ruby" />
                <FormControlLabel {...field} value={1} control={<Radio />} label="Rails" />
              </RadioGroup>
            </FormControl>
          )}
        />
        <Controller
          name="level_eq"
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
      </Stack>
      <Button variant="contained" sx={{ width: "150px", backgroundColor: "#F1938C", ":hover": { background: "#c57771" } }} type="submit" size="large">
        検索
      </Button>
    </Stack>
  );
});
