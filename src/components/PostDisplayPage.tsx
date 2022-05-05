import { useNavigate } from "react-router";
import { useContext } from "react";
import Context from "../context/context";
import { Table, TableCell, TableRow, TableBody, TableContainer } from "@mui/material";
import Paper from '@mui/material/Paper';

function PostDisplayPage(props: {
  id: number;
  title: string;
  author: string;
  create: string;
  url:string;
}) {
  const context = useContext(Context);
  const navigation = useNavigate();

  async function submitHandler(id: number) {
    let rawJson: any = await context.details.find((data: any) => {
      return data.created_at_i === id;
    });
    context.setJson(rawJson);
    navigation("/json");
  }

  return (
    <div>
        <TableContainer  component={Paper} style={{width:"95%",margin:"0% 2.5% 0px 2.5%"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow >
              <TableCell style={{width:"35%", cursor:"pointer"}}
              onClick={() => submitHandler(props.id)}
              data-testid="title">
                {props.title}
              </TableCell>
              <TableCell style={{width:"45%", cursor:"pointer"}} align="left"
               onClick={() => submitHandler(props.id)}
               data-testid="url">
                 {props.url}
              </TableCell>
              <TableCell style={{width:"10%"}} align="left" data-testid="author">
              {props.author}
              </TableCell>
              <TableCell style={{width:"10%"}} align="left" data-testid="date">
              {new Date(props.create).toLocaleDateString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default PostDisplayPage;
