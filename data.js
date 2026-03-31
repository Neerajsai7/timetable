// data.js
const learningPath = [
    // --- YEAR 1: THE ARCHITECT & THE MATHEMATICIAN ---
    
    // PHASE 1: COMPUTER SCIENCE CORE (Days 1-60)
    ...Array.from({ length: 60 }, (_, i) => ({
        day: 1 + i,
        phase: "Phase 1: CS Fundamentals & Advanced Java",
        topic: i < 30 ? "Java Concurrency & Memory Model" : "Advanced DSA (Graphs/DP/Disjoint Sets)",
        subtopics: [
            { title: "Multithreading & Executor Service", url: "https://www.baeldung.com/java-executor-service-tutorial" },
            { title: "Java Memory Model (JMM)", url: "https://www.baeldung.com/java-jvm-memory-model" },
            { title: "Solving LeetCode Hard (Dynamic Programming)", url: "https://leetcode.com/tag/dynamic-programming/" }
        ]
    })),

    // PHASE 2: LOW-LEVEL DESIGN & DESIGN PATTERNS (Days 61-120)
    ...Array.from({ length: 60 }, (_, i) => ({
        day: 61 + i,
        phase: "Phase 2: LLD & Clean Code",
        topic: i < 30 ? "Creational & Structural Patterns" : "Behavioral Patterns & SOLID",
        subtopics: [
            { title: "Implementing Singleton & Factory", url: "https://refactoring.guru/design-patterns/java" },
            { title: "Strategy & Observer Patterns", url: "https://refactoring.guru/design-patterns/behavioral-patterns" },
            { title: "Refactoring Legacy Code", url: "https://refactoring.guru/refactoring" }
        ]
    })),

    // PHASE 3: THE MATHEMATICS OF AI (Days 121-240)
    ...Array.from({ length: 120 }, (_, i) => ({
        day: 121 + i,
        phase: "Phase 3: Heavy Math for AI",
        topic: i < 40 ? "Linear Algebra (Eigenvalues/SVD)" : i < 80 ? "Multivariable Calculus & Optimization" : "Probability & Statistics",
        subtopics: [
            { title: "Gilbert Strang Linear Algebra", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
            { title: "Gradient Descent Math", url: "https://ml-cheatsheet.readthedocs.io/en/latest/gradient_descent.html" },
            { title: "Bayesian Statistics", url: "https://bit.ly/3x8Stats" }
        ]
    })),

    // PHASE 4: ENTERPRISE BACKEND ARCHITECTURE (Days 241-365)
    ...Array.from({ length: 125 }, (_, i) => ({
        day: 241 + i,
        phase: "Phase 4: Distributed Systems & Spring Cloud",
        topic: i < 40 ? "Microservices (Kafka/RabbitMQ)" : i < 80 ? "Database Internals (B-Trees/LSM)" : "Cloud Native (K8s/Terraform)",
        subtopics: [
            { title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/" },
            { title: "Kubernetes Orchestration", url: "https://kubernetes.io/docs/tutorials/" },
            { title: "Redis Caching Strategies", url: "https://redis.io/docs/manual/client-side-caching/" }
        ]
    })),

    // --- YEAR 2: THE AI ENGINEER & THE RESEARCHER ---

    // PHASE 5: DEEP LEARNING FROM SCRATCH (Days 366-500)
    ...Array.from({ length: 135 }, (_, i) => ({
        day: 366 + i,
        phase: "Phase 5: Deep Learning & Computer Vision",
        topic: i < 45 ? "Neural Nets from Scratch (Python/NumPy)" : i < 90 ? "CNNs & Object Detection" : "RNNs & LSTMs",
        subtopics: [
            { title: "Building Backprop in NumPy", url: "https://cs231n.github.io/optimization-2/" },
            { title: "PyTorch Deep Dive", url: "https://pytorch.org/docs/stable/index.html" },
            { title: "YOLO/ResNet Architectures", url: "https://arxiv.org/abs/1512.03385" }
        ]
    })),

    // PHASE 6: NLP & GENERATIVE AI (Days 501-620)
    ...Array.from({ length: 120 }, (_, i) => ({
        day: 501 + i,
        phase: "Phase 6: Transformers & LLMs",
        topic: i < 40 ? "Attention is All You Need" : i < 80 ? "Fine-tuning (LoRA/QLoRA)" : "RAG (Vector DBs/LangChain)",
        subtopics: [
            { title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
            { title: "HuggingFace Course", url: "https://huggingface.co/learn/nlp-course/" },
            { title: "Building RAG with Pinecone", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" }
        ]
    })),

    // PHASE 7: MLOps & SYSTEM DESIGN (Days 621-730)
    ...Array.from({ length: 110 }, (_, i) => ({
        day: 621 + i,
        phase: "Phase 7: The Masterclass",
        topic: i < 50 ? "MLOps (MLFlow/DVC)" : "High-Level System Design (Scaling to Billions)",
        subtopics: [
            { title: "Continuous Delivery for ML", url: "https://ml-ops.org/" },
            { title: "System Design Interview Prep", url: "https://github.com/donnemartin/system-design-primer" },
            { title: "Final Mock Interview Series", url: "https://www.pramp.com/" }
        ]
    }))
];
