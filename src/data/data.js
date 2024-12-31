import Netflix from './../assets/projects/netflix.png'
import NumberGuessingGame from './../assets/projects/ngg.jpg'
import HRMS from './../assets/projects/hrms.png'
import Agrohub from './../assets/projects/agrohub.png'
import WeatherApp from './../assets/projects/weather-app.PNG'
import Todolist from './../assets/projects/todo.PNG'

export const data = {
    name: " Thirunalankumar V",
    role: "Full Stack Developer",
    description:"As a computer science engineering student, I am passionate about technology, driven by curiosity and innovation. I embrace challenges, expand my skills, and shape the future through dedication and ingenuity in coding.",
    resume: "https://drive.google.com/file/d/1bEhH2LzGAQDvPDFwFj_jdzIgSZihK-dr/view?usp=drive_link",
    social: {
        linkedin : "https://www.linkedin.com/in/thirunalankumar/",
        github: "https://github.com/Nalankumar",
        instagram: "https://www.instagram.com/thirunalankumar/"
    },
    skills: {
        front_end: ["HTML","CSS","Javascript","ReactJS","TailwindCSS"],
        back_end: ["Java","Python","SpringBoot", "nodejs"],
        dbms: ["SQL","MongoDB"],
        tools: ["Git", "GitHub", "Maven", "AWS Cloud"]
    },
    projects: [
        {
            name: "Todo List",
            img: Todolist,
            github: "https://github.com/Nalankumar/Todolist"
        },
        {
            name: "MovieAPI",
            img: Netflix,
            github: "https://github.com/Nalankumar/MovieApi",
        },
        {
            name: "HR Management System",
            img: HRMS,
            github: "https://github.com/Nalankumar/HRMS"
        },
        {
            name: "Number Guessing Game",
            img: NumberGuessingGame,
            github: "https://github.com/Nalankumar/Number_Guessing_Game"
        },
        {
            name: "Netflix Landing Page Clone",
            img: Netflix,
            github: "https://github.com/Nalankumar/Netflix_clone"
        },
        {
            name: "Agrohub",
            img: Agrohub,
            github: "https://github.com/Nalankumar/agrohub"
        },
        {
            name: "Weather App",
            img: WeatherApp,
            github: "https://github.com/Nalankumar/weather-app"
        }
    ],
};