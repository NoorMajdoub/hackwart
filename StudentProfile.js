import React from "react";
import MDBox from "components/MDBox"; // Assuming you are using Material Dashboard components
import MDTypography from "components/MDTypography"; // Assuming you are using Material Dashboard Typography
import im from "./imgg.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// A simple StudentProfile component
ChartJS.register(ArcElement, Tooltip, Legend);
const skillData = {
  labels: ["Front-end", "Back-end", "Entrepreneurship", "Other Skills"],
  datasets: [
    {
      label: "Skill Levels",
      data: [70, 50, 80, 60], // Replace these with actual skill levels
      backgroundColor: [
        "#36A2EB", // Front-end
        "#FF6384", // Back-end
        "#FFCE56", // Entrepreneurship
        "#4BC0C0", // Other Skills
      ],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
    },
  ],
};
function StudentProfile() {
  return (
    <MDBox
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "1000px", // Adjusted to fit chart and profile
      }}
    >
      {/* Profile Section */}
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={2}
        sx={{ width: "250px" }}
      >
        <img
          src={im}
          alt="Student Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <MDTypography variant="h5" sx={{ marginTop: "10px" }}>
          Hello, Nour!
        </MDTypography>
        <MDTypography variant="body2" color="textSecondary" sx={{ marginTop: "5px" }}>
          Email: nour@gmail.com
        </MDTypography>
      </MDBox>
      {/* Skill Chart Section */}
      <MDBox sx={{ width: "300px", textAlign: "center" }}>
        <MDTypography variant="h6" sx={{ marginBottom: "10px" }}>
          Skills Overview
        </MDTypography>
        <Doughnut data={skillData} />
      </MDBox>
      <div>
        <SimpleEnergyBar />
        <div>
          <h2>Skills Overview</h2>
          <p>Front-End Development: Beginner</p>
          <p>Back-End Development: Intermediate</p>
          <p>Entrepreneurship: Advanced</p>
        </div>
      </div>
    </MDBox>
  );
}
function SimpleEnergyBar() {
  return (
    <MDBox
      sx={{
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "8px",
        height: "20px",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      <MDBox
        sx={{
          width: "75%", // Static width representing energy
          backgroundColor: "#4caf50",
          height: "100%",
        }}
      />
      <MDTypography
        variant="body2"
        sx={{
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
        }}
      >
        75%
      </MDTypography>
    </MDBox>
  );
}
export default StudentProfile;
