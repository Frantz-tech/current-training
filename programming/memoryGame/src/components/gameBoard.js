"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function GameBoard() {
    var images = [
        'https://picsum.photos/id/237/100/100',
        'https://picsum.photos/id/238/100/100',
        'https://picsum.photos/id/239/100/100',
        'https://picsum.photos/id/240/100/100',
        'https://picsum.photos/id/241/100/100',
        'https://picsum.photos/id/242/100/100',
        'https://picsum.photos/id/243/100/100',
        'https://picsum.photos/id/244/100/100'
    ];
    var shuffleCards = function () {
        return __spreadArray(__spreadArray([], images, true), images, true).map(function (img, index) { return ({
            id: index,
            value: img,
            isFlipped: false
        }); })
            .sort(function () { return Math.random() - 0.5; });
    };
    var resetGame = function () {
        var playAgain = confirm('Voulez vous rejouez ?');
        if (!playAgain) {
            alert("Merci d'avoir joué ! ");
        }
        else {
            setCards(shuffleCards);
            setFirstCard(null);
            setSecondCard(null);
            setIsChecked(false);
        }
    };
    var _a = (0, react_1.useState)(shuffleCards), cards = _a[0], setCards = _a[1];
    (0, react_1.useEffect)(function () {
        if (cards.every(function (card) { return card.foundBy !== undefined; })) {
            resetGame();
        }
    }, [cards]);
    // Reprendre ici !
    var _b = (0, react_1.useState)(null), firstCard = _b[0], setFirstCard = _b[1];
    var _c = (0, react_1.useState)(null), secondCard = _c[0], setSecondCard = _c[1];
    var _d = (0, react_1.useState)(false), isChecked = _d[0], setIsChecked = _d[1];
    var handleCardClick = function (id) {
        console.log('hello', id);
        if (isChecked) {
            return;
        }
        var clickedCard = cards.find(function (card) { return card.id === id; });
        if (!clickedCard || clickedCard.foundBy !== undefined) {
            return;
        }
        var flippedCard = __assign(__assign({}, clickedCard), { isFlipped: true });
        var updatedCards = cards.map(function (card) {
            return card.id === id ? flippedCard : card;
        });
        setCards(updatedCards);
        if (!firstCard) {
            setFirstCard(flippedCard);
            return;
        }
        if (!secondCard) {
            setSecondCard(flippedCard);
            setIsChecked(true);
        }
        setTimeout(function () {
            if (firstCard.value === flippedCard.value) {
                setCards(function (prevCard) {
                    return prevCard.map(function (card) {
                        return card.value === firstCard.value ? __assign(__assign({}, card), { foundBy: 1 }) : card;
                    });
                });
            }
            else {
                setCards(function (prevCard) {
                    return prevCard.map(function (card) {
                        return card.id === firstCard.id || card.id === flippedCard.id
                            ? __assign(__assign({}, card), { isFlipped: false }) : card;
                    });
                });
            }
        }, 500);
        setFirstCard(null);
        setSecondCard(null);
        setIsChecked(false);
    };
}
//   return (
//     <div className='bg-amber-400 p-8'>
//       <h1 className='text-red-400'> GameBoard </h1>
//       <div
//         className='flex items-center justify-between w-full px-8
//       '>
//         <div className='m-2'>P1 - Score :</div>
//         <div className='m-2'>P2 - Score: </div>
//       </div>
//       <div className='grid grid-cols-4 grid-rows-4 gap-2.5 justify-center mx-8 my-5'>
//         {cards.map(card => (
//           <Card
//             key={card.id}
//             id={card.id}
//             value={card.value}
//             isFlipped={card.isFlipped}
//             onClick={handleCardClick}
//           />
//         ))}
//       </div>
//       <div>
//         <button onClick={resetGame}>Rejouer</button>
//       </div>
//     </div>
//   )
// }
// export default GameBoard
