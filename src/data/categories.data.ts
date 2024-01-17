import type {Category} from '~/models/category.model';
import {Difficulty} from '~/enums/difficulty.enum';

export const CATEGORIES: Category[] = [
    {
        title: 'Application',
        sampleWorks: [
            {
                difficulty: Difficulty.HARD,
                title: 'TODO',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'News',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Weather',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Contacts (Samsung)',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Kanban Board',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Messenger',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'E-commerce',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Movie Download Service (ZarFilm)',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Music Library',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Clockify',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Photo Gallery (Pexels)',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Food Delivery (SnappFood)',
            },
            {
                difficulty: Difficulty.BRUTAL,
                title: 'Type Speed Tester',
            },
        ],
    },
    {
        title: 'Component',
        sampleWorks: [
            {
                difficulty: Difficulty.EASY,
                title: 'Flip Countdown Timer',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Different Plans Price and Features Comparison Cards (Free, Basic, Pro)',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Calendar, Date/Time Picker',
            },
        ],
    },
    {
        title: 'Feature',
        sampleWorks: [
            {
                difficulty: Difficulty.EASY,
                title: 'Server Price Calculator',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Feedback and Rating After a Service is Done (Snapp)',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Creative 404 Pages',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'License Agreement',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Comment Section with Reply and Voting System',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Online Transaction (Shaparak)',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Admin Dashboard with Charts',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Social Media Growth Tracker Dashboard with Different Statistics and Charts for Views, Likes, New Subscribers and more',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Quiz (LMS)',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Operating System App Menu with Lock Screen (Windows 8; Aurora New Tab)',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Program Installer (Visual Studio Installer)',
            },
        ],
    },
    {
        title: 'Game',
        sampleWorks: [
            {
                difficulty: Difficulty.EASY,
                title: 'Rock, Paper, Scissors',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Tic Tac Toe',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Minesweeper',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Sudoku',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Snake',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Persian Puzzles (persianpuzzles.com)',
                isPriority: true,
            },
        ],
    },
    {
        title: 'Landing Page',
        sampleWorks: [
            {
                difficulty: Difficulty.HARD,
                title: 'Iran: Culture | History | Sightseeing | Agriculture | Technical, Sports and Military Achievements',
                isPriority: true,
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Car Exhibition',
                isPriority: true,
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Auto Repair Shop',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Nursing',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Interior Decorator',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Restaurant',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Board Game Coffee Shop (Fekrkade)',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Barber Shop',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Photo Shoot',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Grocery Delivery',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Hotel',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Gym',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Real Estate',
            },
        ],
    },
    {
        title: 'Only Frontend',
        sampleWorks: [
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Admin Panel',
                isPriority: true,
            },
        ],
    },
    {
        title: 'Showcase',
        sampleWorks: [
            {
                difficulty: Difficulty.EASY,
                title: 'FAQ',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Timeline (CodeStar)',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Tournament Bracket',
            },
        ],
    },
    {
        title: 'Tools',
        sampleWorks: [
            {
                difficulty: Difficulty.EASY,
                title: 'Password Generator',
                isDone: true,
                url: 'https://passaid.ir/',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Calculator',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Markdown Editor with RTL Support',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Age Calculator',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'BMI Calculator',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'QR Code Generator',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Temperature Converter',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'CSS Units Converter',
            },
            {
                difficulty: Difficulty.EASY,
                title: 'Units Converter',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Clock, Stopwatch, Countdown, Alarm',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'IP Address Tracker',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'URL Shortener',
                isDone: true,
                url: 'https://schort.ir/',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Time Tracker for Cities Around The World with Add/Remove Clock Support',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Mouse Tester',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'Keyboard Tester',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'CSS Gradient Generator',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'CSS Shadow Generator',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'CSS Border Generator',
            },
            {
                difficulty: Difficulty.MEDIUM,
                title: 'SVG Waves Generator',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Binary Search Tree Generator',
            },
            {
                difficulty: Difficulty.HARD,
                title: 'Photo Filter Applier (Instagram)',
            },
        ],
    },
];
