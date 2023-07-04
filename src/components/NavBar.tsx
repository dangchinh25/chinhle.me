import { AppBar, Stack, Button } from "@mui/material";
import Link from "./Link";

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: "15px" }}>
      <Stack direction="row">
        <Button>
          <Link href="/" underline="none">
            <a>About</a>
          </Link>
        </Button>
      </Stack>
    </AppBar>
  );
}
