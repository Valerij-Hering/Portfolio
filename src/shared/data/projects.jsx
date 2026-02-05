import eventsCalendar from "../assets/images/projects/projectCard/events-calendar.webp";
import eventsCalendarModal from "../assets/images/projects/projectModal/events-calendar.webp";
import weatherApp from "../assets/images/projects/projectCard/WatherApp.webp";
import weatherAppModal from "../assets/images/projects/projectModal/WatherApp.webp";
import foodies from "../assets/images/projects/projectCard/Foodies.webp";
import foodiesModal from "../assets/images/projects/projectModal/Foodies.webp";
import yoga from "../assets/images/projects/projectCard/yoga.webp";
import yogaModal from "../assets/images/projects/projectModal/yoga.webp";
import recipesApp from "../assets/images/projects/projectCard/recipes-app.webp";
import recipesModal from "../assets/images/projects/projectModal/recipes.webp";
import splitBill from "../assets/images/projects/projectCard/splitBill.webp";
import splitBillModal from "../assets/images/projects/projectModal/splitBill.webp";
import marryChristmas from "../assets/images/projects/projectCard/marry-christmas2.webp";
import marryChristmaslModal from "../assets/images/projects/projectModal/marry-christmas2.webp";
import clockApp from "../assets/images/projects/projectCard/clockApp.webp";
import clockAppModal from "../assets/images/projects/projectModal/clockApp.webp";
import stopwatchApp from "../assets/images/projects/projectCard/stopwatch-app.webp";
import stopwatchAppModal from "../assets/images/projects/projectModal/stopwatch-app.webp";
import toDoPlanner from "../assets/images/projects/projectCard/ToDoList-node.webp";
import toDoPlannerModal from "../assets/images/projects/projectModal/ToDoList-node.webp";
import formApp from "../assets/images/projects/projectCard/Form.webp";
import formAppModal from "../assets/images/projects/projectModal/Form.webp";
import quizGame from "../assets/images/projects/projectCard/quiz2.webp";
import quizGameModal from "../assets/images/projects/projectModal/quiz2.webp";
import {
        UserIcon,
        ApiIcon, 
        DatabaseIcon, 
        ResponsiveIcon, 
        PerformanceIcon, 
        EarthIcon,
        ChartIcon,
        ShoppingIcon,
        PaymentIcon,
        CalculatorIcon,
        MessageIcon,
        AlertIcon,
        SearchIcon,
        TimerIcon,
        MusicIcon,
        SnowIcon,
        CalendarIcon,
        ThemeIcon,
        ClockIcon,
        ScoreIcon,
        QuestionIcon,
        TaskIcon,
        SecurityIcon,
        MailIcon,
      } from "../assets/svg/TechStackIcons";



export const projects = [

  {
    id: 1,
    title: "Quiz Game",
    tech: "HTML | CSS | JavaScript",
    image: quizGame,
    imageModal: quizGameModal,
    type: "frontend",
    link: "https://quiz-game-vh.netlify.app/",
    github: "https://github.com/username/quiz-game",
    description: "projects_data.quiz.description",
    features: [
      {
        icon: (color, size) => <TimerIcon color={color} size={size} />,
        title: "projects_data.quiz.features.countdown.title",
        description: "projects_data.quiz.features.countdown.description"
      },
      {
        icon: (color, size) => <ScoreIcon color={color} size={size} />,
        title: "projects_data.quiz.features.score.title",
        description: "projects_data.quiz.features.score.description"
      },
      {
        icon: (color, size) => <QuestionIcon color={color} size={size} />,
        title: "projects_data.quiz.features.navigation.title",
        description: "projects_data.quiz.features.navigation.description"
      },
      {
        icon: (color, size) => <AlertIcon color={color} size={size} />,
        title: "projects_data.quiz.features.alerts.title",
        description: "projects_data.quiz.features.alerts.description"
      }
    ]
  },

  {
    id: 2,
    title: "To-Do List",
    tech: "React.js | Node.js | MongoDB | CSS",
    image: toDoPlanner,
    imageModal: toDoPlannerModal,
    type: "fullstack",
    link: "https://to-do-list-vh.netlify.app/",
    github: {
      frontend: "https://github.com/Valerij-Hering/to-do-list-frontend",
      backend: "https://github.com/Valerij-Hering/to-do-list-backend"
    },
    description: "projects_data.todo.description",
    features: [
      {
        icon: (color, size) => <ApiIcon color={color} size={size} />,
        title: "projects_data.todo.features.api.title",
        description: "projects_data.todo.features.api.description"
      },
      {
        icon: (color, size) => <DatabaseIcon color={color} size={size} />,
        title: "projects_data.todo.features.database.title",
        description: "projects_data.todo.features.database.description"
      },
      {
        icon: (color, size) => <TaskIcon color={color} size={size} />,
        title: "projects_data.todo.features.taskManagement.title",
        description: "projects_data.todo.features.taskManagement.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.todo.features.responsive.title",
        description: "projects_data.todo.features.responsive.description"
      }
    ]
  },

  {
    id: 3,
    title: "Form",
    tech: "HTML | CSS | Node.js | MongoDB",
    image: formApp,
    imageModal: formAppModal,
    type: "fullstack",
    link: "https://form-vh.netlify.app/",
    github: "https://github.com/Valerij-Hering/Form",
    description: "projects_data.form.description",
    features: [
      {
        icon: (color, size) => <ApiIcon color={color} size={size} />,
        title: "projects_data.form.features.backendIntegration.title",
        description: "projects_data.form.features.backendIntegration.description"
      },
      {
        icon: (color, size) => <DatabaseIcon color={color} size={size} />,
        title: "projects_data.form.features.mongoStorage.title",
        description: "projects_data.form.features.mongoStorage.description"
      },
      {
        icon: (color, size) => <SecurityIcon color={color} size={size} />,
        title: "projects_data.form.features.secureHandling.title",
        description: "projects_data.form.features.secureHandling.description"
      },
      {
        icon: (color, size) => <MailIcon color={color} size={size} />,
        title: "projects_data.form.features.emailCapture.title",
        description: "projects_data.form.features.emailCapture.description"
      }
    ]
  },

  {
    id: 4,
    title: "Stopwatch",
    tech: "HTML | CSS | JavaScript",
    image: stopwatchApp,
    imageModal: stopwatchAppModal,
    type: "frontend",
    link: "https://stopwatch-app-vh.netlify.app",
    github: "https://github.com/Valerij-Hering/Stopwatch-App",
    description: "projects_data.stopwatch.description",
    features: [
      {
        icon: (color, size) => <TimerIcon color={color} size={size} />,
        title: "projects_data.stopwatch.features.precision.title",
        description: "projects_data.stopwatch.features.precision.description"
      },
      {
        icon: (color, size) => <PerformanceIcon color={color} size={size} />,
        title: "projects_data.stopwatch.features.laps.title",
        description: "projects_data.stopwatch.features.laps.description"
      },
      {
        icon: (color, size) => <ClockIcon color={color} size={size} />,
        title: "projects_data.stopwatch.features.analogDigital.title",
        description: "projects_data.stopwatch.features.analogDigital.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.stopwatch.features.responsive.title",
        description: "projects_data.stopwatch.features.responsive.description"
      }
    ]
  },

  {
    id: 5,
    title: "Clock",
    tech: "HTML | CSS | JavaScript",
    image: clockApp,
    imageModal: clockAppModal,
    type: "frontend",
    link: "https://clock-app2-vh.netlify.app",
    github: "https://github.com/Valerij-Hering/clock-app",
    description: "projects_data.clock.description",
    features: [
      {
        icon: (color, size) => <ClockIcon color={color} size={size} />,
        title: "projects_data.clock.features.analogDigital.title",
        description: "projects_data.clock.features.analogDigital.description"
      },
      {
        icon: (color, size) => <CalendarIcon color={color} size={size} />,
        title: "projects_data.clock.features.date.title",
        description: "projects_data.clock.features.date.description"
      },
      {
        icon: (color, size) => <ThemeIcon color={color} size={size} />,
        title: "projects_data.clock.features.theme.title",
        description: "projects_data.clock.features.theme.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.clock.features.responsive.title",
        description: "projects_data.clock.features.responsive.description"
      }
    ]
  },

  {
    id: 6,
    title: "Marry Christmas!",
    tech: "HTML | CSS | JavaScript",
    image: marryChristmas,
    imageModal: marryChristmaslModal,
    type: "frontend",
    link: "https://marry-christmas-vh.netlify.app",
    github: "https://github.com/Valerij-Hering/marry-christmas-vh",
    description: "projects_data.christmas.description",
    features: [
      {
        icon: (color, size) => <TimerIcon color={color} size={size} />,
        title: "projects_data.christmas.features.countdown.title",
        description: "projects_data.christmas.features.countdown.description"
      },
      {
        icon: (color, size) => <MusicIcon color={color} size={size} />,
        title: "projects_data.christmas.features.music.title",
        description: "projects_data.christmas.features.music.description"
      },
      {
        icon: (color, size) => <SnowIcon color={color} size={size} />,
        title: "projects_data.christmas.features.snow.title",
        description: "projects_data.christmas.features.snow.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.christmas.features.responsive.title",
        description: "projects_data.christmas.features.responsive.description"
      }
    ]
  },

  {
    id: 7,
    title: "Split Bill",
    tech: "React.js | CSS",
    image: splitBill,
    imageModal: splitBillModal,
    type: "frontend",
    link: "https://bill-calculator-vh.netlify.app/",
    github: "https://github.com/Valerij-Hering/Bill-calculator-app",
    description: "projects_data.splitBill.description",
    features: [
      {
        icon: (color, size) => <CalculatorIcon color={color} size={size} />,
        title: "projects_data.splitBill.features.smartSplit.title",
        description: "projects_data.splitBill.features.smartSplit.description"
      },
      {
        icon: (color, size) => <MessageIcon color={color} size={size} />,
        title: "projects_data.splitBill.features.tipOptions.title",
        description: "projects_data.splitBill.features.tipOptions.description"
      },
      {
        icon: (color, size) => <AlertIcon color={color} size={size} />,
        title: "projects_data.splitBill.features.alerts.title",
        description: "projects_data.splitBill.features.alerts.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.splitBill.features.responsive.title",
        description: "projects_data.splitBill.features.responsive.description"
      }
    ]
  },

  {
    id: 8,
    title: "Recipes",
    tech: "React.js | CSS | API Integration",
    image: recipesApp,
    imageModal: recipesModal,
    type: "frontend",
    link: "https://recipes-app-vh.netlify.app",
    github: "https://github.com/Valerij-Hering/recipes-app",
    description: "projects_data.recipes.description",
    features: [
      {
        icon: (color, size) => <ApiIcon color={color} size={size} />,
        title: "projects_data.recipes.features.api.title",
        description: "projects_data.recipes.features.api.description"
      },
      {
        icon: (color, size) => <SearchIcon color={color} size={size} />,
        title: "projects_data.recipes.features.search.title",
        description: "projects_data.recipes.features.search.description"
      },
      {
        icon: (color, size) => <ChartIcon color={color} size={size} />,
        title: "projects_data.recipes.features.nutrition.title",
        description: "projects_data.recipes.features.nutrition.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.recipes.features.responsive.title",
        description: "projects_data.recipes.features.responsive.description"
      }
    ]
  },

  {
    id: 9,
    title: "Yoga website",
    tech: "React.js | Node.js | MongoDB | REST API | CSS",
    image: yoga,
    imageModal: yogaModal,
    type: "fullstack",
    link: "https://yoga2-vh.netlify.app/",
    github: {
      frontend: "https://github.com/Valerij-Hering/Yoga2-Frontend",
      backend: "https://github.com/Valerij-Hering/Yoga2-backend"
    },
    description: "projects_data.yoga_website.description",
    features: [
      {
        icon: (color, size) => <ApiIcon color={color} size={size}/>,
        title:
          "projects_data.yoga_website.features.api_integration.title",
        description:
          "projects_data.yoga_website.features.api_integration.description"
      },
      {
        icon: (color, size) => <DatabaseIcon color={color} size={size}/>,
        title:
          "projects_data.yoga_website.features.database_support.title",
        description:
          "projects_data.yoga_website.features.database_support.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size}/>,
        title:
          "projects_data.yoga_website.features.fully_responsive.title",
        description:
          "projects_data.yoga_website.features.fully_responsive.description"
      },
      {
        icon: (color, size) => <PerformanceIcon color={color} size={size}/>,
        title:
          "projects_data.yoga_website.features.fast_performance.title",
        description:
          "projects_data.yoga_website.features.fast_performance.description"
      }
    ]
  },

  {
    id: 10,
    title: "Foodies",
    tech: "React.js | Redux | CSS",
    image: foodies,
    imageModal: foodiesModal,
    type: "frontend",
    link: "https://foodies-vh.netlify.app/",
    github: "https://github.com/Valerij-Hering/Foodies",
    description: "projects_data.foodies.description",
    features: [
      {
        icon: (color, size) => <ShoppingIcon color={color} size={size} />,
        title: "projects_data.foodies.features.smart_cart.title",
        description: "projects_data.foodies.features.smart_cart.description"
      },
      {
        icon: (color, size) => <PaymentIcon color={color} size={size} />,
        title: "projects_data.foodies.features.secure_payment.title",
        description:
          "projects_data.foodies.features.secure_payment.description"
      },
      {
        icon: (color, size) => <UserIcon color={color} size={size} />,
        title: "projects_data.foodies.features.user_account.title",
        description:
          "projects_data.foodies.features.user_account.description"
      },
      {
        icon: (color, size) => <ResponsiveIcon color={color} size={size} />,
        title: "projects_data.foodies.features.fully_responsive.title",
        description:
          "projects_data.foodies.features.fully_responsive.description"
      }
    ]
  },

  {
    id: 11,
    title: "Weather website",
    tech: "React.js | OpenWeather API | CSS",
    image: weatherApp,
    imageModal: weatherAppModal,
    type: "frontend",
    link: "https://weather-app2-vh.netlify.app/",
    github: "https://github.com/Valerij-Hering/Weather-app-geolication",
    description: "projects_data.weather_website.description",
    features: [
      {
        icon: (color, size) => <ApiIcon color={color} size={size} />,
        title: "projects_data.weather_website.features.api_integration.title",
        description:
          "projects_data.weather_website.features.api_integration.description"
      },
      {
        icon: (color, size) => <EarthIcon color={color} size={size} />,
        title: "projects_data.weather_website.features.interactive_map.title",
        description:
          "projects_data.weather_website.features.interactive_map.description"
      },
      {
        icon: (color, size) => <ChartIcon color={color} size={size} />,
        title: "projects_data.weather_website.features.visual_charts.title",
        description:
          "projects_data.weather_website.features.visual_charts.description"
      },
      {
        icon: (color, size) => <PerformanceIcon color={color} size={size} />,
        title: "projects_data.weather_website.features.fast_performance.title",
        description:
          "projects_data.weather_website.features.fast_performance.description"
      }
    ]
  },

  {
    id: 12,
    title: "Events Calendar",
    tech: "React.js | Node.js | MongoDB | REST API | CSS",
    image: eventsCalendar,
    imageModal: eventsCalendarModal,
    type: "fullstack",
    link: "https://new-events-calendar.netlify.app/",
    github: {
      frontend: "https://github.com/Valerij-Hering/new-events-calendar-frontend",
      backend: "https://github.com/Valerij-Hering/new-events-calendar-backend"
    },
    description: "projects_data.events_calendar.description",
    features: [
      { icon: (color, size) => <ApiIcon color={color} size={size}/>, 
        title: "projects_data.events_calendar.features.api_integration.title",
        description: "projects_data.events_calendar.features.api_integration.description", 
      },
      { 
        icon: (color, size) => <DatabaseIcon color={color} size={size}/>, 
        title: "projects_data.events_calendar.features.database_support.title",
        description: "projects_data.events_calendar.features.database_support.description", 
      },
      { icon: (color, size) => <UserIcon color={color} size={size}/>, 
        title: "projects_data.events_calendar.features.user_security.title", 
        description: "projects_data.events_calendar.features.user_security.description"
      },
      { 
        icon: (color, size) => <ResponsiveIcon color={color} size={size}/>, 
        title: "projects_data.events_calendar.features.fully_responsive.title",
        description: "projects_data.events_calendar.features.fully_responsive.description", 
      },
    ],
  },
];
