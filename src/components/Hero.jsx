import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import video from "../assets/background-hero..mp4";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Descubre los Mejores Cortes en Super Carnes El Dorian
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Carnes premium preparadas con esmero y entregadas
            frescas a tu puerta.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
            href="#shop"
          >
            Ordena ahora
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
