import { type GitHubUser, type Repository } from "../types/github";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RepositoryCard from "./RepositoryCard";

interface Props {
  users: GitHubUser[];
  repositories: { [username: string]: Repository[] };
}

function UserList({ users, repositories }: Props) {
  return (
    <>
      {users.map((user) => (
        <Accordion
          key={user.id}
          slotProps={{ heading: { component: "h4" } }}
          elevation={0}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              backgroundColor: "#f0f2f5",
              borderRadius: "4px",
            }}
          >
            {user.login}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px 0px 10px 15px",
            }}
          >
            {(repositories[user.login] || []).map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default UserList;
