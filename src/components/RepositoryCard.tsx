import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import type { Repository } from "../types/github";

interface Props {
  repo: Repository;
}

function RepositoryCard({ repo }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#e1e4e6",
        padding: "12px 12px 20px",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "bold", color: "#222" }}
        >
          {repo.name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {repo.stargazers_count}
          </Typography>
          <StarIcon sx={{ fontSize: "16px", color: "#333" }} />
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "#666", fontSize: "12px", textAlign: "left" }}
      >
        {repo.description || "No description"}
      </Typography>
    </Box>
    // <div className="repo-card">
    //   <h3>{repo.name}</h3>

    //   <p>{repo.description || "No description"}</p>

    //   <span>⭐ {repo.stargazers_count}</span>
    // </div>
  );
}

export default RepositoryCard;
