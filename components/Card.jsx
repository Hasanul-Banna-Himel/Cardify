'use client';

import { useUser } from '@clerk/nextjs';
import { Box, Container, Paper, TextField, Typography, Button, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { writeBatch, doc, collection, getDoc } from 'firebase/firestore';


export default function Generate() {
    const { user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const defaultFlashcards = [
        { front: 'What is a class in Java?', back: 'A class is a blueprint for creating objects.' },
        { front: 'What is inheritance in Java?', back: 'Inheritance allows a new class to inherit from an existing class.' },
        { front: 'What is polymorphism in Java?', back: 'Polymorphism lets objects be treated as instances of their parent class.' },
        { front: 'What is an interface in Java?', back: 'An interface is a reference type with method signatures and constants.' },
        { front: 'What is the difference between "==" and ".equals()" in Java?', back: '"==" checks for reference equality; ".equals()" checks for value equality.' },
        { front: 'What is encapsulation in Java?', back: 'Encapsulation hides the internal state and requires all interaction to be performed through an object’s methods.' } // Added new flashcard
    ];


    useEffect(() => {
        setFlashcards(ensureEvenNumberOfFlashcards(defaultFlashcards));
    }, []);


    const ensureEvenNumberOfFlashcards = (cards) => {
        if (cards.length % 2 !== 0) {
            return [...cards, { front: '', back: '' }];
        }
        return cards;
    };


    const handleSubmit = async () => {
        document.querySelector("#loader-parent").style.display = "flex";


        try {
            const response = await fetch('api/generate', {
                method: 'POST',
                body: text,
            });


            const data = await response.json();
            const evenCards = ensureEvenNumberOfFlashcards(data);
            setFlashcards(evenCards);
        } finally {
            document.querySelector("#loader-parent").style.display = "none";
            window.dispatchEvent(new Event('resize'));
            let elements = document.querySelectorAll(".MuiGrid-root");
            Array.from(elements).forEach(el => {
                el.style.display = "none";
                el.offsetHeight;
                el.style.display = "";
            });
        }
    };


    const handleCardClick = (index) => {
        setFlipped(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };


    const handleEnter = (ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            handleSubmit();
        }
    };


    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ mb: 2, fontFamily: 'Poppins, sans-serif', color: '#333', fontWeight: 600 }}>
                    Generate Flashcards
                </Typography>
                <Paper sx={{ p: 4, width: '100%', borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleEnter}
                        label="Enter text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': { borderRadius: 2 },
                            '& .MuiInputLabel-root': { fontFamily: 'Poppins, sans-serif', fontWeight: 500 },
                            '& .MuiInputBase-input': { fontFamily: 'Poppins, sans-serif' },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            background: 'linear-gradient(45deg, #FF4081 30%, #FF80AB 90%)',
                            color: '#fff',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #FF80AB 30%, #FF4081 90%)',
                            },
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            fontWeight: 600,
                        }}
                    >
                        Cardify
                    </Button>
                </Paper>
            </Box>
            <div id="loader-parent">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>


            {flashcards.length > 0 && (
                <Box sx={{ mt: 4 }}>
                    <Typography textAlign="center" variant="h5" sx={{ mb: 2, fontFamily: 'Poppins, sans-serif', color: '#333', fontWeight: 600 }}>
                        Cardify Preview
                    </Typography>
                    <Grid container spacing={3}>
                        {flashcards.map((flashcard, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} className="animate-fadeIn">
                                <Card
                                  className={`card ${flipped[index] ? 'animate-flip' : ''}`}
                                  sx={{ borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', perspective: '1000px' }}
                                >
                                    <CardActionArea onClick={() => handleCardClick(index)}>
                                        <CardContent sx={{ position: 'relative', height: '250px' }}>
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                    transformStyle: 'preserve-3d',
                                                    transition: 'transform 0.6s',
                                                    transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                                }}
                                            >
                                                <Box sx={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: '#64B5F6', // Light Blue for the front
                                                    color: 'white',
                                                    backfaceVisibility: 'hidden',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    padding: 2,
                                                    zIndex: flipped[index] ? 0 : 1,
                                                }}>
                                                    <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', fontWeight: 500 }}>
                                                        {flashcard.front}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: '#81C784', // Light Green for the back
                                                    color: 'white',
                                                    backfaceVisibility: 'hidden',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    padding: 2,
                                                    transform: 'rotateY(180deg)',
                                                    zIndex: flipped[index] ? 1 : 0,
                                                }}>
                                                    <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', fontWeight: 500 }}>
                                                        {flashcard.back}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Container>
    );
}
