import Context from "../context/context";
import { useRef, useCallback, useContext, useState, useEffect } from "react";
import { getPageDetailInfo } from "../actions/page";
import PostDisplayPage from "./PostDisplayPage";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
} from "@mui/material";

function Homepage(): any {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const ref: any = useRef();
  const pageNumber: any = useRef(0);

  const contexts = useContext(Context);

  let updateRef: any = (pageNumber: any) => {
    return (pageNumber.current = pageNumber.current + 1);
  };
 

  const fetechData: any = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setError(false)
    await updateRef(pageNumber);
    let pageNo: any = pageNumber.current;
    await getPageDetailInfo(pageNo)
      .then((response:any)=>{
        contexts.setDetails((prevRes: any) => {
          return [...prevRes, ...response];
        });
      })
    .catch (()=> {
      setError(true);
    })
    .finally(()=>{
      setLoading(false);
    })
  };

  useEffect(() => {
    if (pageNumber.current === 0) {
      fetechData();
    } else {
      const timer = setInterval(() => {
        fetechData();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [pageNumber, loading]);

  const lastElementOfPage: any = useCallback(
    (lastElement: any) => {
      if (loading) return;
      if (ref.current) ref.current.disconnect();
      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetechData();
        }
      });
      if (lastElement) ref.current.observe(lastElement);
    },
    [loading, pageNumber]
  );

  return (
    <div data-testid="main_div" style={{ backgroundColor: "#E7EBF0" }}>
      <br></br>
      {(contexts.details || []).length > 0 && (
        <TableContainer
          component={Paper}
          style={{
            width: "95%",
            margin: "0% 2.5% 0px 2.5%",
            fontFamily: "monospace",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor:"#ADD8E6"}}>
                <TableCell style={{ width: "35%", fontSize:"1rem" }}>Title</TableCell>
                <TableCell style={{ width: "45%" ,fontSize:"1rem"}} align="left">
                  Url
                </TableCell>
                <TableCell style={{ width: "10%", fontSize:"1rem"}} align="left">
                  Autor
                </TableCell>
                <TableCell style={{ width: "10%", fontSize:"1rem"}} align="left">
                  Created at
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      )}
      {contexts.details.map((data: any, index: number) => (
        <div
          data-testid={`post-${index}`}
          key={index}
          ref={(contexts.details || []).length === index + 1 ? lastElementOfPage : null}
        >
          <PostDisplayPage
            id={data.created_at_i}
            create={data.created_at}
            title={data.story_title ? data.story_title : data.title}
            author={data.author}
            url={data.story_url ? data.story_url : "NA"}
          />
        </div>
      ))}
      ;
      <div data-testid="lading">{loading && "Please wait page is loading...."}</div>
    </div>
  );
}

export default Homepage;
