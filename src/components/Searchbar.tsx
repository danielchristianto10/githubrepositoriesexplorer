import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  onSearch: (keyword: string) => Promise<void>;
}

function SearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");

  /**
   * Debounce
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(keyword);
    }, 700);

    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TextField
        variant="outlined"
        placeholder="Enter username"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={() => {
          onSearch(keyword);
        }}
      >
        Search
      </Button>
      {!!keyword.length && (
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          Showing users for "{keyword}"
        </Typography>
      )}
    </Box>
  );
}

export default SearchBar;
