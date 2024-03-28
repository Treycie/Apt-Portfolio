import Navfordash from "../components/compfordashboard/navfordash";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Plus } from "lucide-react";

const DashboardLayout = ({ children, title, handleAddButton, buttonTitle }) => {
  return (
    <>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navfordash />
        <main className="grow">
          <Container className="w-full">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
            >
              <Typography variant="h3">{title}</Typography>
              {buttonTitle && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddButton}
                  style={{ backgroundColor: "#800080" }}
                  className="flex gap-2 items-center"
                >
                  <Plus />

                  <span> {buttonTitle}</span>
                </Button>
              )}
            </Stack>

            {children}
          </Container>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
