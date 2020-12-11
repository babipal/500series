import React from "react";
import { Typography } from "@material-ui/core";
//import { Link } from "gatsby"
import { Link } from "gatsby-theme-material-ui";

export default function CompanyPage() {
  return (
    <div>
      <p>this is the company page</p>
      <Typography>
         <Link to="/">homepage</Link>!
      </Typography>
      <Link to="/product">product</Link>!
    </div>
  );
}
