// data.js
// The 300-Day AI & Full-Stack Java Engineer Path

const learningPath = [
    // ==========================================
    // PHASE 1: PROGRAMMING FOUNDATIONS (JAVA & DSA) - Month 1 & 2
    // ==========================================
    { day: 1, phase: "Phase 1: Java Foundations", topic: "The Java Ecosystem", subtopics: ["JVM, JRE, JDK Concepts", "IntelliJ/Eclipse Setup", "Hello World & Compilation"] },
    { day: 2, phase: "Phase 1: Java Foundations", topic: "Variables & Data Types", subtopics: ["Primitives vs Objects", "Type Casting", "Operators & Math Class"] },
    { day: 3, phase: "Phase 1: Java Foundations", topic: "Control Flow", subtopics: ["If/Else, Switch Statements", "For Loops & Enhanced For", "While & Do-While Loops"] },
    { day: 4, phase: "Phase 1: Java Foundations", topic: "Functions (Methods)", subtopics: ["Method Signatures", "Return Types & Void", "Pass by Value in Java"] },
    { day: 5, phase: "Phase 1: Java Foundations", topic: "Arrays (1D & 2D)", subtopics: ["Array Declaration & Initialization", "Iterating through Arrays", "Multi-dimensional Arrays"] },
    { day: 6, phase: "Phase 1: Java Foundations", topic: "String Manipulation", subtopics: ["String Pool vs Heap", "Immutability", "StringBuilder & StringBuffer"] },
    
    // Core DSA in Java
    { day: 7, phase: "Phase 1: DSA Basics", topic: "Algorithmic Complexity", subtopics: ["Big-O Notation (Time)", "Space Complexity", "Analyzing Java Loops"] },
    { day: 8, phase: "Phase 1: DSA Basics", topic: "Recursion Basics", subtopics: ["Base Cases & Call Stack", "Fibonacci in Java", "Factorial Recursion"] },
    { day: 9, phase: "Phase 1: DSA Basics", topic: "Searching Algorithms", subtopics: ["Linear Search", "Binary Search (Iterative)", "Binary Search (Recursive)"] },
    { day: 10, phase: "Phase 1: DSA Basics", topic: "Sorting - Part 1", subtopics: ["Bubble Sort", "Selection Sort", "Insertion Sort"] },
    { day: 11, phase: "Phase 1: DSA Basics", topic: "Sorting - Part 2", subtopics: ["Merge Sort Algorithm", "Quick Sort Algorithm", "Arrays.sort() Internal working"] },
    { day: 12, phase: "Phase 1: DSA Basics", topic: "Custom Data Structures", subtopics: ["Building a Stack class", "Building a Queue class", "Building a Singly Linked List"] },
    
    // Interleaved DSA Practice (Days 13-30 generated loop)
    ...Array.from({ length: 18 }, (_, i) => ({
        day: 13 + i, phase: "Phase 1: DSA Practice", topic: `Java DSA Sprint ${i + 1}`,
        subtopics: ["Solve 2 Array/String LeetCode (Easy)", "Implement 1 Data Structure from scratch", "Review Big-O complexities"]
    })),

    // ==========================================
    // PHASE 2: JAVA BACKEND DEVELOPMENT - Month 3 & 4
    // ==========================================
    { day: 31, phase: "Phase 2: Core Java Deep Dive", topic: "OOP - Encapsulation & Classes", subtopics: ["Constructors & 'this' keyword", "Getters, Setters, Access Modifiers", "Static Keyword (Variables/Methods)"] },
    { day: 32, phase: "Phase 2: Core Java Deep Dive", topic: "OOP - Inheritance & Poly", subtopics: ["Extends & Super Keyword", "Method Overloading vs Overriding", "Upcasting & Downcasting"] },
    { day: 33, phase: "Phase 2: Core Java Deep Dive", topic: "OOP - Abstraction", subtopics: ["Abstract Classes", "Interfaces & Default Methods", "Multiple Inheritance via Interfaces"] },
    { day: 34, phase: "Phase 2: Core Java Deep Dive", topic: "Exception Handling", subtopics: ["Checked vs Unchecked Exceptions", "Try-Catch-Finally Blocks", "Creating Custom Exceptions"] },
    { day: 35, phase: "Phase 2: Core Java Deep Dive", topic: "Collections Framework - Lists", subtopics: ["ArrayList vs LinkedList", "Vectors", "Iterators & ForEach"] },
    { day: 36, phase: "Phase 2: Core Java Deep Dive", topic: "Collections - Sets & Maps", subtopics: ["HashSet vs TreeSet", "HashMap vs TreeMap", "Hash Collision Resolution"] },
    { day: 37, phase: "Phase 2: Core Java Deep Dive", topic: "Multithreading Basics", subtopics: ["Thread Class & Runnable Interface", "Thread Lifecycle", "Synchronization Keyword"] },
    
    // Database & Spring Boot
    { day: 38, phase: "Phase 2: Backend DB", topic: "SQL Refresher & JDBC", subtopics: ["CRUD SQL Commands", "Connecting Java to MySQL/Postgres", "Executing Prepared Statements"] },
    { day: 39, phase: "Phase 2: Spring Boot", topic: "Spring Boot Initialization", subtopics: ["Spring Initializr Setup", "Understanding pom.xml / Maven", "Application Context & Beans"] },
    { day: 40, phase: "Phase 2: Spring Boot", topic: "Dependency Injection (DI)", subtopics: ["Inversion of Control (IoC)", "@Component, @Service, @Repository", "@Autowired Configuration"] },
    { day: 41, phase: "Phase 2: Spring Boot", topic: "MVC & REST APIs - 1", subtopics: ["@RestController & @RequestMapping", "Creating GET and POST endpoints", "Returning JSON data"] },
    { day: 42, phase: "Phase 2: Spring Boot", topic: "MVC & REST APIs - 2", subtopics: ["@PathVariable & @RequestParam", "@RequestBody & DTOs", "Handling HTTP Status Codes"] },
    { day: 43, phase: "Phase 2: Spring Boot", topic: "Spring Data JPA & Hibernate", subtopics: ["Entity Mapping (@Entity, @Id)", "CrudRepository / JpaRepository", "Defining Custom Query Methods"] },
    { day: 44, phase: "Phase 2: Spring Boot", topic: "Backend Security Basics", subtopics: ["Spring Security Intro", "Basic Authentication", "Password Encoding (BCrypt)"] },

    // Backend Project Sprint
    ...Array.from({ length: 16 }, (_, i) => ({
        day: 45 + i, phase: "Phase 2: Backend Build", topic: `Spring Boot API Project: Day ${i + 1}`,
        subtopics: ["Design Database Schema", "Build REST Endpoints", "Test with Postman"]
    })),

    // ==========================================
    // PHASE 3: FULL STACK (FRONTEND + INTEGRATION) - Month 5
    // ==========================================
    { day: 61, phase: "Phase 3: Frontend Web", topic: "HTML5 & Modern CSS", subtopics: ["Semantic HTML", "CSS Flexbox", "CSS Grid Basics"] },
    { day: 62, phase: "Phase 3: Frontend Web", topic: "JavaScript Fundamentals", subtopics: ["Let, Const, Arrow Functions", "DOM Manipulation", "Event Listeners"] },
    { day: 63, phase: "Phase 3: Frontend Web", topic: "Advanced JavaScript", subtopics: ["Promises & Async/Await", "Fetch API", "Array Map, Filter, Reduce"] },
    { day: 64, phase: "Phase 3: React.js", topic: "React Environment & JSX", subtopics: ["Vite/CRA Setup", "JSX Syntax Rules", "Rendering Elements"] },
    { day: 65, phase: "Phase 3: React.js", topic: "Components & Props", subtopics: ["Functional Components", "Passing Data via Props", "Prop Types"] },
    { day: 66, phase: "Phase 3: React.js", topic: "State & Lifecycle", subtopics: ["useState Hook", "Handling Form Inputs", "Conditional Rendering"] },
    { day: 67, phase: "Phase 3: React.js", topic: "Side Effects & APIs", subtopics: ["useEffect Hook", "Fetching data from Spring Boot", "Handling Loading States"] },
    { day: 68, phase: "Phase 3: Integration", topic: "CORS & JWT Auth", subtopics: ["Fixing CORS in Spring Boot", "Understanding JWT Tokens", "Storing Tokens in React (Local Storage)"] },

    // Full Stack Project Sprint
    ...Array.from({ length: 22 }, (_, i) => ({
        day: 69 + i, phase: "Phase 3: Full Stack Build", topic: `Full Stack App: Day ${i + 1}`,
        subtopics: ["Develop React UI", "Connect to Spring Boot Endpoints", "Manage Auth State"]
    })),

    // ==========================================
    // PHASE 4: AI/ML FOUNDATIONS (PYTHON & MATH) - Month 6
    // ==========================================
    { day: 91, phase: "Phase 4: ML Foundations", topic: "Python for Java Devs - 1", subtopics: ["Python Environment (Conda/Venv)", "Lists, Tuples, Dictionaries", "List Comprehensions"] },
    { day: 92, phase: "Phase 4: ML Foundations", topic: "Python for Java Devs - 2", subtopics: ["Functions & Lambda", "File Handling in Python", "Exception Handling"] },
    { day: 93, phase: "Phase 4: ML Foundations", topic: "Math: Linear Algebra", subtopics: ["Vectors & Scalars", "Matrix Multiplication", "Dot Products"] },
    { day: 94, phase: "Phase 4: ML Foundations", topic: "Math: Stats & Probability", subtopics: ["Mean, Median, Mode, Variance", "Standard Deviation", "Normal Distribution"] },
    { day: 95, phase: "Phase 4: ML Foundations", topic: "Data: NumPy Basics", subtopics: ["Creating NDArrays", "Array Operations & Broadcasting", "Indexing & Slicing"] },
    { day: 96, phase: "Phase 4: ML Foundations", topic: "Data: Pandas - Series & DFs", subtopics: ["Loading CSV data", "Viewing & Inspecting Data", "Filtering DataFrames"] },
    { day: 97, phase: "Phase 4: ML Foundations", topic: "Data: Pandas - Manipulation", subtopics: ["Handling Missing Values", "Grouping & Aggregation", "Merging DataFrames"] },

    // Data Processing Practice
    ...Array.from({ length: 13 }, (_, i) => ({
        day: 98 + i, phase: "Phase 4: Data Processing", topic: `Data Cleaning Sprint ${i + 1}`,
        subtopics: ["Find a Kaggle Dataset", "Clean missing/bad data with Pandas", "Perform basic statistical analysis"]
    })),

    // ==========================================
    // PHASE 5: CORE MACHINE LEARNING - Month 7
    // ==========================================
    { day: 111, phase: "Phase 5: Core ML", topic: "Intro to Scikit-Learn", subtopics: ["Supervised vs Unsupervised Intro", "Train/Test Split", "Feature Scaling (Standardization)"] },
    { day: 112, phase: "Phase 5: Core ML", topic: "Linear Regression", subtopics: ["Math Behind Linear Reg", "Fitting a model in Sklearn", "Evaluating: MSE & R-Squared"] },
    { day: 113, phase: "Phase 5: Core ML", topic: "Logistic Regression", subtopics: ["Sigmoid Function", "Binary Classification", "Evaluating: Confusion Matrix"] },
    { day: 114, phase: "Phase 5: Core ML", topic: "Classification Metrics", subtopics: ["Accuracy vs Precision vs Recall", "F1 Score", "ROC & AUC Curves"] },
    { day: 115, phase: "Phase 5: Core ML", topic: "Decision Trees", subtopics: ["Entropy & Information Gain", "Building Trees in Sklearn", "Visualizing Trees"] },
    { day: 116, phase: "Phase 5: Core ML", topic: "Ensemble: Random Forest", subtopics: ["Bagging Concept", "Random Forest Classifier", "Feature Importance"] },
    { day: 117, phase: "Phase 5: Core ML", topic: "Unsupervised: K-Means", subtopics: ["Clustering Concept", "Choosing 'K' (Elbow Method)", "K-Means Implementation"] },

    // ML Modeling Practice
    ...Array.from({ length: 13 }, (_, i) => ({
        day: 118 + i, phase: "Phase 5: ML Practice", topic: `Model Training Sprint ${i + 1}`,
        subtopics: ["Select Dataset", "Train Multiple Models (LogReg, Tree, RF)", "Compare Accuracy & F1 Scores"]
    })),

    // ==========================================
    // PHASE 6: DEEP LEARNING (TF/PYTORCH) - Month 8
    // ==========================================
    { day: 131, phase: "Phase 6: Deep Learning", topic: "Neural Network Basics", subtopics: ["Perceptrons & Neurons", "Activation Functions (ReLU, Sigmoid)", "Forward Propagation"] },
    { day: 132, phase: "Phase 6: Deep Learning", topic: "Backpropagation", subtopics: ["Loss Functions", "Gradient Descent", "Updating Weights (Epochs & Batches)"] },
    { day: 133, phase: "Phase 6: Deep Learning", topic: "TensorFlow / Keras Intro", subtopics: ["Sequential API", "Adding Dense Layers", "Compiling & Fitting a Model"] },
    { day: 134, phase: "Phase 6: Deep Learning", topic: "Convolutional Neural Nets (CNN)", subtopics: ["Image Data & Pixels", "Convolution & Pooling Layers", "Building an Image Classifier"] },
    { day: 135, phase: "Phase 6: Deep Learning", topic: "Recurrent Neural Nets (RNN)", subtopics: ["Sequential Data Concept", "LSTMs vs GRUs", "Basic Text Classification"] },

    // Deep Learning Practice
    ...Array.from({ length: 15 }, (_, i) => ({
        day: 136 + i, phase: "Phase 6: DL Practice", topic: `Neural Net Lab: Day ${i + 1}`,
        subtopics: ["Preprocess Image/Text Data", "Design Neural Architecture", "Train and Tune Hyperparameters"]
    })),

    // ==========================================
    // PHASE 7: AI + BACKEND INTEGRATION (THE MAGIC) - Month 9
    // ==========================================
    { day: 151, phase: "Phase 7: AI Integration", topic: "Exporting ML Models", subtopics: ["Understanding Pickle", "Understanding Joblib", "Saving a trained Scikit-learn model"] },
    { day: 152, phase: "Phase 7: AI Integration", topic: "FastAPI / Flask Intro", subtopics: ["Setting up a Python API", "Creating a POST endpoint", "Loading the saved model"] },
    { day: 153, phase: "Phase 7: AI Integration", topic: "Serving Predictions", subtopics: ["Accepting JSON data in FastAPI", "Running data through the model", "Returning prediction JSON"] },
    { day: 154, phase: "Phase 7: AI Integration", topic: "Java to Python Communication", subtopics: ["Using Java RestTemplate / WebClient", "Making HTTP requests from Spring Boot", "Handling Python API responses in Java"] },
    { day: 155, phase: "Phase 7: AI Integration", topic: "Microservice Architecture Concept", subtopics: ["Decoupling ML from Main Backend", "Error handling between services", "Latency considerations"] },

    // ==========================================
    // PHASE 8 & 9: DEVOPS & THE CAPSTONE GRIND - Month 9 & 10
    // ==========================================
    { day: 156, phase: "Phase 9: DevOps Basics", topic: "Git & Version Control", subtopics: ["Branching & Merging", "Resolving Merge Conflicts", "Writing good Commit Messages"] },
    { day: 157, phase: "Phase 9: DevOps Basics", topic: "Dockerizing Python", subtopics: ["Writing a Dockerfile for FastAPI", "Building the Image", "Running the Container"] },
    { day: 158, phase: "Phase 9: DevOps Basics", topic: "Dockerizing Java", subtopics: ["Writing a Dockerfile for Spring Boot", "Multi-stage builds", "Docker Compose for Both Services"] },
    { day: 159, phase: "Phase 9: DevOps Basics", topic: "Cloud Deployment (AWS)", subtopics: ["AWS EC2 Setup", "Pushing Code to Server", "Running Docker containers on Cloud"] },

    // The Ultimate 140-Day Portfolio & LeetCode Grind
    // This is what guarantees you pass the interviews and have a killer resume.
    ...Array.from({ length: 141 }, (_, i) => ({
        day: 160 + i, 
        phase: "Phase 8: Capstone & Placements Prep", 
        topic: `Placement Grind: Day ${i + 1}`,
        subtopics: [
            "DSA: 2 LeetCode Problems (Target Mediums)", 
            "Project: Build Capstone (AI Chatbot / Fraud App)", 
            "System Design / CS Core Review"
        ]
    }))
];
