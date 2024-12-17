import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material";
import { Link } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const [address, setAddress] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States"
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle submission (e.g., API call) here
    console.log("Address:", address);
    console.log("Payment Method:", paymentMethod);
  };

  return (
    <Box
      sx = {{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        maxWidth: "600px",
        margin: "auto"
      }}
    >
      <div className = "w-[600px] flex relative">
        <Link
          className = "absolute -top-8 left-0 btn btn-light mt-4 mb-2"
          to = "/cart"
        >
          Go Back
        </Link>
        <div className = "text-center w-full">
          <Typography
            variant = "h4"
            gutterBottom
          >
            Customer Information
          </Typography>
        </div>
      </div>
      <form
        onSubmit = {handleSubmit}
        style = {{ width: "100%" }}
      >
        {/* Address Form */}
        <Typography
          variant = "h6"
          gutterBottom
        >
          Shipping Information
        </Typography>
        <Grid
          container
          spacing = {2}
        >
          <Grid
            item
            xs = {12}
          >
            <TextField
              name = "name"
              label = "Full Name"
              value = {address.name}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {12}
          >
            <TextField
              name = "email"
              label = "Email Address"
              type = "email"
              value = {address.email}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {12}
          >
            <TextField
              name = "phone"
              label = "Phone Number"
              type = "tel"
              value = {address.phone}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {12}
          >
            <TextField
              name = "street"
              label = "Street Address"
              value = {address.street}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {6}
          >
            <TextField
              name = "city"
              label = "City"
              value = {address.city}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {6}
          >
            <TextField
              name = "state"
              label = "State"
              value = {address.state}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {6}
          >
            <TextField
              name = "zip"
              label = "ZIP Code"
              type = "text"
              value = {address.zip}
              onChange = {handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs = {6}
          >
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                name = "country"
                value = {address.country}
                onChange = {handleChange as any}
                required
              >
                <MenuItem value = "Thailand">Thailand</MenuItem>
                <MenuItem value = "United States">United States</MenuItem>
                <MenuItem value = "Canada">Canada</MenuItem>
                <MenuItem value = "United Kingdom">United Kingdom</MenuItem>
                {/* Add more countries as needed */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Payment Section */}
        <Typography
          variant = "h6"
          gutterBottom
          sx = {{ mt: 3 }}
        >
          Payment Method
        </Typography>
        <FormControl component = "fieldset">
          <RadioGroup
            name = "paymentMethod"
            value = {paymentMethod}
            onChange = {handlePaymentChange}
          >
            <FormControlLabel
              value = "credit-card"
              control = {<Radio />}
              label = "Credit Card"
            />
            <FormControlLabel
              value = "paypal"
              control = {<Radio />}
              label = "PayPal"
            />
            <FormControlLabel
              value = "cash-on-delivery"
              control = {<Radio />}
              label = "Cash on Delivery"
            />
            {/* Additional payment methods can be added here */}
          </RadioGroup>
        </FormControl>

        {/* Submit Button */}
        <Button
          type = "submit"
          variant = "contained"
          color = "primary"
          sx = {{ mt: 3, width: "100%" }}
        >
          Place Order
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutPage;