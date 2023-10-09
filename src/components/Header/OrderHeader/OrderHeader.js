import {
  Breadcrumbs,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSnackbar } from "notistack";

export default function OrderHeader() {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function handleBack() {
    enqueueSnackbar("Can't Perform This Action!", {
      variant: "error",
    });
  }

  function HandleApprove() {
    enqueueSnackbar("Order Approved!");
  }

  return (
    <>
      <Container sx={{ py: 2 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/" variant="body2">
            Orders
          </Link>

          <Link color="inherit" href="/" variant="body2">
            Order 32457ABC
          </Link>
        </Breadcrumbs>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          pt={2}
          alignItems="center"
          gap={2}
        >
          <Typography flex={1} variant="h5" fontWeight={700}>
            Order 32457ABC
          </Typography>
          <Button
            variant="outlined"
            color="success"
            onClick={handleBack}
            fullWidth={isMobile}
          >
            Back
          </Button>
          <Button
            color="success"
            variant="contained"
            onClick={HandleApprove}
            fullWidth={isMobile}
          >
            Approve Order
          </Button>
        </Stack>
      </Container>
    </>
  );
}
