import { Avatar, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { grey } from "@mui/material/colors";
import avocado from "../../../assets/avocado.jpg";
import ProductStatus from "../ProductStatus/ProductStatus";
// import ProductTableSkeleton from "./skeleton/product-table-skeleton";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function ProductTable({ isLoading, products }) {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {isLoading && <ProductTableSkeleton />} */}
          {products?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction="row" gap={2} alignItems="center">
                  <Avatar variant="square" src={avocado} alt="avocado" />{" "}
                  {row.orderName}
                </Stack>
              </TableCell>
              <TableCell>{row.brand}</TableCell>
              <TableCell>
                <Stack direction="row" alignItems="center">
                  <AttachMoneyIcon fontSize="small" color="action" />
                  {row.price}
                  /6x1lb
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="body2" fontWeight={700} component="span">
                  {row.quantity}
                </Typography>
                x6x1lb
              </TableCell>
              <TableCell>
                {" "}
                <Stack direction="row" alignItems="center">
                  <AttachMoneyIcon fontSize="small" color="action" />
                  890
                </Stack>
              </TableCell>
              <TableCell sx={{ bgcolor: grey[50] }}>
                <ProductStatus product={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
