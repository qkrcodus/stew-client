import React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Paper,
  Grid
} from '@mui/material';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
  width: '322px',
  height: '341px',
  flexShrink: 0,
  borderRadius: '30px',
  border: '5px solid var(--Main-Color, #6BA6FF)',
  boxShadow: '0px 0px 20px 0px rgba(51, 62, 94, 0.30)',
}));

const ReviewList = () => {
  const heights = [341, 341, 341, 341]; // Ensuring all heights are the same

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {heights.map((height, index) => (
          <Grid item key={index}>
            <Paper>
              <StyledAccordion sx={{ height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Contents for Accordion {index + 1}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ReviewList;
