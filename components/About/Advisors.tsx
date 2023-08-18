import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import './OfficerTeam.css';


const OfficerCard = ({ name, position, imageSrc, alt }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box mb={{ xs: '2rem', sm: '5rem', md: 0 }} className="profile">
      <img
        className="pic"
        style={{ borderRadius: 15, height: 339, width: 339 }}
        src={imageSrc}
        alt={alt}
      />
      <Typography variant="h5" color="textPrimary" mt="1rem">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">{position}</Typography>
    </Box>
  </Grid>
);

const AboutSectionTwo = () => {
  return (
    <Container maxWidth={false} >
    <Box my={{ xs: '3rem', sm: '5rem' }} ml={{ lg: '5rem' }} >
      <Typography variant="h3" textAlign={{ xs: 'center', lg: 'start' }}>
        Our Advisors
      </Typography>
    </Box>
    <Box my={{ xs: '3rem', sm: '5rem' }} ml={{ lg: '5rem' }} sx={{ml: "5%", mr: "5%"}}>

    <Grid container justifyContent="center" spacing={10}>

        <OfficerCard
          name="Susan Rowley"
          position="Deca Advisor"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/yash-nayak-headshot.png?raw=true"
          alt="Rowley"
        />
        <OfficerCard
          name="Peter Van Der Ziel"
          position="Deca Advisor"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/aadi-jadia-headshot.png?raw=true"
          alt="Mr. V"
        />
        <OfficerCard
          name="Rhonda Vollmer"
          position="Deca Advisor"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/ethan-walling-headshot.png?raw=true"
          alt="Ethan Walling"
        />

      </Grid>
      </Box>
    </Container>
  );
};

export default AboutSectionTwo;
