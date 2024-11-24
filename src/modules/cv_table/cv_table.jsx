import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

function CVTable({ jobId, users = [] }) {
  const router = useRouter();

  const [results, setResults] = useState([]);

  const handleSelect = async (user) => {
    try {
      const response = await axios.post(`http://localhost:8000/jobs/${jobId}/select-user/${user.user.id}`, 
        {
          "percent_skills": user.skills_perc,
          "percent_experience": user.experience_perc,
          "job_succesful": user.result
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error selecting user:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/knn/${jobId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(data.results);
        setResults(data.results);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    getData();
  }, [jobId]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>% Skills</TableCell>
            <TableCell>% Experience</TableCell>
            <TableCell>Good Enough</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results
            ?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.user.name}</TableCell>

                {/* Check if user.skills is defined and is an object */}
                <TableCell>
                  {user.skills_perc}%
                </TableCell>

                <TableCell>{user.experience_perc}%</TableCell>
                <TableCell>{user.result ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      backgroundColor: '#72BEAE',
                    }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleSelect(user)}
                  >
                    Select
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CVTable;
