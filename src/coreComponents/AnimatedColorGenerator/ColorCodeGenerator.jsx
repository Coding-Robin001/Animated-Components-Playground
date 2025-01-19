import React from 'react'
import "./ColorCodeGenerator.css"
import { useState } from 'react';
import { FaCopy, FaDeleteLeft, FaRecycle, FaX } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { MdDelete, MdNavigateNext } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaSave } from "react-icons/fa";
import { useRef } from 'react';
import { useEffect } from 'react';


const ColorCodeGenerator = () => {
    const [color, setColor] = useState("#ee27c1");
    const [isPaused, setIsPaused] = useState(false);
    const [savedColors, setSavedColors] = useState([]);
    const [editMode, setEditMode] = useState(false); // Track edit mode
    const [selectedColor, setSelectedColor] = useState(null); // Track selected color for editing
    const intervalRef = useRef(null);
    const [colorHistory, setColorHistory] = useState(["#3498db"]);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);


    const transitionDuration = 3000;

    const togglePauseResume = () => {
        if (isPaused) {
            startTransition();
        } else {
            pauseTransition();
        }
        setIsPaused(!isPaused);
    };

    // const startTransition = () => {
    //     intervalRef.current = setInterval(() => {
    //         setColor(generateRandomColor());
    //     }, transitionDuration);
    // };
    const startTransition = () => {
        intervalRef.current = setInterval(() => {
            const newColor = generateRandomColor();
            setColor(newColor);
            setColorHistory((prevHistory) => {
                const updatedHistory = [...prevHistory, newColor];
                setCurrentColorIndex(updatedHistory.length - 1); // Update index to the last
                return updatedHistory;
            });
        }, transitionDuration);
    };

    const pauseTransition = () => {
        clearInterval(intervalRef.current);
    };

    const generateRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return randomColor.padEnd(7, "0");
    };

    const copyToClipboard = (colorCode) => {
        navigator.clipboard.writeText(colorCode).then(
            () => {
                alert(`Color code ${colorCode} copied to clipboard!`);
            },
            (err) => {
                alert("Failed to copy color code");
            }
        );
    };

    const saveColor = () => {
        if (!savedColors.includes(color)) {
            setSavedColors([...savedColors, color]);
        }
    };

    const deleteColor = (colorToDelete) => {
        alert("in deete function")
        setSavedColors((prevColors) => prevColors.filter((color) => color !== colorToDelete));
    };

    useEffect(() => {
        if (!isPaused) {
            startTransition();
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const toggleEditMode = (color) => {
        setSelectedColor(color);
        setEditMode(true);
    };

    const adjustColor = (hex, amount) => {
        const colorObj = hexToRgb(hex);
        const r = Math.min(255, Math.max(0, colorObj.r + amount));
        const g = Math.min(255, Math.max(0, colorObj.g + amount));
        const b = Math.min(255, Math.max(0, colorObj.b + amount));
        return rgbToHex(r, g, b);
    };

    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    };

    const rgbToHex = (r, g, b) => {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    };

    const saveEditedColor = () => {
        if (selectedColor && !savedColors.includes(selectedColor)) {
            setSavedColors((prevColors) => [...prevColors, selectedColor]);
        }
        setEditMode(false);
    };

    const goToPreviousColor = () => {
        if (currentColorIndex > 0) {
            const newIndex = currentColorIndex - 1;
            setColor(colorHistory[newIndex]);
            setCurrentColorIndex(newIndex);
        }
    };

    const goToNextColor = () => {
        if (currentColorIndex < colorHistory.length - 1) {
            setCurrentColorIndex((prevIndex) => prevIndex + 1);
            setColor(colorHistory[currentColorIndex + 1]);
        }
    };

    return (
        <div className='codeGeneratorContainer'>
            <h2>Hex color code generator</h2>
            <div className='mainColorBoxWrapper'>
                <div
                    style={{
                        transition: `background-color ${transitionDuration / 1000}s ease`,
                        backgroundColor: color,
                    }}
                    onClick={() => copyToClipboard(color)}
                    className="mainColorBox"
                >
                    {color.toUpperCase()}
                </div>
                {
                    currentColorIndex > 0 && (
                        <span className='prev' onClick={goToPreviousColor}><GrPrevious size={30} /></span>
                    )
                }
                {
                    currentColorIndex < colorHistory.length - 1 && (
                        <span
                            className='next'
                            onClick={goToNextColor}>
                            <GrNext size={30} />
                        </span>

                    )
                }
                <div className='mainColorbtnBox'>
                    <button
                        className='saveColor'
                        onClick={saveColor}
                    >
                        Save Color
                    </button>
                    <button
                        onClick={togglePauseResume}
                        className={`${isPaused ? "isPaused" : "isResumed"}`}
                    >
                        {isPaused ? "Resume" : "Pause"} Transition
                    </button>
                    <button
                        className='copyCode'
                        onClick={() => copyToClipboard(color)}
                    >
                        Copy color code
                    </button>
                </div>
            </div>

            <div className="hrLine"></div>


            {/* savedColors */}
            <div className='savedColorsBox'>
                <h2>Saved Colors</h2>
                {
                    savedColors.length == 0 ? <h2 style={{ color: "red" }}>No colors saved</h2>
                        : (
                            <div className='savedColorElements'>
                                {savedColors.map((savedColor, index) => (
                                    <div className='savedElWrapper'>
                                        <div
                                            className='savedEl'
                                            key={index}
                                            style={{ backgroundColor: savedColor }}
                                            onClick={() => copyToClipboard(savedColor)}
                                        >
                                            <FaCopy color="#fff" size={25} />
                                        </div>
                                        <div className='savedElInfo'>
                                            <span>
                                                {savedColor}
                                            </span>
                                            <button
                                                onClick={() => toggleEditMode(savedColor)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteColor(saveColor)}
                                            >
                                                <MdDelete size={15} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                }
            </div>


            {/* edit mode */}
            {editMode && selectedColor && (
                <>
                    <h2 className='editColorHead'>Edit Color</h2>
                    <div className='editBox'>
                        <FaX
                            className='closeIcon'
                            onClick={() => setEditMode(false)}
                        />
                        <h3>Editing Color: {selectedColor.toUpperCase()}</h3>
                        <div style={{ backgroundColor: selectedColor }} className='selectedColor'></div>
                        <div className="editButtons">
                            <button
                                onClick={() => setSelectedColor(adjustColor(selectedColor, 20))}
                                className='lighter'
                            >
                                Lighten
                            </button>
                            <button
                                onClick={() => setSelectedColor(adjustColor(selectedColor, -20))}
                                className='darker'
                            >
                                Darken
                            </button>
                            <button
                                onClick={saveEditedColor}
                                className='saveColor'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </>

            )
            }




        </div>
    )
}

export default ColorCodeGenerator
