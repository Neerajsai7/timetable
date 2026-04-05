// data.js
// 365-Day Elite Pipeline: Tailored to your exact Java, Spring Boot, ML, and Systems curriculum.

const curriculumConfig = [
    // --- PHASE 1: JAVA FOUNDATION (Days 1-20) ---
    { 
        start: 1, end: 7, phase: "Java Basics", topic: "Execution & Syntax", 
        link: "https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html", 
        tasks: ["JDK vs JRE vs JVM", "Program Structure & main()", "Variables & Types", "Operators & Short-circuiting", "Conditionals (switch/if)", "Loops (for/while/do-while)", "Solve 10 Loop Problems"] 
    },
    { 
        start: 8, end: 14, phase: "Java Data Structures", topic: "Arrays & Strings", 
        link: "https://www.geeksforgeeks.org/arrays-in-java/", 
        tasks: ["1D Arrays & Traversal", "Prefix Sum & Sliding Window", "2D Arrays & Matrices", "String Immutability", "StringBuilder Performance", "Palindrome & Frequency count", "Revision"] 
    },
    { 
        start: 15, end: 20, phase: "Java OOP", topic: "Object Oriented Programming", 
        link: "https://www.baeldung.com/java-oop", 
        tasks: ["Class vs Object", "Encapsulation & Access Modifiers", "Inheritance & extends", "Polymorphism (Overload/Override)", "Abstraction & Interfaces", "OOP Mini Project"] 
    },

    // --- PHASE 1: COLLECTIONS & EXCEPTIONS (Days 21-30) ---
    { 
        start: 21, end: 30, phase: "Java Core Advanced", topic: "Collections & Handling", 
        link: "https://www.baeldung.com/java-collections", 
        tasks: ["ArrayList & Resizing", "HashMap & Hashing", "HashSet & Unique Elements", "try-catch-finally", "Custom Exceptions", "File Handling Basics", "Practice Exercises", "Mini Project Build", "Mini Project Refine", "Final Revision"] 
    },

    // --- PHASE 2: SPRING BOOT & WEB (Days 31-45) ---
    { 
        start: 31, end: 35, phase: "Web Basics", topic: "HTTP & REST", 
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", 
        tasks: ["Client-Server & DNS", "HTTP Methods & Status Codes", "REST API Principles", "JSON Serialization", "Postman Testing API"] 
    },
    { 
        start: 36, end: 45, phase: "Spring Boot Basics", topic: "Controllers & DI", 
        link: "https://spring.io/guides/gs/rest-service/", 
        tasks: ["Spring Boot Auto-configuration", "Project Setup & Maven", "@RestController & Mappings", "Path Variables & @GetMapping", "@RequestBody & Data Binding", "ResponseEntity & Status", "Build Simple APIs", "Dependency Injection (@Autowired)", "Layered Architecture Setup", "Service Layer Business Logic"] 
    },

    // --- PHASE 2: DATABASE & JPA (Days 46-60) ---
    { 
        start: 46, end: 51, phase: "Database Core", topic: "SQL Basics", 
        link: "https://www.w3schools.com/sql/", 
        tasks: ["RDBMS Basics & Tables", "CRUD SQL Queries", "WHERE, ORDER BY, LIMIT", "INNER & LEFT JOINS", "Indexing for Performance", "SQL Practice"] 
    },
    { 
        start: 52, end: 60, phase: "Hibernate & JPA", topic: "Spring Data JPA", 
        link: "https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa", 
        tasks: ["ORM & Entities", "@Entity & @Id Mapping", "JpaRepository Interfaces", "One-to-One & One-to-Many", "DB Configuration (application.properties)", "Full CRUD API with DB", "Exception Handling in APIs", "Backend User System Project", "Add Validation to Project"] 
    },

    // --- PHASE 2: ADVANCED APIs & AUTH (Days 61-90) ---
    { 
        start: 61, end: 65, phase: "Advanced APIs", topic: "Design & Validation", 
        link: "https://www.baeldung.com/java-dto-pattern", 
        tasks: ["API Naming Conventions", "DTO Pattern", "Field Validation (@Valid)", "Global Exception Handling", "Logging (Debug vs Error)"] 
    },
    { 
        start: 66, end: 71, phase: "Security", topic: "JWT & Spring Security", 
        link: "https://jwt.io/introduction", 
        tasks: ["Session vs Token Auth", "JWT Structure & Flow", "JWT Generation & Validation", "Spring Security Configuration", "Role-based Access", "Secure API Endpoints Project"] 
    },
    { 
        start: 72, end: 80, phase: "API Polish", topic: "Optimization & Docs", 
        link: "https://www.baeldung.com/spring-data-jpa-pagination-sorting", 
        tasks: ["Pagination & Pageable", "Sorting Data", "Caching Concepts", "Redis Basics", "@Async Processing", "Multipart File Uploads", "Swagger/OpenAPI Docs", "Unit & Integration Testing", "Debugging Strategies"] 
    },
    { 
        start: 81, end: 90, phase: "Project Phase", topic: "Advanced Backend Project", 
        link: "https://spring.io/guides", 
        tasks: ["Plan Architecture & DB", "Build JWT Auth System", "Build CRUD Endpoints", "Build Validation Layer", "Add Pagination", "Add Global Errors", "Add Logging", "Run Integration Tests", "Fix Bugs", "Final Architecture Review"] 
    },

    // --- PHASE 3: PYTHON & ML FOUNDATION (Days 91-120) ---
    { 
        start: 91, end: 95, phase: "Python for AI", topic: "Python Basics", 
        link: "https://realpython.com/learning-paths/python3-crash-course/", 
        tasks: ["Variables & Syntax", "Control Flow (if/loops)", "Lists, Tuples, Dicts", "Functions & Modularity", "File Handling (Reading Data)"] 
    },
    { 
        start: 96, end: 101, phase: "Data Manipulation", topic: "NumPy & Pandas", 
        link: "https://pandas.pydata.org/docs/user_guide/10min.html", 
        tasks: ["NumPy Arrays & Shape", "Matrix Broadcasting", "Pandas DataFrames", "Data Filtering & Grouping", "Data Visualization (Plots)", "Dataset Practice"] 
    },
    { 
        start: 102, end: 105, phase: "Data Preprocessing", topic: "Cleaning Data", 
        link: "https://scikit-learn.org/stable/modules/preprocessing.html", 
        tasks: ["Handling Missing Values", "Label & One-Hot Encoding", "Feature Scaling (Standardization)", "Train-Test Split"] 
    },
    { 
        start: 106, end: 110, phase: "ML Algorithms", topic: "Supervised Learning", 
        link: "https://scikit-learn.org/stable/supervised_learning.html", 
        tasks: ["Supervised vs Unsupervised", "Linear Regression Math", "Logistic Regression", "Decision Trees", "Random Forest Ensembles"] 
    },
    { 
        start: 111, end: 120, phase: "Model Evaluation", topic: "Metrics & Project", 
        link: "https://towardsdatascience.com/metrics-to-evaluate-your-machine-learning-algorithm-f10ba6e38234", 
        tasks: ["Accuracy, Precision, Recall", "Overfitting vs Underfitting", "Hyperparameter Tuning", "Revision", "Plan ML Project", "Clean Dataset", "Train Model", "Evaluate Results", "Improve Metrics", "Final Model Review"] 
    },

    // --- PHASE 4: AI + BACKEND INTEGRATION (Days 121-150) ---
    { 
        start: 121, end: 130, phase: "ML Deployment", topic: "FastAPI Setup", 
        link: "https://fastapi.tiangolo.com/", 
        tasks: ["Review ML Input/Output", "Model Serialization (Pickle)", "Why APIs for ML?", "FastAPI App Structure", "Create Prediction Endpoint", "JSON Input Validation", "ML API Error Handling", "Test via Postman", "Response Optimization", "Finish ML API App"] 
    },
    { 
        start: 131, end: 135, phase: "System Communication", topic: "Java calls Python", 
        link: "https://www.baeldung.com/java-http-request", 
        tasks: ["HTTP Clients in Java", "JSON Parsing in Java", "Connect Java to ML API", "End-to-End Data Flow Check", "Cross-System Error Handling"] 
    },
    { 
        start: 136, end: 140, phase: "Containerization", topic: "Dockerizing Systems", 
        link: "https://docs.docker.com/get-started/", 
        tasks: ["Docker Containers Intro", "Dockerize FastAPI", "Dockerize Java Backend", "Run Multiple Services", "System Testing"] 
    },
    { 
        start: 141, end: 150, phase: "Integration Project", topic: "Full Stack AI App", 
        link: "https://github.com/donnemartin/system-design-primer", 
        tasks: ["Plan Full Architecture", "Setup Java Backend", "Integrate ML Endpoint", "Secure API Keys", "Build Database Layer", "Connect Services", "Add Logging & Errors", "Performance Testing", "Fix Bugs", "Final System Review"] 
    },

    // --- PHASE 5: SYSTEM DESIGN (Days 151-180) ---
    { 
        start: 151, end: 160, phase: "System Design", topic: "Scalability Core", 
        link: "https://bytebytego.com/", 
        tasks: ["Big Picture Client-Server", "Vertical vs Horizontal Scaling", "Load Balancing", "Caching Strategies", "Database Read Replicas", "API Performance", "Rate Limiting", "Logging & Metrics", "Fault Tolerance", "Revision"] 
    },
    { 
        start: 161, end: 170, phase: "Microservices", topic: "Advanced Architectures", 
        link: "https://microservices.io/", 
        tasks: ["JWT & Auth Flow Recap", "Role Permissions", "Data Validation Security", "Monolith vs Microservices", "Service-to-Service APIs", "Message Queues Concept", "Async Processing Systems", "Cloud Storage (S3)", "Deployment Environments", "AWS/Cloud Basics"] 
    },
    { 
        start: 171, end: 180, phase: "Final System", topic: "Scale Ready AI", 
        link: "https://roadmap.sh/backend", 
        tasks: ["Plan Scalable AI System", "Build AI Model", "Build Java Services", "Secure with Auth", "Implement Database", "Add Queue/Async", "Implement Caching", "Stress Test Load", "Debug Performance", "Final Architecture Defense"] 
    },

    // --- PHASE 6: DEEP LEARNING CORE (Days 181-210) ---
    { 
        start: 181, end: 190, phase: "Deep Learning Base", topic: "Neural Networks", 
        link: "https://www.3blue1brown.com/topics/neural-networks", 
        tasks: ["DL vs ML Concepts", "Neurons & Weights", "Activation Functions", "Forward Propagation", "Loss Functions", "Gradient Descent Math", "Backpropagation Intuition", "Overfitting & Dropout", "PyTorch Tensors", "Building PyTorch Layers"] 
    },
    { 
        start: 191, end: 210, phase: "Training", topic: "PyTorch & DL Projects", 
        link: "https://pytorch.org/tutorials/beginner/basics/intro.html", 
        tasks: ["Custom Training Loops", "Loss Tracking", "DL Revision", "Plan Neural Network", "Build Dataset Generator", "Write Training Script", "Track Gradients", "Save Model State", "Test Predictions", "Visualize Output", "Improve Architecture", "Hyperparameter Tuning", "Evaluate Accuracy", "Refine Code", "Final DL Project Review", "Review Errors", "Review Overfitting", "Check Matrix Shapes", "Optimize Code", "Freeze Dependencies"] 
    },

    // --- PHASE 7: SPECIALIZATION CV + NLP (Days 211-240) ---
    { 
        start: 211, end: 220, phase: "Computer Vision", topic: "CNN Architecture", 
        link: "https://cs231n.github.io/convolutional-networks/", 
        tasks: ["Convolution & Filters", "Pooling & Flattening", "Setup CV Dataset", "Build CNN Architecture", "Train Image Classifier", "Evaluate Visual Model", "Tune CNN Parameters", "Test Edge Cases", "Export Model", "CV Wrap-up"] 
    },
    { 
        start: 221, end: 240, phase: "NLP", topic: "Language Models", 
        link: "https://huggingface.co/learn/nlp-course/", 
        tasks: ["Text Preprocessing", "Tokenization Techniques", "Word Embeddings", "Plan NLP Project", "Gather Text Data", "Build RNN/LSTM Base", "Train Sentiment Analyzer", "Evaluate Predictions", "Tune Embeddings", "Export NLP Model", "Review NLP Logic", "Test Custom Inputs", "Refactor Code", "Build API Wrapper", "Integrate to Backend", "Test Endpoints", "Handle Text Errors", "Scale Model Load", "Optimize NLP Speed", "Final Project Complete"] 
    },

    // --- PHASE 8: ADVANCED BACKEND + SYSTEMS (Days 241-300) ---
    { 
        start: 241, end: 300, phase: "Elite Backend", topic: "Microservices & Queues", 
        link: "https://kafka.apache.org/documentation/", 
        tasks: ["Decompose Monolith", "Configure API Gateway", "Service Registry", "Implement Kafka/RabbitMQ", "Event Driven AI Triggers", "CQRS Pattern Concepts", "Database Indexing Deep Dive", "Sharding Implementation", "Distributed Tracing", "Build Scalable Architecture Project... (Continuous Development)"] 
    },

    // --- PHASE 9: REAL AI ENGINEERING (Days 301-365) ---
    { 
        start: 301, end: 365, phase: "The Climax", topic: "MLOps & AI SaaS", 
        link: "https://ml-ops.org/", 
        tasks: ["Model Versioning (DVC)", "CI/CD Deployment Pipelines", "Data Drift Monitoring", "LLM Prompt Engineering", "Vector DB & RAG Setup", "Plan AI SaaS Final Master Project", "Architect Cloud Infra", "Code Multi-tenant Backend", "Deploy ML Microservice", "Launch Product... (Continuous Development)"] 
    }
];

const learningPath = [];

// Dynamic Generator: Matches your curriculum blocks to 365 days, adding direct Doc Links & Video Searches
curriculumConfig.forEach(block => {
    let taskCounter = 0;
    
    // Distribute the tasks array evenly across the assigned days for the block
    for (let day = block.start; day <= block.end; day++) {
        
        let dailyTaskTitle = block.tasks[taskCounter % block.tasks.length];
        taskCounter++;

        // Creates a specific YouTube search query to immediately pull up tutorials for the exact subject
        let videoSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent("Java Spring Boot ML " + block.topic + " " + dailyTaskTitle + " tutorial")}`;

        let subtopics = [];
        
        // Task 1: Practical Implementation / Documentation Link
        subtopics.push({ 
            title: `Deep Dive: ${dailyTaskTitle}`, 
            url: block.link 
        });
        
        // Task 2: Video Tutorial Link
        subtopics.push({ 
            title: "Watch Hands-on Video Tutorial", 
            url: videoSearchUrl 
        });
        
        // Task 3: Systems Thinking (For days past 150)
        if (day > 150) {
            subtopics.push({ 
                title: "System check: How does this scale under load?", 
                url: "https://bytebytego.com/"
            });
        }

        learningPath.push({
            day: day,
            phase: block.phase,
            topic: block.topic,
            subtopics: subtopics
        });
    }
});
