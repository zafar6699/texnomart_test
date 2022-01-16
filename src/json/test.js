export default [
    {
        id: 1,
        title: "2+2",
        type: 1,
        answers: [
            { id: 1, title: "5", isTrue: false },
            { id: 2, title: "4", isTrue: true },
            { id: 3, title: "6", isTrue: false },
        ],
    },
    {
        id: 2,
        title: "5+8",
        type: 1,
        answers: [
            { id: 4, title: "13", isTrue: true },
            { id: 5, title: "10", isTrue: false },
            { id: 6, title: "6", isTrue: false },
        ],
    },
    {
        id: 3,
        title: "12 = ?",
        type: 2,
        answers: [
            { id: 7, title: "2 * 6", isTrue: true },
            { id: 8, title: "4 * 3", isTrue: true },
            { id: 9, title: "6 * 1", isTrue: false },
        ],
    },
    {
        id: 4,
        title: "24 = ?",
        type: 2,
        answers: [
            { id: 7, title: "4 * 6", isTrue: true },
            { id: 8, title: "12 * 2", isTrue: true },
            { id: 9, title: "6 * 3", isTrue: false },
        ],
    },
    {
        id: 5,
        title: "O'zbekistonning poytxati qayer ?",
        type: 3,
        answers: "toshkent",
    },
    {
        id: 6,
        title: "O'zbekiston qaysi yili mustaqillikka erishgan ?",
        type: 3,
        answers: "1991",
    },
];
