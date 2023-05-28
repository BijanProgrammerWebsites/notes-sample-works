import type {SampleWork} from '~/models/sample-work.model';
import {Difficulty} from '~/enums/difficulty.enum';
import {Category} from '~/enums/category.enum';

export const SAMPLE_WORKS: SampleWork[] = [
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.HARD,
        title: 'TODO',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.HARD,
        title: 'News',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.HARD,
        title: 'Weather',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.HARD,
        title: 'Contacts (Samsung)',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Kanban Board',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Messenger',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'E-commerce',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Movie Download Service (ZarFilm)',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Music Library',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Clockify',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Photo Gallery (Pexels)',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Food Delivery (SnappFood)',
    },
    {
        category: Category.APPLICATION,
        difficulty: Difficulty.BRUTAL,
        title: 'Type Speed Tester',
    },
    {
        category: Category.COMPONENT,
        difficulty: Difficulty.EASY,
        title: 'Flip Countdown Timer',
    },
    {
        category: Category.COMPONENT,
        difficulty: Difficulty.EASY,
        title: 'Different Plans Price and Features Comparison Cards (Free, Basic, Pro)',
    },
    {
        category: Category.COMPONENT,
        difficulty: Difficulty.MEDIUM,
        title: 'Calendar, Date/Time Picker',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.EASY,
        title: 'Server Price Calculator',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.EASY,
        title: 'Feedback and Rating After a Service is Done (Snapp)',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.EASY,
        title: 'Creative 404 Pages',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.EASY,
        title: 'License Agreement',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Comment Section with Reply and Voting System',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Online Transaction (Shaparak)',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Admin Dashboard with Charts',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Social Media Growth Tracker Dashboard with Different Statistics and Charts for Views, Likes, New Subscribers and more',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Quiz (LMS)',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Operating System App Menu with Lock Screen (Windows 8; Aurora New Tab)',
    },
    {
        category: Category.FEATURE,
        difficulty: Difficulty.MEDIUM,
        title: 'Program Installer (Visual Studio Installer)',
    },
    {
        category: Category.GAME,
        difficulty: Difficulty.EASY,
        title: 'Rock, Paper, Scissors',
    },
    {
        category: Category.GAME,
        difficulty: Difficulty.EASY,
        title: 'Tic Tac Toe',
    },
    {
        category: Category.GAME,
        difficulty: Difficulty.HARD,
        title: 'Minesweeper',
    },
    {
        category: Category.GAME,
        difficulty: Difficulty.HARD,
        title: 'Sudoku',
    },
    {
        category: Category.GAME,
        difficulty: Difficulty.HARD,
        title: 'Snake',
    },
    {
        category: Category.SHOWCASE,
        difficulty: Difficulty.EASY,
        title: 'FAQ',
    },
    {
        category: Category.SHOWCASE,
        difficulty: Difficulty.EASY,
        title: 'Timeline (CodeStar)',
    },
    {
        category: Category.SHOWCASE,
        difficulty: Difficulty.MEDIUM,
        title: 'Tournament Bracket',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'Password Generator',
        isDone: true,
        url: 'https://projects.bijanprogrammer.com/passage/',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'Calculator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'Markdown Editor with RTL Support',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'Age Calculator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'BMI Calculator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'QR Code Generator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'Temperature Converter',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'CSS Units Converter',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.EASY,
        title: 'Units Converter',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'Clock, Stopwatch, Countdown, Alarm',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'IP Address Tracker',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'URL Shortener',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'Time Tracker for Cities Around The World with Add/Remove Clock Support',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'Mouse Tester',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'Keyboard Tester',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'CSS Gradient Generator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'CSS Shadow Generator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'CSS Border Generator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.MEDIUM,
        title: 'SVG Waves Generator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.HARD,
        title: 'Binary Search Tree Generator',
    },
    {
        category: Category.TOOLS,
        difficulty: Difficulty.HARD,
        title: 'Photo Filter Applier (Instagram)',
    },
];
