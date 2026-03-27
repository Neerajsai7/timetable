// data.js
// The Complete Mastery Path: Math -> C++ -> DSA -> Core CS -> System Design

const learningPath = [
    // ==========================================
    // PHASE 1: FOUNDATIONS (MATH)
    // ==========================================
    {
        day: 1, phase: "Phase 1: Foundations", topic: "Linear Algebra - Basics",
        subtopics: ["Vectors and Vector Spaces", "Matrix Operations (Add, Multiply)", "Dot and Cross Products"]
    },
    {
        day: 2, phase: "Phase 1: Foundations", topic: "Linear Algebra - Advanced",
        subtopics: ["Determinants and Inverses", "Eigenvalues and Eigenvectors", "Linear Transformations"]
    },
    {
        day: 3, phase: "Phase 1: Foundations", topic: "Calculus - Differential",
        subtopics: ["Limits and Continuity", "Derivatives & Chain Rule", "Partial Derivatives"]
    },
    {
        day: 4, phase: "Phase 1: Foundations", topic: "Calculus - Integral",
        subtopics: ["Basic Integration", "Integration by Parts", "Applications of Integrals"]
    },
    {
        day: 5, phase: "Phase 1: Foundations", topic: "Probability - Basics",
        subtopics: ["Events and Sample Spaces", "Conditional Probability", "Bayes' Theorem"]
    },
    {
        day: 6, phase: "Phase 1: Foundations", topic: "Statistics",
        subtopics: ["Mean, Median, Variance", "Random Variables", "Normal and Binomial Distributions"]
    },
    {
        day: 7, phase: "Phase 1: Foundations", topic: "Discrete Math - Logic & Sets",
        subtopics: ["Set Theory Basics", "Propositional Logic", "Truth Tables"]
    },
    {
        day: 8, phase: "Phase 1: Foundations", topic: "Discrete Math - Combinatorics",
        subtopics: ["Permutations and Combinations", "Pigeonhole Principle", "Mathematical Induction"]
    },
    {
        day: 9, phase: "Phase 1: Foundations", topic: "Discrete Math - Graph Theory",
        subtopics: ["Vertices, Edges, Degrees", "Directed vs Undirected Graphs", "Trees as Graphs"]
    },

    // ==========================================
    // PHASE 2: CORE PROGRAMMING (C++)
    // ==========================================
    {
        day: 10, phase: "Phase 2: C++ Core", topic: "C++ Basics",
        subtopics: ["Environment Setup & Hello World", "Variables and Data Types", "Input/Output (cin/cout)"]
    },
    {
        day: 11, phase: "Phase 2: C++ Core", topic: "Control Flow",
        subtopics: ["If/Else & Switch", "For, While, Do-While Loops", "Break and Continue"]
    },
    {
        day: 12, phase: "Phase 2: C++ Core", topic: "Functions",
        subtopics: ["Function Declarations", "Pass by Value vs Reference", "Function Overloading"]
    },
    {
        day: 13, phase: "Phase 2: C++ Core", topic: "Pointers & References - I",
        subtopics: ["Memory Addresses", "Pointer Declaration & Dereferencing", "Null and Void Pointers"]
    },
    {
        day: 14, phase: "Phase 2: C++ Core", topic: "Pointers & Memory - II",
        subtopics: ["Dynamic Memory Allocation (new/delete)", "Pointer Arithmetic", "Memory Leaks"]
    },
    {
        day: 15, phase: "Phase 2: C++ Core", topic: "Object Oriented Programming - I",
        subtopics: ["Classes and Objects", "Constructors and Destructors", "Access Specifiers (public/private)"]
    },
    {
        day: 16, phase: "Phase 2: C++ Core", topic: "Object Oriented Programming - II",
        subtopics: ["Encapsulation", "Inheritance Basics", "Polymorphism & Virtual Functions"]
    },
    {
        day: 17, phase: "Phase 2: C++ Core", topic: "Standard Template Library (STL) - I",
        subtopics: ["Vectors (Dynamic Arrays)", "Iterators", "String class in C++"]
    },
    {
        day: 18, phase: "Phase 2: C++ Core", topic: "Standard Template Library (STL) - II",
        subtopics: ["Maps and Unordered Maps", "Sets and Unordered Sets", "Pairs and Tuples"]
    },
    {
        day: 19, phase: "Phase 2: C++ Core", topic: "Advanced C++ Concepts",
        subtopics: ["Templates (Function & Class)", "Exception Handling (try/catch)", "File I/O"]
    },

    // ==========================================
    // PHASE 3: DATA STRUCTURES
    // ==========================================
    {
        day: 20, phase: "Phase 3: Data Structures", topic: "Arrays & Strings",
        subtopics: ["Memory Layout of Arrays", "Multi-dimensional Arrays", "String Manipulation Algorithms"]
    },
    {
        day: 21, phase: "Phase 3: Data Structures", topic: "Array Problems (Practice)",
        subtopics: ["Two Pointer Technique", "Sliding Window Basics", "Prefix Sum Arrays"]
    },
    {
        day: 22, phase: "Phase 3: Data Structures", topic: "Linked Lists - Singly",
        subtopics: ["Node Structure", "Insertion (Head, Tail, Middle)", "Deletion"]
    },
    {
        day: 23, phase: "Phase 3: Data Structures", topic: "Linked Lists - Advanced",
        subtopics: ["Doubly Linked Lists", "Reversing a Linked List", "Detecting Cycles (Floyd's)"]
    },
    {
        day: 24, phase: "Phase 3: Data Structures", topic: "Stacks",
        subtopics: ["LIFO Concept", "Array vs Linked List Implementation", "Valid Parentheses Problem"]
    },
    {
        day: 25, phase: "Phase 3: Data Structures", topic: "Queues",
        subtopics: ["FIFO Concept", "Circular Queues", "Deque (Double Ended Queue)"]
    },
    {
        day: 26, phase: "Phase 3: Data Structures", topic: "Trees - Basics",
        subtopics: ["Tree Terminology (Root, Leaf, Height)", "Binary Trees", "Tree Traversals (In, Pre, Post)"]
    },
    {
        day: 27, phase: "Phase 3: Data Structures", topic: "Binary Search Trees (BST)",
        subtopics: ["BST Properties", "Insertion and Search", "Deletion in BST"]
    },
    {
        day: 28, phase: "Phase 3: Data Structures", topic: "Advanced Trees",
        subtopics: ["AVL Trees (Balancing Concepts)", "Tries (Prefix Trees)", "Segment Trees Basics"]
    },
    {
        day: 29, phase: "Phase 3: Data Structures", topic: "Heaps (Priority Queues)",
        subtopics: ["Min Heap vs Max Heap", "Heapify Algorithm", "Heapsort Application"]
    },
    {
        day: 30, phase: "Phase 3: Data Structures", topic: "Hashing",
        subtopics: ["Hash Functions", "Collision Resolution (Chaining)", "Collision Resolution (Open Addressing)"]
    },
    {
        day: 31, phase: "Phase 3: Data Structures", topic: "Graphs - Representation",
        subtopics: ["Adjacency Matrix", "Adjacency List", "When to use which"]
    },
    {
        day: 32, phase: "Phase 3: Data Structures", topic: "Graphs - Traversal",
        subtopics: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Connected Components"]
    },

    // ==========================================
    // PHASE 4: ALGORITHMS
    // ==========================================
    {
        day: 33, phase: "Phase 4: Algorithms", topic: "Algorithmic Complexity",
        subtopics: ["Time Complexity (Big O, Theta, Omega)", "Space Complexity", "Analyzing Loops"]
    },
    {
        day: 34, phase: "Phase 4: Algorithms", topic: "Searching Algorithms",
        subtopics: ["Linear Search", "Binary Search (Iterative & Recursive)", "Binary Search on Answer Space"]
    },
    {
        day: 35, phase: "Phase 4: Algorithms", topic: "Sorting Algorithms - Basic",
        subtopics: ["Bubble Sort", "Selection Sort", "Insertion Sort"]
    },
    {
        day: 36, phase: "Phase 4: Algorithms", topic: "Sorting Algorithms - Advanced",
        subtopics: ["Merge Sort (Divide & Conquer)", "Quick Sort", "Counting Sort"]
    },
    {
        day: 37, phase: "Phase 4: Algorithms", topic: "Recursion Basics",
        subtopics: ["Base Cases", "Call Stack Visualization", "Fibonacci & Factorial"]
    },
    {
        day: 38, phase: "Phase 4: Algorithms", topic: "Backtracking",
        subtopics: ["Concept of Choices and Constraints", "N-Queens Problem", "Sudoku Solver"]
    },
    {
        day: 39, phase: "Phase 4: Algorithms", topic: "Greedy Algorithms",
        subtopics: ["Local vs Global Optimum", "Fractional Knapsack", "Activity Selection Problem"]
    },
    {
        day: 40, phase: "Phase 4: Algorithms", topic: "Dynamic Programming (DP) - 1D",
        subtopics: ["Memoization vs Tabulation", "Climbing Stairs Problem", "Coin Change Problem"]
    },
    {
        day: 41, phase: "Phase 4: Algorithms", topic: "Dynamic Programming (DP) - 2D",
        subtopics: ["0/1 Knapsack Problem", "Longest Common Subsequence", "Grid Path Problems"]
    },
    {
        day: 42, phase: "Phase 4: Algorithms", topic: "Graph Algorithms - Shortest Path",
        subtopics: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall"]
    },
    {
        day: 43, phase: "Phase 4: Algorithms", topic: "Graph Algorithms - Spanning Trees",
        subtopics: ["Disjoint Set Union (DSU)", "Kruskal's Algorithm", "Prim's Algorithm"]
    },
    {
        day: 44, phase: "Phase 4: Algorithms", topic: "Advanced Algorithms",
        subtopics: ["Topological Sorting", "KMP Algorithm (String Matching)", "Bit Manipulation Tricks"]
    },

    // ==========================================
    // PHASE 5: COMPUTER SCIENCE CORE (OS, DBMS, NETWORKS)
    // ==========================================
    
    // Operating Systems
    {
        day: 45, phase: "Phase 5: CS Core", topic: "OS - Introduction",
        subtopics: ["What is an OS?", "Kernel vs User Space", "System Calls & Interrupts"]
    },
    {
        day: 46, phase: "Phase 5: CS Core", topic: "OS - Process Management",
        subtopics: ["Process Control Block (PCB)", "Process States & Transitions", "Context Switching"]
    },
    {
        day: 47, phase: "Phase 5: CS Core", topic: "OS - Threads & Concurrency",
        subtopics: ["Processes vs Threads", "Multithreading Models", "Race Conditions"]
    },
    {
        day: 48, phase: "Phase 5: CS Core", topic: "OS - Synchronization",
        subtopics: ["Mutexes and Locks", "Semaphores", "Producer-Consumer Problem"]
    },
    {
        day: 49, phase: "Phase 5: CS Core", topic: "OS - CPU Scheduling",
        subtopics: ["FCFS & SJF", "Round Robin", "Deadlocks (Coffman Conditions)"]
    },
    {
        day: 50, phase: "Phase 5: CS Core", topic: "OS - Memory Management",
        subtopics: ["Paging and Segmentation", "Virtual Memory", "Page Replacement (LRU, FIFO)"]
    },
    {
        day: 51, phase: "Phase 5: CS Core", topic: "OS - File Systems",
        subtopics: ["File Allocation Methods", "Inodes", "Disk Scheduling"]
    },

    // DBMS
    {
        day: 52, phase: "Phase 5: CS Core", topic: "DBMS - Introduction",
        subtopics: ["File System vs DBMS", "Relational Model Basics", "Keys (Primary, Foreign, Super)"]
    },
    {
        day: 53, phase: "Phase 5: CS Core", topic: "DBMS - SQL Basics",
        subtopics: ["DDL, DML, DCL commands", "SELECT, WHERE, ORDER BY", "Aggregate Functions (GROUP BY)"]
    },
    {
        day: 54, phase: "Phase 5: CS Core", topic: "DBMS - Advanced SQL",
        subtopics: ["Joins (Inner, Left, Right, Full)", "Subqueries and Nested Queries", "Views and Triggers"]
    },
    {
        day: 55, phase: "Phase 5: CS Core", topic: "DBMS - Normalization",
        subtopics: ["Anomalies (Update, Delete)", "Functional Dependencies", "1NF, 2NF, 3NF, BCNF"]
    },
    {
        day: 56, phase: "Phase 5: CS Core", topic: "DBMS - Transactions",
        subtopics: ["ACID Properties", "Concurrency Control", "Locking Protocols"]
    },
    {
        day: 57, phase: "Phase 5: CS Core", topic: "DBMS - Internals & NoSQL",
        subtopics: ["B-Trees and Indexing", "Query Optimization Basics", "NoSQL (Document, Key-Value)"]
    },

    // Computer Networks
    {
        day: 58, phase: "Phase 5: CS Core", topic: "Networks - Fundamentals",
        subtopics: ["LAN, WAN, MAN", "Network Topologies", "OSI 7-Layer Model"]
    },
    {
        day: 59, phase: "Phase 5: CS Core", topic: "Networks - Physical & Data Link",
        subtopics: ["MAC Addresses", "Ethernet & Switches", "Error Detection (CRC)"]
    },
    {
        day: 60, phase: "Phase 5: CS Core", topic: "Networks - Network Layer",
        subtopics: ["IPv4 vs IPv6", "Subnetting & CIDR", "Routers & Routing Algorithms"]
    },
    {
        day: 61, phase: "Phase 5: CS Core", topic: "Networks - Transport Layer",
        subtopics: ["TCP vs UDP", "TCP 3-Way Handshake", "Congestion Control"]
    },
    {
        day: 62, phase: "Phase 5: CS Core", topic: "Networks - Application Layer",
        subtopics: ["HTTP/HTTPS", "DNS Resolution", "WebSockets & APIs"]
    },

    // Computer Architecture
    {
        day: 63, phase: "Phase 5: CS Core", topic: "Computer Architecture",
        subtopics: ["Von Neumann Architecture", "CPU Registers and ALU", "Instruction Pipelining"]
    },
    {
        day: 64, phase: "Phase 5: CS Core", topic: "Architecture - Memory",
        subtopics: ["Memory Hierarchy", "Cache Basics (L1, L2, L3)", "Cache Misses and Hits"]
    },

    // ==========================================
    // PHASE 6: ADVANCED TOPICS / SYSTEM DESIGN
    // ==========================================
    {
        day: 65, phase: "Phase 6: Advanced / Sys Design", topic: "System Design - Basics",
        subtopics: ["Vertical vs Horizontal Scaling", "Latency vs Throughput", "CAP Theorem"]
    },
    {
        day: 66, phase: "Phase 6: Advanced / Sys Design", topic: "System Design - Core Components",
        subtopics: ["Load Balancers", "Reverse Proxies", "API Gateways"]
    },
    {
        day: 67, phase: "Phase 6: Advanced / Sys Design", topic: "System Design - Data",
        subtopics: ["Caching Strategies (Redis/Memcached)", "Database Sharding", "Replication (Leader/Follower)"]
    },
    {
        day: 68, phase: "Phase 6: Advanced / Sys Design", topic: "System Design - Communication",
        subtopics: ["REST vs GraphQL vs gRPC", "Message Queues (Kafka/RabbitMQ)", "Event-Driven Architecture"]
    },
    {
        day: 69, phase: "Phase 6: Advanced / Sys Design", topic: "System Design - Microservices",
        subtopics: ["Monolith vs Microservices", "Service Discovery", "Containerization (Docker basics)"]
    },
    {
        day: 70, phase: "Phase 6: Advanced / Sys Design", topic: "Mock System Design Interviews",
        subtopics: ["Design a URL Shortener (Bitly)", "Design a Chat App (WhatsApp)", "Design a Social Feed (Twitter)"]
    },

    // ==========================================
    // PHASE 7: APPLICATION / PROJECTS / LEETCODE GRIND
    // ==========================================
    // This section loops standard practice to solidify mastery.
    ...Array.from({ length: 80 }, (_, i) => ({
        day: 71 + i, 
        phase: "Phase 7: Mastery & Application", 
        topic: `Deep Work Sprint ${i + 1}`,
        subtopics: [
            "Solve 2 Medium LeetCode Problems", 
            "Work on Core Project for 2 Hours", 
            "Review Flashcards / Notes"
        ]
    }))
];
