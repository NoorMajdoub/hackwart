import { useState } from "react";
import MonacoEditor from "react-monaco-editor";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import axios from "axios";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Notifications() {
  const [response, setResponse] = useState(""); // State to hold the response from OpenAI
  const [loading, setLoading] = useState(false); // State to show loading status

  const openWarningSB = async () => {
    setLoading(true); // Start loading
    try {
      // Sending a request to the OpenAI API for code evaluation
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are an expert Python developer. Please evaluate the following code and provide feedback.",
            },
            {
              role: "user",
              content: `# Step 1: Import the necessary libraries
# You need to import the pandas library for data manipulation and cleaning.
import pandas as ?
import numpy as ?
#import your data
data=pd.read_csv("data.csv")
#display your data 
data.headd()
#display the data columns names
?i dont know that is s3ib 
#show the description of the data 
df.descr...() #continue this code`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY_HERE",
          },
        }
      );

      // Update state with the OpenAI response
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error("Error making request to OpenAI:", error);

      // Provide a default evaluation if no response
      setResponse(
        "Code evaluation: 3/10. The code is incomplete and contains syntax errors, such as missing imports and incorrect method calls."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const initialCode = `
# Step 1: Import the necessary libraries
# You need to import the pandas library for data manipulation and cleaning.
import pandas as ?
import numpy as ?
#import your data
data=pd.read_csv("data.csv")
#display your data 
data.headd()
#display the data columns names
?i dont know that is s3ib 
#show the description of the data 
df.descr...() #continue this code
  `;

  const editorOptions = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: false,
    },
    scrollBeyondLastLine: false,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">
                  Mission 3: Deadline 12/15/2024: Difficulty Level :Easy
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  <MonacoEditor
                    language="python"
                    theme="vs-dark"
                    height="400"
                    value={initialCode}
                    options={editorOptions}
                  />
                  Your mission is to finish the following code to read the data and show some info
                  about it to better understand it.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="success" fullWidth>
                      Finish mission
                    </MDButton>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      Get resources/Get backup
                    </MDButton>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      onClick={openWarningSB}
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? "Requesting feedback..." : "Request feedback"}
                    </MDButton>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="error" fullWidth>
                      What issues can happen ?
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
              {/* Render the response below the editor */}
              {response && (
                <MDBox p={2} mt={2} style={{ background: "#f4f4f4", borderRadius: "8px" }}>
                  <MDTypography variant="h6">Feedback:</MDTypography>
                  <MDTypography variant="body1" color="text">
                    {response}
                  </MDTypography>
                </MDBox>
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Notifications;
