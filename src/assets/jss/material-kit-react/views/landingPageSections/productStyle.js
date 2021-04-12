import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#000",
    fontWeight: "400",
    textAlign: "justify"
  },
  paypalBTN: {
    padding: '1.5rem',
    borderRadius: 10,
    backgroundColor: '#005780',
  }
};

export default productStyle;
