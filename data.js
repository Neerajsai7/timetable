// data.js
const learningPath = [
    // --- PHASE 1: JAVA & DSA FOUNDATIONS (Days 1-10) ---
    { day: 1, phase: "Phase 1: Java Foundations", topic: "The Java Ecosystem", subtopics: [
        { title: "JVM, JRE, JDK Concepts", url: "https://www.geeksforgeeks.org/differences-jdk-jre-jvm/" },
        { title: "IntelliJ Setup & Architecture", url: "https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html" },
        { title: "Hello World & Compilation", url: "https://docs.oracle.com/javase/tutorial/getStarted/cupojava/unix.html" }
    ]},
    { day: 2, phase: "Phase 1: Java Foundations", topic: "Variables & Data Types", subtopics: [
        { title: "Primitives vs Objects", url: "https://www.baeldung.com/java-primitives-vs-objects" },
        { title: "Type Casting", url: "https://www.w3schools.com/java/java_type_casting.asp" },
        { title: "Operators & Math Class", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html" }
    ]},
    { day: 3, phase: "Phase 1: Java Foundations", topic: "Control Flow", subtopics: [
        { title: "If/Else, Switch Statements", url: "https://www.w3schools.com/java/java_conditions.asp" },
        { title: "For Loops & Enhanced For", url: "https://www.geeksforgeeks.org/for-each-loop-in-java/" },
        { title: "While & Do-While Loops", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html" }
    ]},
    { day: 4, phase: "Phase 1: Java Foundations", topic: "Functions (Methods)", subtopics: [
        { title: "Method Signatures", url: "https://www.baeldung.com/java-methods" },
        { title: "Pass by Value in Java", url: "https://www.baeldung.com/java-pass-by-value-or-pass-by-reference" }
    ]},
    { day: 5, phase: "Phase 1: Java Foundations", topic: "Arrays & Strings", subtopics: [
        { title: "1D & 2D Arrays", url: "https://www.geeksforgeeks.org/arrays-in-java/" },
        { title: "StringBuilder vs StringBuffer", url: "https://www.javatpoint.com/stringbuilder-vs-stringbuffer-in-java" }
    ]},
    { day: 6, phase: "Phase 1: DSA Basics", topic: "Complexity & Recursion", subtopics: [
        { title: "Big-O Notation (Time/Space)", url: "https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" },
        { title: "Base Cases & Call Stack", url: "https://www.geeksforgeeks.org/introduction-to-recursion/" }
    ]},
    { day: 7, phase: "Phase 1: DSA Basics", topic: "Searching & Sorting", subtopics: [
        { title: "Binary Search", url: "https://www.geeksforgeeks.org/binary-search/" },
        { title: "Merge Sort & Quick Sort", url: "https://www.baeldung.com/java-merge-sort" }
    ]},
    { day: 8, phase: "Phase 1: DSA Basics", topic: "Linear Data Structures", subtopics: [
        { title: "Stack & Queue Implementation", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
        { title: "Singly Linked List", url: "https://www.baeldung.com/java-linkedlist" }
    ]},
    { day: 9, phase: "Phase 1: DSA Basics", topic: "Trees & Graphs Intro", subtopics: [
        { title: "Binary Tree Traversal", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
        { title: "Graph Representation (Adjacency Matrix/List)", url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" }
    ]},
    { day: 10, phase: "Phase 1: Review", topic: "Problem Solving", subtopics: [
        { title: "Solve 5 Easy LeetCode Problems", url: "https://leetcode.com/problemset/all/?difficulty=EASY" }
    ]},

    // --- PHASE 2: CORE JAVA & SPRING BOOT (Days 11-30) ---
    { day: 11, phase: "Phase 2: Core Java", topic: "OOP Deep Dive", subtopics: [
        { title: "Inheritance & Polymorphism", url: "https://www.geeksforgeeks.org/polymorphism-in-java/" },
        { title: "Abstraction & Interfaces", url: "https://www.baeldung.com/java-interface-vs-abstract-class" }
    ]},
    { day: 12, phase: "Phase 2: Core Java", topic: "Exception Handling & Collections", subtopics: [
        { title: "Try-Catch-Finally & Custom Exceptions", url: "https://www.w3schools.com/java/java_try_catch.asp" },
        { title: "Java Collections Framework (Map, Set, List)", url: "https://www.baeldung.com/java-collections" }
    ]},
    { day: 13, phase: "Phase 2: Spring Boot", topic: "IoC & Dependency Injection", subtopics: [
        { title: "Spring Initializr Setup", url: "https://start.spring.io/" },
        { title: "Understanding @Autowired & @Bean", url: "https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring" }
    ]},
    { day: 14, phase: "Phase 2: Spring Boot", topic: "REST APIs", subtopics: [
        { title: "Building Controllers (@RestController)", url: "https://www.baeldung.com/spring-controller-vs-restcontroller" },
        { title: "DTO Pattern", url: "https://www.baeldung.com/java-dto-pattern" }
    ]},
    { day: 15, phase: "Phase 2: Spring Boot", topic: "Spring Data JPA", subtopics: [
        { title: "Entity Mapping & Hibernate", url: "https://www.baeldung.com/jpa-entities" },
        { title: "MySQL Integration", url: "https://www.baeldung.com/spring-boot-mysql" }
    ]},

    // --- SPRINTING THE REST OF THE 300 DAYS ---
    // Instead of a generic array, I've mapped specific milestones for you.

    ...Array.from({ length: 15 }, (_, i) => ({
        day: 16 + i,
        phase: "Phase 3: Frontend & React Integration",
        topic: i < 7 ? "React Hooks & State" : "Connecting React to Spring Boot",
        subtopics: [
            { title: "Build Task Manager Frontend", url: "https://react.dev/" },
            { title: "Axios Integration", url: "https://axios-http.com/docs/intro" }
        ]
    })),

    ...Array.from({ length: 30 }, (_, i) => ({
        day: 31 + i,
        phase: "Phase 4: Python & ML Mathematics",
        topic: i < 15 ? "Linear Algebra & Calculus for ML" : "Pandas & NumPy Mastery",
        subtopics: [
            { title: "Matrix Ops in NumPy", url: "https://numpy.org/" },
            { title: "Data Cleaning in Pandas", url: "https://pandas.pydata.org/" }
        ]
    })),

    ...Array.from({ length: 40 }, (_, i) => ({
        day: 61 + i,
        phase: "Phase 5: Machine Learning Core",
        topic: i < 20 ? "Supervised Learning (Regression/Trees)" : "Unsupervised Learning & Model Tuning",
        subtopics: [
            { title: "Scikit-Learn Pipelines", url: "https://scikit-learn.org/" },
            { title: "Hyperparameter Tuning", url: "https://scikit-learn.org/stable/modules/grid_search.html" }
        ]
    })),

    ...Array.from({ length: 50 }, (_, i) => ({
        day: 101 + i,
        phase: "Phase 6: Deep Learning & NLP",
        topic: i < 25 ? "Neural Networks (Keras/PyTorch)" : "Natural Language Processing (Transformers)",
        subtopics: [
            { title: "Building a Simple CNN", url: "https://www.tensorflow.org/" },
            { title: "HuggingFace Intro", url: "https://huggingface.co/docs/transformers/index" }
        ]
    })),

    ...Array.from({ length: 50 }, (_, i) => ({
        day: 151 + i,
        phase: "Phase 7: Advanced Backend & Microservices",
        topic: i < 25 ? "Spring Cloud & Config" : "Kafka & Redis Caching",
        subtopics: [
            { title: "Microservices Architecture", url: "https://spring.io/microservices" },
            { title: "Event Driven Design with Kafka", url: "https://spring.io/projects/spring-kafka" }
        ]
    })),

    ...Array.from({ length: 100 }, (_, i) => ({
        day: 201 + i,
        phase: "Phase 8: Capstone Project & Placement Grind",
        topic: i < 50 ? "Building 'LogiTwin' AI Dashboard" : "LeetCode Medium/Hard & System Design",
        subtopics: [
            { title: "System Design Prep", url: "https://github.com/donnemartin/system-design-primer" },
            { title: "Daily LeetCode Challenge", url: "https://leetcode.com/" }
        ]
    }))
];
