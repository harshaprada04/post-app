import { useContext } from "react";
import { useNavigate } from "react-router";
import Context from "../context/context";
import classes from "./PostRawJson.module.css";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";

function PostRawJson() {
  const context: any = useContext(Context);
  const navigation = useNavigate();

  return (
<div className={classes.background}>
      <Button
        data-testid="back_button"
        style={{textTransform: "none" }}
        variant="contained"
        color="primary"
        name="Previous Page"
        className={classes.button}
        onClick={() => navigation(-1)}
      >
        Back
      </Button>
      <TableContainer  component={Paper} style={{width:"95%",margin:"0.5% 2.5% 0px 2.5%"}}>
      <Table aria-label="simple table"
      sx={{
        minWidth: 650,
        width:"max-content",
        [`& .${tableCellClasses.root}`]: {
          borderBottom: "none",
        },
      }}>
        <TableHead>
          <TableRow>
            <TableCell style={{position:"relative", left:"550px", fontSize:"1.1rem",top:"14px"}}>
              Raw Json Data
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{paddingTop:"20px"}}>
           <pre>{JSON.stringify(context.json, null, 10)}</pre> 
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
      </div>
  );
}

export default PostRawJson;
