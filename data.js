// data.js
const learningPath = [
    // --- PHASE 1: JAVA FOUNDATIONS ---
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
        { title: "Return Types & Void", url: "https://www.w3schools.com/java/java_methods_param.asp" },
        { title: "Pass by Value in Java", url: "https://www.baeldung.com/java-pass-by-value-or-pass-by-reference" }
    ]},
    { day: 5, phase: "Phase 1: Java Foundations", topic: "Arrays & Strings", subtopics: [
        { title: "1D & 2D Arrays", url: "https://www.geeksforgeeks.org/arrays-in-java/" },
        { title: "String Immutability", url: "https://www.baeldung.com/java-string-immutable" },
        { title: "StringBuilder vs StringBuffer", url: "https://www.javatpoint.com/stringbuilder-vs-stringbuffer-in-java" }
    ]},
    
    // --- CORE DSA ---
    { day: 6, phase: "Phase 1: DSA Basics", topic: "Complexity & Recursion", subtopics: [
        { title: "Big-O Notation (Time/Space)", url: "https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" },
        { title: "Base Cases & Call Stack", url: "https://www.geeksforgeeks.org/introduction-to-recursion/" },
        { title: "Fibonacci & Factorial", url: "https://www.baeldung.com/java-fibonacci" }
    ]},
    { day: 7, phase: "Phase 1: DSA Basics", topic: "Searching & Sorting", subtopics: [
        { title: "Binary Search", url: "https://www.geeksforgeeks.org/binary-search/" },
        { title: "Selection & Insertion Sort", url: "https://www.programiz.com/dsa/insertion-sort" },
        { title: "Merge Sort & Quick Sort", url: "https://www.baeldung.com/java-merge-sort" }
    ]},
    { day: 8, phase: "Phase 1: DSA Basics", topic: "Custom Data Structures", subtopics: [
        { title: "Building a Stack class", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
        { title: "Building a Queue class", url: "https://www.geeksforgeeks.org/queue-data-structure/" },
        { title: "Building a Singly Linked List", url: "https://www.baeldung.com/java-linkedlist" }
    ]},

    // --- PHASE 2: CORE JAVA DEEP DIVE & SPRING BOOT ---
    { day: 9, phase: "Phase 2: Core Java", topic: "OOP - Encapsulation", subtopics: [
        { title: "Constructors & 'this'", url: "https://www.w3schools.com/java/java_constructors.asp" },
        { title: "Getters, Setters, Access Modifiers", url: "https://www.baeldung.com/java-access-modifiers" },
        { title: "Static Keyword", url: "https://www.geeksforgeeks.org/static-keyword-java/" }
    ]},
    { day: 10, phase: "Phase 2: Core Java", topic: "OOP - Inheritance & Poly", subtopics: [
        { title: "Extends & Super", url: "https://www.baeldung.com/java-super" },
        { title: "Method Overloading vs Overriding", url: "https://www.geeksforgeeks.org/overriding-in-java/" },
        { title: "Upcasting & Downcasting", url: "https://www.baeldung.com/java-type-casting" }
    ]},
    { day: 11, phase: "Phase 2: Core Java", topic: "OOP - Abstraction & Exceptions", subtopics: [
        { title: "Abstract Classes vs Interfaces", url: "https://www.baeldung.com/java-interface-vs-abstract-class" },
        { title: "Checked vs Unchecked Exceptions", url: "https://www.geeksforgeeks.org/checked-vs-unchecked-exceptions-in-java/" },
        { title: "Try-Catch-Finally Blocks", url: "https://www.w3schools.com/java/java_try_catch.asp" }
    ]},
    { day: 12, phase: "Phase 2: Core Java", topic: "Collections Framework", subtopics: [
        { title: "ArrayList vs LinkedList", url: "https://www.baeldung.com/java-arraylist-vs-linkedlist" },
        { title: "HashSet vs TreeSet", url: "https://www.geeksforgeeks.org/hashset-vs-treeset-in-java/" },
        { title: "HashMap vs TreeMap", url: "https://www.baeldung.com/java-hashmap-vs-treemap" }
    ]},
    { day: 13, phase: "Phase 2: Spring Boot", topic: "Initialization & DI", subtopics: [
        { title: "Spring Initializr Setup", url: "https://start.spring.io/" },
        { title: "Dependency Injection (IoC)", url: "https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring" },
        { title: "@Component, @Service, @Autowired", url: "https://www.geeksforgeeks.org/spring-autowired-annotation/" }
    ]},
    { day: 14, phase: "Phase 2: Spring Boot", topic: "MVC & REST APIs", subtopics: [
        { title: "@RestController & @RequestMapping", url: "https://www.baeldung.com/spring-controller-vs-restcontroller" },
        { title: "@PathVariable & @RequestParam", url: "https://www.baeldung.com/spring-requestparam-vs-pathvariable" },
        { title: "@RequestBody & DTOs", url: "https://www.baeldung.com/entity-to-and-from-dto-for-a-java-spring-application" }
    ]},
    { day: 15, phase: "Phase 2: Spring Boot", topic: "Spring Data JPA", subtopics: [
        { title: "Entity Mapping (@Entity, @Id)", url: "https://www.baeldung.com/jpa-entities" },
        { title: "JpaRepository Interfaces", url: "https://www.geeksforgeeks.org/spring-boot-jparepository-with-example/" },
        { title: "Connecting Java to MySQL/Postgres", url: "https://www.baeldung.com/spring-boot-postgresql" }
    ]},

    // --- PHASE 3: FRONTEND (REACT) ---
    { day: 16, phase: "Phase 3: Frontend Web", topic: "JS Fundamentals", subtopics: [
        { title: "Let, Const, Arrow Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" },
        { title: "Promises & Async/Await", url: "https://javascript.info/async-await" },
        { title: "Array Map, Filter, Reduce", url: "https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/" }
    ]},
    { day: 17, phase: "Phase 3: React.js", topic: "Components & State", subtopics: [
        { title: "Vite Setup & JSX", url: "https://react.dev/learn/describing-the-ui" },
        { title: "Functional Components & Props", url: "https://react.dev/learn/passing-props-to-a-component" },
        { title: "useState Hook", url: "https://react.dev/reference/react/useState" }
    ]},
    { day: 18, phase: "Phase 3: React.js", topic: "Effects & Integration", subtopics: [
        { title: "useEffect Hook", url: "https://react.dev/reference/react/useEffect" },
        { title: "Fetching Data (Fetch/Axios)", url: "https://www.freecodecamp.org/news/how-to-fetch-data-in-react/" },
        { title: "Fixing CORS in Spring Boot", url: "https://www.baeldung.com/spring-cors" }
    ]},

    // --- PHASE 4 & 5: PYTHON, DATA, AND ML ---
    { day: 19, phase: "Phase 4: ML Foundations", topic: "Python & Numpy", subtopics: [
        { title: "Python Lists & Dicts for Java Devs", url: "https://realpython.com/python-dicts/" },
        { title: "NumPy Array Operations", url: "https://numpy.org/doc/stable/user/quickstart.html" },
        { title: "Math: Linear Algebra Basics", url: "https://www.khanacademy.org/math/linear-algebra" }
    ]},
    { day: 20, phase: "Phase 4: ML Foundations", topic: "Pandas & Data", subtopics: [
        { title: "Loading CSVs into DataFrames", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html" },
        { title: "Filtering & Handling Missing Data", url: "https://realpython.com/pandas-dataframe/" },
        { title: "Grouping & Aggregation", url: "https://pandas.pydata.org/docs/user_guide/groupby.html" }
    ]},
    { day: 21, phase: "Phase 5: Core ML", topic: "Scikit-Learn Basics", subtopics: [
        { title: "Train/Test Split & StandardScaling", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
        { title: "Linear & Logistic Regression", url: "https://realpython.com/logistic-regression-python/" },
        { title: "Evaluating: Precision, Recall, F1", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" }
    ]},
    { day: 22, phase: "Phase 5: Core ML", topic: "Trees & Unsupervised", subtopics: [
        { title: "Decision Trees & Random Forests", url: "https://scikit-learn.org/stable/modules/ensemble.html" },
        { title: "K-Means Clustering", url: "https://realpython.com/k-means-clustering-python/" },
        { title: "Saving Models via Joblib/Pickle", url: "https://scikit-learn.org/stable/model_persistence.html" }
    ]},

    // --- PHASE 7 & 9: INTEGRATION & DEPLOYMENT ---
    { day: 23, phase: "Phase 7: Integration", topic: "Python API to Java", subtopics: [
        { title: "Building an API with FastAPI", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
        { title: "Serving ML Predictions via JSON", url: "https://fastapi.tiangolo.com/tutorial/body/" },
        { title: "Calling Python from Spring Boot (WebClient)", url: "https://www.baeldung.com/spring-5-webclient" }
    ]},
    { day: 24, phase: "Phase 9: DevOps", topic: "Docker Basics", subtopics: [
        { title: "Writing a Dockerfile", url: "https://docs.docker.com/engine/reference/builder/" },
        { title: "Dockerizing Spring Boot", url: "https://spring.io/guides/gs/spring-boot-docker/" },
        { title: "Dockerizing FastAPI", url: "https://fastapi.tiangolo.com/deployment/docker/" }
    ]},

    // --- PHASE 8: THE PLACEMENT GRIND (No Links Provided) ---
    // This generates the remaining 276 days of pure execution. 
    ...Array.from({ length: 276 }, (_, i) => ({
        day: 25 + i, 
        phase: "Phase 8: Capstone & Placements Prep", 
        topic: `Execution Sprint: Day ${i + 1}`,
        subtopics: [
            { title: "Solve 2 LeetCode Problems (Target Medium)", url: "" },
            { title: "Work on Full Stack Capstone Codebase", url: "" },
            { title: "System Design / CS Core Review", url: "" }
        ]
    }))
];
