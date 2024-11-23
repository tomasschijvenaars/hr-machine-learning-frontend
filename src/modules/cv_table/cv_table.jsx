import React from "react";
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

  const handleSelect = async (userId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/jobs/${jobId}/select-user`,
        { userId }, // Wrap userId in an object for correct JSON payload
        {
          headers: {
            "Content-Type": "application/json", // Use JSON format
          },
        }
      );

      console.log(response.data);

      if (response.data?.success) {
        router.reload(); // Reload the page if the action is successful
      }
    } catch (error) {
      console.error("Error selecting user:", error);
    }
  };

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
          {users
            .filter(
              (user) => user.name && user.skills && typeof user.skills === 'object' // Filter out users without name or valid skills
            )
            .map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>

                {/* Check if user.skills is defined and is an object */}
                <TableCell>
                  {user.percent_skills}%
                </TableCell>

                <TableCell>{user.percent_experience}%</TableCell>
                <TableCell>{user.goodEnough ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleSelect(user.id)}
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
