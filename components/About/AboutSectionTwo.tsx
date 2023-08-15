import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import './AboutSectionTwo.css';


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
        Our 2023-24 Officer Team
      </Typography>
    </Box>
    <Box my={{ xs: '3rem', sm: '5rem' }} ml={{ lg: '5rem' }} sx={{ml: "5%", mr: "5%"}}>

    <Grid container justifyContent="center" spacing={10}>

        <OfficerCard
          name="Yash Nayak"
          position="President"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/yash-nayak-headshot.png?raw=true"
          alt="Yash Nayak"
        />
        <OfficerCard
          name="Aadi Jadia"
          position="VP of Community Service"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/aadi-jadia-headshot.png?raw=true"
          alt="Aadi Jadia"
        />
        <OfficerCard
          name="Ethan Walling"
          position="VP of Community Service"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/ethan-walling-headshot.png?raw=true"
          alt="Ethan Walling"
        />
        <OfficerCard
          name="Ishaan Gupta"
          position="VP of Competition"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/ishaan-gupta-headshot.png?raw=true"
          alt="Ishaan Gupta"
        />
        <OfficerCard
          name="Rashmi Ravindran"
          position="VP of Competition"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/rashmi-ravindran-headshot.png?raw=true"
          alt="Rashmi Ravindran"
        />
        <OfficerCard
          name="Jaivel Italia"
          position="VP of Finance"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/jaivel-italia-headshot.png?raw=true"
          alt="Jaivel Italia"
        />
        <OfficerCard
          name="Preeti Italia"
          position="VP of Marketing"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/preeti-makam-headshot.png?raw=true"
          alt="Preeti Italia"
        />
        <OfficerCard
          name="Rayna Shah"
          position="VP of Recruitment"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/rayna-shah-headshot.png?raw=true"
          alt="Rayna Shah"
        />
        <OfficerCard
          name="Hannah Peters"
          position="VP of Special Events"
          imageSrc="https://github.com/pkrish5/AllenDECAWebpage/blob/main/public/images/officers/hannah-peters-headshot.png?raw=true"
          alt="Hannah Peters"
        />
      </Grid>
      </Box>
    </Container>
  );
};

export default AboutSectionTwo;
