export const WEBSOCKET_PUBLIC_URL = "http://localhost:5505/"
export const WEBSOCKET_SERVER_PORT = 5505

const QUIZZ_CONFIG = {
  password: "PASSWORD",
  subject: "Adobe",
  questions: [
    {
      question: "What does OLED stand for?",
      answers: [
        "Organic Light Emitting Diode",
        "Optical Light Emitting Diode",
        "Open Light Emitting Diode",
        "Optical Laser Emission Display",
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What is Hyperloop, the transportation concept being developed by multiple companies?",
      answers: ["A flying drone taxi", "Supersonic airplane", "Autonomous electric bus", "High-speed vacuum tube train"],
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What does HTTP stand for?",
      answers: ["HyperText Transmission Protocol", "HyperTransfer Text Protocol", "HyperText Transfer Protocol", "HyperText Transfer Program"],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Which new material is increasingly being used instead of silicon in modern fast chargers for better efficiency and compactness?",
      answers: [
        "Graphene",
        "Aluminum Nitride (AlN)",
        "Copper",
        "Gallium Nitride (GaN)",
      ],
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "In networking, what does the acronym ‘IP’ stand for?",
      answers: [
        "Internet Protocol",
        "Internal Packet",
        "Interconnected Processor",
        "Internet Provider",
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "NASA might be your last hope to escape zombies; what does NASA stand for?", 
      answers: [
        "National Astronautical and Space Agency",
        "National Aeronautics and Space Administration",
        "National Aerospace and Space Agency",
        "National Aeronautics and Science Association",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What does the .com in a website address usually mean?",
      answers: [
        "Community",
        "Commercial",
        "Communication",
        "Computer",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "In computing, what is a “bit”?",
      answers: [
        "A hardware device",
        "The smallest unit of data",
        "A programming language",
        "A type of virus",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "What does “URL” stand for?",
      answers: [
        "Unique Resource Link",
        "Uniform Resource Locator",
        "Universal Reference Link",
        "Uniform Reference Locator",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which type of software is designed to manage computer hardware and provide services to applications?",
      answers: [
        "Firmware",
        "Operating system",
        "Utility software",
        "Middleware",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "In HTML, which tag is used to create a hyperlink?",
      answers: [
        "<h>",
        "<a>",
        "<link>",
        "<href>",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which storage device typically has the fastest access time?",
      answers: [
        "Optical Disk",
        "Solid State Drive (SSD)",
        "Magnetic Tape",
        "Hard Disk Drive (HDD)",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "What unusual ingredient has been researched as a potential material for building biodegradable batteries?",
      answers: [
        "Rice husk",
        "Banana peels",
        "Coffee powder",
        "Crab shells",
      ],
      solution: 3,
      cooldown: 5,
      time: 15,
    },

    {
      question: "What odd object did Microsoft once try to use to store digital data?",
      answers: [
        "Glass",
        "Jelly",
        "Diamonds",
        "Salt",
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },

    {
      question: "What weird tech accessory did KFC release for gamers?",
      answers: [
        "Drumstick-shaped mouse",
        "A gaming console that keeps chicken warm",
        "A fried chicken-scented keyboard",
        "VR headset with gravy smell",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "In email communication, what does “CC” stand for?",
      answers: [
        "Common Channel",
        "Copy Contact",
        "Carbon Copy",
        "Central Communication",
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which company developed the first microprocessor in 1971?",
      answers: [
        "Intel",
        "IBM",
        "AMD",
        "Microsoft",
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },

    {
      question: "In digital electronics, which logic gate is called a “universal gate”?",
      answers: [
        "XOR",
        "NAND",
        "AND",
        "OR",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which of these file systems is most commonly used in modern Windows OS?",
      answers: [
        "EXT4",
        "NTFS",
        "FAT32",
        "exFAT",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which company first introduced the concept of a graphical user interface (GUI) for personal computers?",
      answers: [
        "Microsoft",
        "IBM",
        "Apple",
        "Xerox",
      ],
      solution: 3,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which of these is NOT an operating system?",
      answers: [
        "Oracle",
        "Android",
        "Linux",
        "macOS",
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },

    {
      question: "The speed of a CPU is measured in:",
      answers: [
        "Pixels",
        "Bytes",
        "Hertz",
        "Bits",
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which protocol is mainly used to transfer emails between servers?",
      answers: [
        "SMTP",
        "IMAP",
        "POP3",
        "FTP",
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },

    {
      question: "Which of these programming languages is primarily used for statistical computing and graphics?",
      answers: [
        "Swift",
        "Python",
        "R",
        "Go",
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
  ],
}

// DONT CHANGE
export const GAME_STATE_INIT = {
  started: false,
  players: [],
  playersAnswer: [],
  manager: null,
  room: null,
  currentQuestion: 0,
  roundStartTime: 0,
  ...QUIZZ_CONFIG,
}
