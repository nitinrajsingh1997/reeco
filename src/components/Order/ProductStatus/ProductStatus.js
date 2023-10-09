import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useSnackbar } from "notistack";
import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { updateStatus } from "../../../slices/productSlice";
import { Chip, Tooltip } from "@mui/material";
import {
  convertHyphenatedToCapitalized,
  generateStatusColor,
} from "../../../utils/helpers";

export default function ProductStatus({ product }) {
  const [openMissingProduct, setOpenMissingProduct] = React.useState(false);

  const statusText = convertHyphenatedToCapitalized(product?.status);
  const statusColor = generateStatusColor(product.status);

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const missingProductDialogOpen = () => {
    setOpenMissingProduct(true);
  };

  const missingProductDialogClose = () => {
    setOpenMissingProduct(false);
  };

  const approveHandler = () => {
    dispatch(
      updateStatus({
        id: product.id,
        status: "approved",
      })
    );
    enqueueSnackbar("Approved Successfully!", {
      variant: "success",
    });
  };

  const missingHandler = () => {
    missingProductDialogOpen();
  };

  const setAsMissing = () => {
    dispatch(
      updateStatus({
        id: product.id,
        status: "missing",
      })
    );
    missingProductDialogClose();
  };

  const setAsUrgentMissing = () => {
    dispatch(
      updateStatus({
        id: product.id,
        status: "missing-urgent",
      })
    );
    missingProductDialogClose();
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        gap={1}
        alignItems="center"
      >
        <span>
          {product.status && (
            <Chip
              label={statusText}
              color={
                statusColor === "success"
                  ? "success"
                  : statusColor === "warning"
                  ? "warning"
                  : "error"
              }
              size="small"
            />
          )}
        </span>
        <Tooltip title="Flag as Approved">
          <IconButton onClick={approveHandler} size="small">
            <DoneIcon
              fontSize="small"
              color={product.status === "approved" ? "success" : "action"}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Flag as Missing">
          <IconButton size="small" onClick={missingHandler}>
            <CloseIcon
              fontSize="small"
              color={
                product.status === "missing"
                  ? "warning"
                  : product.status === "missing-urgent"
                  ? "error"
                  : "action"
              }
            />
          </IconButton>
        </Tooltip>
        <Button size="small" color="inherit">
          Edit
        </Button>
      </Stack>

      {/* Missing Product */}
      <Dialog
        open={openMissingProduct}
        onClose={missingProductDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-title">Missing Product</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={missingProductDialogClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Is "Chicken breast fillets, boneless matuu marianted 6 ounce raw,
            Invivid" urgent?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={setAsMissing} color="inherit">
            No
          </Button>
          <Button onClick={setAsUrgentMissing} color="inherit">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
