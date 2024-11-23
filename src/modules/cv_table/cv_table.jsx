import React, { useState } from "react";

// Core
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

function CVTable({ jobId, users }) {
  const handleSelect = async userId => {
    try {
      const response = await axios.post(
        `http://localhost:8000/jobs/${jobId}/select-user`,
        userId,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      if (response.data?.success) router.reload();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const rows = [];

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
          {rows.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.skills}%</TableCell>
              <TableCell>{user.experience}%</TableCell>
              <TableCell>{user.goodEnough}</TableCell>
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
};

export default CVTable;
