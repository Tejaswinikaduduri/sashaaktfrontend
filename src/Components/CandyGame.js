import React, { useEffect, useState } from 'react';
import ScoreBoard from './CandyScoreBoard';
import { Link } from 'react-router-dom';

const width = 8;

const blueCandy = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706808705/100th-day-of-school-cartoon-colored-clipart-free-vector_ornyik.jpg';
const greenCandy = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706808769/pencil-icon-eraser-pen-flat-design-and-back-to-school-concept-on-white-background_vkzu3y.jpg';
const orangeCandy = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706808895/1000_F_212275103_eqFyMowjOOuBdbjKtwIOMukn5BpXKzeo_veacyr.jpg';
const purpleCandy = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706808956/1000_F_43944357_lkIydQz1xM7kc6A4K35arFqxRoSvxPMZ_lyi0hd.jpg';
const redCandy = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706809028/1000_F_214192955_3J4FVB4DzG9fTqIcglPrB4kbqwLyC7s6_vjn42m.jpg';
const yellowCandy = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706809118/1000_F_82781302_sJnq5ywI0ykm4jHvgzSL05nTBCFptxWb_vkah0s.jpg';
const blank = 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706809195/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0_mhj0ag.png';

const candyColors = [
    blueCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
    greenCandy
];

const CandyGame = () => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameResult, setGameResult] = useState(null);
    const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
    const [squareBeingDragged, setSquareBeingDragged] = useState(null);
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
    const [scoreDisplay, setScoreDisplay] = useState(0);

    useEffect(() => {
        const createBoard = () => {
            const randomColorArrangement = [];
            for (let i = 0; i < width * width; i++) {
                const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
                randomColorArrangement.push(randomColor);
            }
            setCurrentColorArrangement(randomColorArrangement);
        };

        createBoard();
    }, []);

    const handlePlayAgainClick = () => {
        setScoreDisplay(0);
        setTimeLeft(30);
        setGameResult(null);
    };

    const checkForColumnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === blank

            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 4)
                columnOfFour.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const checkForRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const decidedColor = currentColorArrangement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
            const isBlank = currentColorArrangement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 4)
                rowOfFour.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const checkForColumnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === blank

            if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 3)
                columnOfThree.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const checkForRowOfThree = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const decidedColor = currentColorArrangement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
            const isBlank = currentColorArrangement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 3)
                rowOfThree.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const moveIntoSquareBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArrangement[i] === blank) {
                let randomNumber = Math.floor(Math.random() * candyColors.length)
                currentColorArrangement[i] = candyColors[randomNumber]
            }

            if ((currentColorArrangement[i + width]) === blank) {
                currentColorArrangement[i + width] = currentColorArrangement[i]
                currentColorArrangement[i] = blank
            }
        }
    }

    const dragStart = (e) => {
        if (e.target && e.target.getAttribute('data-id')) {
            setSquareBeingDragged(e.target);
        }
    };

    const dragDrop = (e) => {
        if (e.target && e.target.getAttribute('data-id')) {
            setSquareBeingReplaced(e.target);
        }
    };

    const dragEnd = () => {
        if (squareBeingDragged && squareBeingReplaced) {
            const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
            const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));
            const validMoves = [squareBeingDraggedId - 1, squareBeingDraggedId - width, squareBeingDraggedId + 1, squareBeingDraggedId + width];
            const validMove = validMoves.includes(squareBeingReplacedId);


            if (validMove) {
                currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src');
                currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src');

                const isAColumnOfFour = checkForColumnOfFour();
                const isARowOfFour = checkForRowOfFour();
                const isAColumnOfThree = checkForColumnOfThree();
                const isARowOfThree = checkForRowOfThree();

                if (!(squareBeingReplacedId && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree))) {
                    currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src');
                    currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src');
                    setCurrentColorArrangement([...currentColorArrangement]);
                    setSquareBeingDragged(null);
                    setSquareBeingReplaced(null);
                }

            } else {
                currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src');
                currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src');
                setCurrentColorArrangement([...currentColorArrangement]);
            }
        }
    };


    const createBoard = () => {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
            randomColorArrangement.push(randomColor)
        }
        setCurrentColorArrangement(randomColorArrangement)
    }

    useEffect(() => {
        createBoard()
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour()
            checkForColumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 100)
        return () => clearInterval(timer)
    }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])



    return (

        <div className="app9">
            <div className='home-about'>
                <Link to='/candyhome'><img className='candy3' src={'https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-home-page-signature-icon-home-page-button-navigation-image_1061910.jpg'} alt="Candy 1" /></Link>
                <Link to='/candyabout'><img className='candy4' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVpXgUZQnJNF8ThmRA0XCctf3fq3TSwMF6BRf1XoP2Hnfhi0-tBxdZs8h6-OHJ51dmY4&usqp=CAU'} alt="Candy 2" /></Link>
            </div>

            <ScoreBoard
                scoreDisplay={scoreDisplay}
                timeLeft={timeLeft}
                gameResult={gameResult}
                handlePlayAgainClick={handlePlayAgainClick}
            />
            <div className="game9">
                {currentColorArrangement.map((candyColor, index) => (
                    <img
                        key={index}
                        src={candyColor}
                        alt={candyColor}
                        data-id={index}
                        draggable={true}
                        onDragStart={dragStart}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.preventDefault()}
                        onDragLeave={(e) => e.preventDefault()}
                        onDrop={dragDrop}
                        onDragEnd={dragEnd}
                    
                    />
                ))}
            </div>
        </div>


    )

}

export default CandyGame;
