// data.js
// 365-Day Elite Pipeline: Generated mapped curriculum with authoritative study links

const curriculumConfig = [
    // --- PHASE 1: Programming + Logic Foundation ---
    { start: 1, end: 5, phase: "Phase 1: Programming Foundation", topic: "C / Basic Programming", link: "https://www.geeksforgeeks.org/c-programming-language/", tasks: ["Variables, Data Types, IO", "Memory Basics", "Operators & Conditionals", "Loops & Manual Dry Runs", "1D Arrays & String Basics"] },
    { start: 6, end: 10, phase: "Phase 1: Problem Solving", topic: "Algorithms & Logic", link: "https://leetcode.com/explore/learn/card/array-and-string/", tasks: ["Solve 5-8 Easy Array Problems", "String Traversal Exercises", "Condition Logic Challenges", "Pattern Understanding", "Review & Debug"] },
    { start: 11, end: 12, phase: "Phase 1: Functions", topic: "Functions & Values", link: "https://www.programiz.com/c-programming/c-functions", tasks: ["Pass by Value", "Pass by Reference"] },
    { start: 13, end: 15, phase: "Phase 1: Pointers", topic: "Memory & Pointers", link: "https://www.geeksforgeeks.org/c-pointers/", tasks: ["Address vs Value", "Basic Pointer Arithmetic", "Pointer Manipulation"] },
    { start: 16, end: 20, phase: "Phase 1: Data Structures", topic: "Basic Structures", link: "https://www.geeksforgeeks.org/data-structures/", tasks: ["Deep Dive: Arrays", "Linked List Fundamentals", "Stack Concepts", "Draw/Visualize Structures", "Implementation Practice"] },
    
    // --- PHASE 2: Java Backend Core ---
    { start: 21, end: 25, phase: "Phase 2: Java Core", topic: "OOP Concepts", link: "https://www.baeldung.com/java-tutorial", tasks: ["Classes & Objects", "Inheritance", "Polymorphism", "Interfaces & Abstraction", "Real-world OOP Examples"] },
    { start: 26, end: 30, phase: "Phase 2: Advanced Java", topic: "Collections & Handling", link: "https://www.baeldung.com/java-collections", tasks: ["ArrayLists & Generics", "HashMaps & Sets", "Exception Handling", "File Handling", "When to use what structure"] },
    { start: 31, end: 35, phase: "Phase 2: Spring Boot Basics", topic: "Intro to Spring Boot", link: "https://spring.io/guides/gs/rest-service/", tasks: ["What is Spring Boot?", "REST API Concepts", "Controllers Setup", "Request to Response Flow", "Routing & Mappings"] },
    { start: 36, end: 40, phase: "Phase 2: Backend Dev", topic: "Databases & APIs", link: "https://www.baeldung.com/spring-boot-hibernate", tasks: ["CRUD API Design", "MySQL Basics", "JDBC & Setup", "JPA / Hibernate", "Data Flow: Client -> API -> DB"] },
    { start: 41, end: 45, phase: "Phase 2: Mini Project", topic: "Java Backend App", link: "https://spring.io/guides/tutorials/rest/", tasks: ["Setup User Login Model", "Build CRUD Operations", "Database Integration", "Testing endpoints in Postman", "Project Polish & Debug"] },
    
    // --- PHASE 3: AI/ML Foundation ---
    { start: 46, end: 50, phase: "Phase 3: Python for AI", topic: "Python Basics", link: "https://realpython.com/learning-paths/python3-crash-course/", tasks: ["Clean Syntax & Variables", "Lists & Dictionaries", "Loops & Control Flow", "Functions", "Python Scripts"] },
    { start: 51, end: 55, phase: "Phase 3: Libraries", topic: "Data Manipulation", link: "https://pandas.pydata.org/docs/getting_started/index.html", tasks: ["NumPy Basics", "NumPy Arrays & Math", "Pandas Intro", "Data Cleaning Techniques", "Data Handling Practice"] },
    { start: 56, end: 60, phase: "Phase 3: ML Intro", topic: "What is ML?", link: "https://developers.google.com/machine-learning/crash-course", tasks: ["Supervised Learning Concepts", "Unsupervised Learning Concepts", "Classification vs Regression", "Choosing the right approach", "Understanding Use Cases"] },
    { start: 61, end: 65, phase: "Phase 3: Algorithms", topic: "Regression Models", link: "https://scikit-learn.org/stable/supervised_learning.html", tasks: ["Linear Regression Math", "Coding Linear Regression", "Logistic Regression Concepts", "Coding Logistic Regression", "Input/Output Analysis"] },
    { start: 66, end: 70, phase: "Phase 3: Model Practice", topic: "Training & Evaluation", link: "https://scikit-learn.org/stable/model_selection.html", tasks: ["Train Models with Sklearn", "Evaluate Accuracy", "Overfitting vs Underfitting", "Cross Validation Basics", "Tuning Parameters"] },
    { start: 71, end: 75, phase: "Phase 3: ML Mini Project", topic: "Prediction System", link: "https://www.kaggle.com/learn/intro-to-machine-learning", tasks: ["Dataset Selection", "Data Pipeline setup", "Train House/Score Model", "Output Prediction", "Analyze Results"] },
    
    // --- PHASE 4: COMBINE BOTH ---
    { start: 76, end: 80, phase: "Phase 4: ML Integration", topic: "ML API Creation", link: "https://fastapi.tiangolo.com/tutorial/", tasks: ["Learn FastAPI/Flask", "Model Serialization (Pickle)", "Loading Models to API", "Testing ML Endpoint", "API Error Handling"] },
    { start: 81, end: 85, phase: "Phase 4: Java -> Python", topic: "System Communication", link: "https://www.baeldung.com/java-http-request", tasks: ["Make HTTP Calls in Java", "API Communication Basics", "JSON Handling & Parsing", "Integrate ML API to Backend", "End-to-End Testing"] },
    { start: 86, end: 90, phase: "Phase 4: FINAL PROJECT 1", topic: "AI-Powered Backend", link: "https://github.com/spring-guides", tasks: ["System Design & Setup", "Train specific ML Model", "Build Java Backend Router", "Database Logging", "Complete Integration (e.g. Fraud Detection)"] },

    // --- PART 1: ADVANCED ML + DATA ---
    { start: 91, end: 95, phase: "Part 1: Advanced ML", topic: "Data Preprocessing", link: "https://scikit-learn.org/stable/modules/preprocessing.html", tasks: ["Handling Missing Values", "Normalization", "Standardization", "Label & One-Hot Encoding", "Understanding Garbage In/Out"] },
    { start: 96, end: 100, phase: "Part 1: Advanced ML", topic: "Tree Algorithms", link: "https://scikit-learn.org/stable/modules/tree.html", tasks: ["Decision Trees", "Random Forest Ensembles", "KNN (K-Nearest Neighbors)", "When to use algorithms", "Code & Evaluate"] },
    { start: 101, end: 105, phase: "Part 1: Advanced ML", topic: "Model Evaluation 2.0", link: "https://towardsdatascience.com/metrics-to-evaluate-your-machine-learning-algorithm-f10ba6e38234", tasks: ["Precision & Recall", "Confusion Matrix Analysis", "F1 Score", "ROC & AUC", "Real-world spam/fraud metrics"] },
    { start: 106, end: 110, phase: "Part 1: Advanced ML", topic: "Feature Engineering", link: "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/", tasks: ["Feature Selection", "Feature Importance Extraction", "Dimensionality Intro", "Creating New Features", "Pipeline Optimization"] },
    { start: 111, end: 120, phase: "Part 1: Project 1 (Serious)", topic: "End-to-End ML System", link: "https://www.kaggle.com/datasets", tasks: ["Define Problem Scope", "Data Cleaning Script", "Model Training", "Comprehensive Evaluation", "Model Persistence & Documentation"] },

    // --- PART 2: ADVANCED BACKEND ---
    { start: 121, end: 125, phase: "Part 2: Advanced Backend", topic: "Spring Boot Deep Dive", link: "https://www.baeldung.com/spring-injection", tasks: ["Dependency Injection", "Controller Layer", "Service Layer Logic", "Repository Layer", "Clean Architecture Principles"] },
    { start: 126, end: 130, phase: "Part 2: Advanced Backend", topic: "Database Mastery", link: "https://use-the-index-luke.com/", tasks: ["SQL Joins (Inner/Outer)", "Database Indexing", "Query Optimization", "Performance Testing", "Transactions"] },
    { start: 131, end: 135, phase: "Part 2: Advanced Backend", topic: "Authentication", link: "https://jwt.io/introduction", tasks: ["Security Basics", "JWT (JSON Web Tokens)", "Login/Signup Flow", "Securing Endpoints", "Token Expiry & Refresh"] },
    { start: 136, end: 140, phase: "Part 2: Advanced Backend", topic: "System Design Basics", link: "https://github.com/donnemartin/system-design-primer", tasks: ["What is Scalability?", "Vertical vs Horizontal Scaling", "Monoliths", "Microservices Concepts", "Trade-offs"] },
    { start: 141, end: 150, phase: "Part 2: Project 2 (Backend)", topic: "Production Backend", link: "https://spring.io/guides/gs/securing-web/", tasks: ["Architect Database", "Build Auth System", "Implement CRUD Modules", "Apply Clean Structure", "Testing & Validation"] },

    // --- PART 3: AI + BACKEND INTEGRATION ---
    { start: 151, end: 155, phase: "Part 3: Deployment", topic: "Model Deployment APIs", link: "https://fastapi.tiangolo.com/advanced/", tasks: ["FastAPI Advanced Routing", "Flask API endpoints", "Load Model dynamically", "Prediction Service", "API Security"] },
    { start: 156, end: 160, phase: "Part 3: Containerization", topic: "Docker Basics", link: "https://docs.docker.com/get-started/", tasks: ["What is Docker?", "Writing Dockerfiles", "Containerizing the App", "Docker Compose", "Run Anywhere Validation"] },
    { start: 161, end: 165, phase: "Part 3: Performance", topic: "Async & Optimization", link: "https://realpython.com/async-io-python/", tasks: ["Handling multiple requests", "Async logic in Python/Java", "API Caching Intro", "Optimizing Response time", "Load Testing basics"] },
    { start: 166, end: 170, phase: "Part 3: Cloud Deployment", topic: "Cloud Basics", link: "https://aws.amazon.com/getting-started/", tasks: ["What is the Cloud?", "AWS / GCP UI Tour", "Provisioning a Server", "Deploying the container", "Opening Ports & Networking"] },
    { start: 171, end: 180, phase: "Part 3: Final Project", topic: "Production AI System", link: "https://github.com/kamranahmedse/developer-roadmap", tasks: ["Define Architecture", "Train & Save Core ML Model", "Build Java Backend System", "Integrate via APIs", "Deploy & Document on GitHub"] },

    // --- ELITE PHASE 3: PART 1: DEEP LEARNING ---
    { start: 181, end: 185, phase: "Elite Phase: Deep Learning", topic: "Neural Net Basics", link: "https://www.3blue1brown.com/topics/neural-networks", tasks: ["Network Theory", "Layers & Neurons", "Weights & Biases", "Forward Propagation Math", "Visualizing Flow"] },
    { start: 186, end: 190, phase: "Elite Phase: Deep Learning", topic: "Training Concepts", link: "https://cs231n.github.io/optimization-1/", tasks: ["Loss/Cost Functions", "Gradient Descent", "Backpropagation Core", "Learning Rates", "Epochs & Batches"] },
    { start: 191, end: 200, phase: "Elite Phase: Deep Learning", topic: "PyTorch Framework", link: "https://pytorch.org/tutorials/beginner/basics/intro.html", tasks: ["Tensors Operations", "Building Models in PyTorch", "Writing Custom Training Loops", "Optimizers", "Saving/Loading state_dicts"] },
    { start: 201, end: 210, phase: "Elite Phase: Deep Learning", topic: "CNN (Computer Vision)", link: "https://cs231n.github.io/convolutional-networks/", tasks: ["Convolution Layers", "Pooling Layers", "Image Preprocessing", "Building an Image Classifier", "Evaluating CNNs"] },
    { start: 211, end: 220, phase: "Elite Phase: Deep Learning", topic: "NLP Basics", link: "https://huggingface.co/learn/nlp-course/", tasks: ["Text Preprocessing", "Tokenization", "Word Embeddings", "RNN/LSTM Concepts", "Sentiment Analysis Model"] },
    { start: 221, end: 240, phase: "Elite Phase: Deep Learning", topic: "Project 3 (DL Model)", link: "https://paperswithcode.com/", tasks: ["Setup Dataset", "Build Model Architecture", "Write Training Pipeline", "Evaluate Matrix", "Expose via API Endpoint"] },

    // --- ELITE PHASE 3: PART 2: SYSTEM DESIGN ---
    { start: 241, end: 250, phase: "Elite Phase: Systems", topic: "Deep System Design", link: "https://bytebytego.com/", tasks: ["Load Balancing strategies", "Caching (Redis/Memcached)", "Database Sharding/Replication", "CAP Theorem", "Designing for 1M Users"] },
    { start: 251, end: 260, phase: "Elite Phase: Systems", topic: "Microservices", link: "https://microservices.io/", tasks: ["Decomposing Monoliths", "Service Discovery", "API Gateways", "Inter-service Communication", "Handling Failures"] },
    { start: 261, end: 270, phase: "Elite Phase: Systems", topic: "Messaging Systems", link: "https://kafka.apache.org/documentation/", tasks: ["Event-Driven Architecture", "Message Queues (RabbitMQ)", "Kafka Concepts", "Async AI pipelines", "Pub/Sub Models"] },
    { start: 271, end: 280, phase: "Elite Phase: Systems", topic: "Advanced DB & Perf", link: "https://use-the-index-luke.com/", tasks: ["Deep Dive: B-Trees & Indexes", "Query Execution Plans", "Connection Pooling", "NoSQL vs SQL scaling", "Bottleneck hunting"] },
    { start: 281, end: 300, phase: "Elite Phase: Systems", topic: "Project 4 (Scalability)", link: "https://github.com/donnemartin/system-design-primer#system-design-interview-questions-with-solutions", tasks: ["Architect Highly Available App", "Implement Message Queues", "Build Microservices", "Stress Testing", "Document System Flow"] },

    // --- ELITE PHASE 3: PART 3: REAL AI ENGINEERING ---
    { start: 301, end: 310, phase: "Elite Phase: MLOps", topic: "MLOps Basics", link: "https://ml-ops.org/", tasks: ["Model Versioning (DVC/MLflow)", "Automated Training Pipelines", "CI/CD for ML", "Data Drift Monitoring", "Model Decay Handling"] },
    { start: 311, end: 320, phase: "Elite Phase: Modern AI", topic: "LLMs & GenAI", link: "https://platform.openai.com/docs/guides/prompt-engineering", tasks: ["Using ChatGPT APIs", "Prompt Engineering basics", "System Prompts", "RAG Concepts", "Cost tracking & limits"] },
    { start: 321, end: 330, phase: "Elite Phase: Modern AI", topic: "Advanced AI Integration", link: "https://www.pinecone.io/learn/", tasks: ["Vector Databases", "Embeddings Search", "Building Smart Search", "Contextual AI Chatbots", "Recommendation Engines"] },
    { start: 331, end: 365, phase: "Elite Phase: The Climax", topic: "Final Master Project", link: "https://roadmap.sh/ai-data-scientist", tasks: ["Brainstorm AI SaaS", "Java Backend Foundation", "Integrate Custom/LLM AI", "Deploy to Cloud Environment", "Launch & Record Explainer Video"] }
];

const learningPath = [];

// Dynamic Generator to map out the 365 days accurately with tailored study links
curriculumConfig.forEach(block => {
    let taskCounter = 0;
    for (let day = block.start; day <= block.end; day++) {
        
        let dailyTaskTitle = block.tasks[taskCounter % block.tasks.length];
        taskCounter++;

        let isRevisionDay = (day % 7 === 6);
        let isProjectDay = (day % 7 === 0);

        // Generate a highly targeted YouTube search for exact concept understanding
        let videoSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(block.topic + " " + dailyTaskTitle + " tutorial")}`;

        let subtopics = [];
        
        if (isRevisionDay && day < 330) {
            subtopics.push({ title: "Review past 5 days of notes", url: block.link });
            subtopics.push({ title: "Re-code challenging logic", url: block.link });
        } else if (isProjectDay && day < 330) {
            subtopics.push({ title: `Consolidate knowledge: Build weekly mini-feature for ${block.topic}`, url: block.link });
            subtopics.push({ title: "Debug & Push to GitHub", url: "https://github.com/" });
        } else {
            // Task 1 links to the authoritative documentation/guide
            subtopics.push({ title: `Deep Dive: ${dailyTaskTitle}`, url: block.link });
            // Task 2 links to a dynamic video search for that exact concept
            subtopics.push({ title: "Hands-on Implementation / Video Tutorial", url: videoSearchUrl });
            
            if (day > 180) {
                subtopics.push({ title: "System level thinking: How does this scale?", url: "https://bytebytego.com/"});
            }
        }

        if (day >= 331) {
            subtopics = [
                { title: `Master Project Dev: ${dailyTaskTitle}`, url: block.link },
                { title: "Code, Test, Document", url: block.link }
            ];
        }

        learningPath.push({
            day: day,
            phase: block.phase,
            topic: block.topic,
            subtopics: subtopics
        });
    }
});
