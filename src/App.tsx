import { useCallback, useState } from "react";

import { Box, CircularProgress, Alert } from "@mui/material";
import SearchBar from "./components/Searchbar";
import UserList from "./components/UserList";
import { searchUsers, getRepositories } from "./services/githubApi";
import { type GitHubUser, type Repository } from "./types/github";

function App() {
  /** State */
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [repositories, setRepositories] = useState<{
    [username: string]: Repository[];
  }>({});

  /** UX feedback */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /** Callback */
  const handleUserSearch = useCallback(async (keyword: string) => {
    try {
      setError("");
      setLoading(true);

      if (!keyword.trim()) {
        setUsers([]);
        return;
      }
      const result = await searchUsers(keyword);
      setUsers(result);

      /**
       * Immediately fetch repositories for all users in parallel.
       * So can render accordion seamlessly
       */
      result.forEach((user) => {
        getRepositories(user.login).then((result) => {
          if (result)
            setRepositories((prev) => ({
              ...prev,
              [user.login]: result,
            }));
        });
      });
    } catch {
      setUsers([]);
      setError("Failed to search users");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "600px",
        gap: "10px",
        padding: "20px",
      }}
    >
      <SearchBar onSearch={handleUserSearch} />

      {/* UX feedback render */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress size={24} sx={{ color: "#72a2df" }} />
        </Box>
      )}
      {error && (
        <Alert severity="error" sx={{ my: 1, width: "100%" }}>
          {error}
        </Alert>
      )}
      {!loading && <UserList users={users} repositories={repositories} />}
    </Box>
  );
}

export default App;
