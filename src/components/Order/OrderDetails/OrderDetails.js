import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import NightlifeOutlinedIcon from "@mui/icons-material/NightlifeOutlined";
import TapasOutlinedIcon from "@mui/icons-material/TapasOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";

export default function OrderDetails() {
  return (
    <Paper variant="outlined" sx={{ p: 3, mt: 4, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Supplier
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            East Coast fruits & vegetables
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Shipping Date
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            Thu, Feb 10
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Total
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            $ 15,028.3
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Category
          </Typography>
          <>
            <Grid container pt={1}>
              <Grid item xs={4}>
                <EmojiFoodBeverageOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
              <Grid item xs={4}>
                <FastfoodOutlinedIcon
                  color="action"
                  sx={{
                    fontSize: 14,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <EggAltOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
              <Grid item xs={4}>
                <FoodBankOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
              <Grid item xs={4}>
                <LocalDiningOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
              <Grid item xs={4}>
                <NightlifeOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
              <Grid item xs={4}>
                <TapasOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
              <Grid item xs={4}>
                <LiquorOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                  color="action"
                />
              </Grid>
            </Grid>
          </>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Department
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            300-444-678
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Status
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            Awaiting your approval
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
