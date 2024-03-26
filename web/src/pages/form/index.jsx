import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const formFields = [
  {
    id: "productName",
    type: "text",
    label: "Product Name",
  },
  {
    id: "productType",
    type: "text",
    label: "Product Type",
  },
  {
    id: "productCreator",
    type: "text",
    label: "Product Creator",
  },
  {
    id: "productDescription",
    type: "text",
    label: "Product Description",
  },
  {
    id: "productPrice",
    type: Number,
    label: "Product Price",
  },
  {
    id: "productRating",
    type: "text",
    label: "Product rating",
  },
];
function ProductForm({form, setForm}) {

  return (
    <Stack>
      <Typography>Product Form</Typography>

      <Paper component={"form"}>
        {formFields.map((field) => (
          <Box>
            <Typography>{field.label}</Typography>
            <TextField
              name={field.id}
              id={field.id}
              type={field.type}
              fullWidth
              value={form[field.id]}
            />
          </Box>
        ))}

        <Box sx={{ display: "flex", gap: "24px" }}>
          <Button>Add New Product</Button>
          <Button>Cancel</Button>
        </Box>
      </Paper>
    </Stack>
  );
}

export default ProductForm;
