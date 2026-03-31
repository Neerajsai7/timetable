// data.js
const learningPath = [
    // --- PHASE 1: JAVA & DSA REFRESHER (Days 1-15) ---
    { day: 1, phase: "Phase 1: Java Foundations", topic: "The Java Ecosystem", subtopics: [
        { title: "JVM/JRE/JDK Internals", url: "https://www.geeksforgeeks.org/differences-jdk-jre-jvm/" },
        { title: "Memory Management & Garbage Collection", url: "https://www.baeldung.com/jvm-garbage-collectors" }
    ]},
    { day: 2, phase: "Phase 1: Java Foundations", topic: "Variables & Data Types", subtopics: [
        { title: "Primitives vs Objects", url: "https://www.baeldung.com/java-primitives-vs-objects" },
        { title: "Type Casting & Wrapper Classes", url: "https://www.w3schools.com/java/java_type_casting.asp" }
    ]},
    ...Array.from({ length: 13 }, (_, i) => ({
        day: 3 + i,
        phase: "Phase 1: DSA Mastery",
        topic: i < 7 ? "Linear DSA (Arrays, LL, Stacks)" : "Non-Linear (Trees, Graphs, DP)",
        subtopics: [
            { title: "Solve 2 LeetCode Mediums", url: "https://leetcode.com/" },
            { title: "Time & Space Complexity Analysis", url: "https://www.freecodecamp.org/news/big-o-notation-guide/" }
        ]
    })),

    // --- PHASE 2: MODERN BACKEND (SPRING BOOT) (Days 16-45) ---
    { day: 16, phase: "Phase 2: Spring Boot", topic: "IoC & Dependency Injection", subtopics: [
        { title: "Spring Bean Lifecycle", url: "https://www.baeldung.com/spring-bean-lifecycle" },
        { title: "@Component vs @Bean vs @Service", url: "https://www.geeksforgeeks.org/spring-component-annotation-with-example/" }
    ]},
    ...Array.from({ length: 29 }, (_, i) => ({
        day: 17 + i,
        phase: "Phase 2: Advanced Backend",
        topic: i < 10 ? "Spring Data JPA & Hibernate" : i < 20 ? "Spring Security & OAuth2" : "Microservices & Spring Cloud",
        subtopics: [
            { title: "REST API Best Practices", url: "https://restfulapi.net/" },
            { title: "Dockerizing Spring Apps", url: "https://spring.io/guides/gs/spring-boot-docker/" }
        ]
    })),

    // --- PHASE 3: ML FOUNDATIONS & MATH (Days 46-90) ---
    ...Array.from({ length: 45 }, (_, i) => ({
        day: 46 + i,
        phase: "Phase 3: Python & ML Math",
        topic: i < 15 ? "Linear Algebra & Calculus" : i < 30 ? "NumPy & Pandas Mastery" : "Exploratory Data Analysis (EDA)",
        subtopics: [
            { title: "Matrix Decomposition", url: "https://www.khanacademy.org/math/linear-algebra" },
            { title: "Data Visualization (Matplotlib/Seaborn)", url: "https://seaborn.pydata.org/" }
        ]
    })),

    // --- PHASE 4: CORE MACHINE LEARNING (Days 91-150) ---
    ...Array.from({ length: 60 }, (_, i) => ({
        day: 91 + i,
        phase: "Phase 4: Scikit-Learn & Modeling",
        topic: i < 20 ? "Supervised (Regression/SVM)" : i < 40 ? "Ensemble Methods (XGBoost/RF)" : "Model Evaluation & Metrics",
        subtopics: [
            { title: "Bias-Variance Tradeoff", url: "https://scikit-learn.org/stable/" },
            { title: "Precision, Recall, F1-Score", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" }
        ]
    })),

    // --- PHASE 5: DEEP LEARNING & GENERATIVE AI (Days 151-220) ---
    ...Array.from({ length: 70 }, (_, i) => ({
        day: 151 + i,
        phase: "Phase 5: Neural Networks & GenAI",
        topic: i < 30 ? "CNNs & RNNs (PyTorch)" : "Transformers & LLM Fine-tuning",
        subtopics: [
            { title: "PyTorch Tensors & Autograd", url: "https://pytorch.org/tutorials/" },
            { title: "Attention Mechanism Deep Dive", url: "https://jalammar.github.io/illustrated-transformer/" }
        ]
    })),

    // --- PHASE 6: SYSTEM DESIGN & LLD (Days 221-270) ---
    ...Array.from({ length: 50 }, (_, i) => ({
        day: 221 + i,
        phase: "Phase 6: System Design",
        topic: i < 25 ? "Low Level Design (Design Patterns)" : "High Level Design (Scaling/Availability)",
        subtopics: [
            { title: "SOLID Principles in Java", url: "https://www.baeldung.com/solid-principles" },
            { title: "Database Sharding & Partitioning", url: "https://github.com/donnemartin/system-design-primer" }
        ]
    })),

    // --- PHASE 7: THE FINAL PLACEMENT GRIND (Days 271-300) ---
    ...Array.from({ length: 30 }, (_, i) => ({
        day: 271 + i,
        phase: "Phase 7: Interview Prep",
        topic: "Mock Interviews & LeetCode Hard",
        subtopics: [
            { title: "Top 100 Liked Problems", url: "https://leetcode.com/problemset/top-100-liked-questions/" },
            { title: "Behavioral Interview Prep (STAR Method)", url: "https://www.glassdoor.com/blog/guide/star-method/" }
        ]
    }))
];
