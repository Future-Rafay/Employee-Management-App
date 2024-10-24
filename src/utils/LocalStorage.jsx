const employees = [
    {
        id: 1,
        name: "Ali Khan",
        email: "ali.khan@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                title: "Complete Project A",
                category: "Development",
                description: "Finish the frontend part of Project A",
                taskDate: "2024-10-24",
            },
            {
                taskNumber: 2,
                title: "Review PRs",
                category: "Code Review",
                description: "Review pull requests from team members",
                taskDate: "2024-10-20",
            },
            {
                taskNumber: 3,
                title: "Fix Bug #42",
                category: "Debugging",
                description: "Resolve the issue causing crashes on login",
                taskDate: "2024-10-18",
            },
        ],
        taskCount: {
            totalTasks: 3,
            newTask: 1,
            activeTask: 1,
            completedTask: 1,
            failedTask: 1,
        },
    },
    {
        id: 2,
        name: "Ayesha Ahmed",
        email: "ayesha.ahmed@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                title: "Create Marketing Plan",
                category: "Marketing",
                description: "Develop a strategy for the new product launch",
                taskDate: "2024-10-30",
            },
            {
                taskNumber: 2,
                title: "Design Logo",
                category: "Design",
                description: "Create a new logo for the branding team",
                taskDate: "2024-10-25",
            },
        ],
        taskCount: {
            totalTasks: 2,
            newTask: 1,
            activeTask: 1,
            completedTask: 1,
            failedTask: 0,
        },
    },
    {
        id: 3,
        name: "Bilal Hussain",
        email: "bilal.hussain@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                title: "Prepare Presentation",
                category: "Presentation",
                description: "Create slides for the upcoming meeting",
                taskDate: "2024-10-22",
            },
            {
                taskNumber: 2,
                title: "Update Documentation",
                category: "Documentation",
                description: "Revise the user guide and technical docs",
                taskDate: "2024-10-19",
            },
            {
                taskNumber: 3,
                title: "Team Meeting",
                category: "Meeting",
                description: "Attend the weekly sync-up meeting",
                taskDate: "2024-10-18",
            },
        ],
        taskCount: {
            totalTasks: 3,
            newTask: 0,
            activeTask: 1,
            completedTask: 2,
            failedTask: 0,
        },
    },
    {
        id: 4,
        name: "Fatima Riaz",
        email: "fatima.riaz@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                title: "Organize Workshop",
                category: "Training",
                description: "Arrange a workshop on leadership skills",
                taskDate: "2024-10-28",
            },
            {
                taskNumber: 2,
                title: "Submit Expense Report",
                category: "Finance",
                description: "File the monthly expense report",
                taskDate: "2024-10-15",
            },
        ],
        taskCount: {
            totalTasks: 2,
            newTask: 3,
            activeTask: 2,
            completedTask: 5,
            failedTask: 1,
        },
    },
    {
        id: 5,
        name: "Hamza Sheikh",
        email: "hamza.sheikh@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                title: "Code Refactoring",
                category: "Development",
                description: "Refactor old codebase for performance improvements",
                taskDate: "2024-10-17",
            },
            {
                taskNumber: 2,
                title: "Client Meeting",
                category: "Client Relations",
                description: "Meet with a client to discuss project progress",
                taskDate: "2024-10-10",
            },
        ],
        taskCount: {
            totalTasks: 2,
            newTask: 0,
            activeTask: 1,
            completedTask: 1,
            failedTask: 0,
        },
    },
];

const admin = [
    {
        id: 0,
        name: "Admin User",
        email: "admin@example.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const employees = JSON.parse(localStorage.getItem("employees"));

    //   console.log(employees);
    //   console.log(admin);

    return { employees, admin };
};
