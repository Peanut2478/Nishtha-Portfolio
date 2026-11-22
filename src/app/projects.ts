export const projects = [
  {
    title: "Visual Cortex Decoder",
    category: "Machine learning research",
    group: "AI / ML" as const,
    description: "Can neural activity reveal which direction a mouse saw a pattern move? I trained a decoder on recordings from 207 visual cortex neurons to classify eight directions.",
    details: [
      "Compared a PyTorch neural network against logistic regression using calcium imaging data from the Allen Brain Observatory. The models achieved 63.33% and 62.50% held-out test accuracy, respectively.",
      "Analyzed angular errors and opposite-direction confusions, then tested how selecting neurons by direction selectivity affected decoding performance.",
    ],
    tech: ["Python", "PyTorch", "NumPy", "scikit-learn"],
    images: [{ src: "/projects/visual-cortex.png", alt: "Visual Cortex Decoder analysis figure" }],
    links: [{ label: "View code", href: "https://github.com/Peanut2478/Visual-Cortex-Decoder" }],
  },
  {
    title: "Milk Administration Dashboard V2",
    category: "Full-stack application · Deployed",
    group: "Full stack" as const,
    description: "I independently built and deployed a hospital administration dashboard that brings milk inventory, billing, and reporting into one interface.",
    details: [
      "Built the Vue and TypeScript interface and connected its inventory and billing workflows to a Supabase-backed PostgreSQL database.",
      "Implemented authentication and PostgreSQL row-level security for database access and used Chart.js to visualize trends in the dashboard.",
    ],
    tech: ["Vue 3", "TypeScript", "Supabase", "PostgreSQL", "Chart.js"],
    images: [{ src: "/projects/milk-dashboard.png", alt: "Milk Administration Dashboard interface" }],
    links: [
      { label: "Open live app", href: "https://milk-dashboard-v2.vercel.app" },
      { label: "View code", href: "https://github.com/Peanut2478/Milk-Dashboard-V2" },
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=LSgzfcv4D0k" },
    ],
  },
  {
    title: "Thrive",
    category: "Applied ML · Research prototype",
    group: "AI / ML" as const,
    description: "My family’s experience with diabetes inspired me to co-found Thrive and explore how meal and wearable data could support personalized glucose forecasting.",
    details: [
      "Led development of a PyTorch forecasting model trained on 587 meal and sensor sequences containing 7,559 glucose readings. The training pipeline combines glucose, meals, medication, activity, sleep, and heart-rate data.",
      "Designed PostgreSQL and Supabase data infrastructure and contributed to React Native integration using Expo. The model incorporates physiological assumptions about glucose dynamics and carbohydrate absorption.",
    ],
    tech: ["Python", "PyTorch", "PostgreSQL", "Supabase", "React Native", "Expo"],
    images: [{ src: "/projects/Thrive-dashboard.png", alt: "Thrive mobile glucose dashboard" }],
    links: [],
  },
  {
    title: "POBS Underwater Robotics",
    category: "Turtle Robotics · Team R&D",
    group: "Robotics" as const,
    description: "I develop and test ROS 2 software for an underwater robotics platform, focusing on state estimation and navigation in Gazebo.",
    details: [
      "Implemented a state-estimation node that publishes odometry and integrated the BNO055 IMU driver into the ROS 2 sensor pipeline.",
      "Tested goal handling, heading control, and calibration checks in simulation, using dry-run thruster commands to validate controller behavior.",
    ],
    tech: ["Python", "ROS 2", "Gazebo", "Docker"],
    images: [
      {
        src: "/projects/pobs-state-estimator.png",
        alt: "Colored trajectory lines and a heading arrow in the simulated lake",
        caption: "State estimator visualization",
      },
      {
        src: "/projects/pobs-sonar-mapping.png",
        alt: "Blue sonar map cells over the simulated lake terrain",
        caption: "Sonar mapping visualization",
      },
    ],
    links: [],
  },
  {
    title: "ROS 2 Color-Based Object Tracker",
    category: "Computer vision",
    group: "Robotics" as const,
    description: "I built a real-time tracker that detects red objects with a Mac webcam and sends their coordinates to ROS 2 Humble running in Docker.",
    details: [
      "OpenCV captures webcam frames, isolates red objects with HSV masks, and finds the target contour and centroid. The preview overlays the contour and labels the centroid coordinates.",
      "tracker_sender.py sends the (x, y) coordinates over TCP from the Mac to Docker. A ROS 2 detector node publishes them on /object_position.",
      "A position reporter subscribes to /object_position and classifies horizontal position as left, center, or right and vertical position as top, middle, or bottom.",
    ],
    tech: ["Python", "OpenCV", "ROS 2 Humble", "Docker", "TCP sockets"],
    images: [
      { src: "/projects/tracker-no-target.png", alt: "Blue cup with a no red detected message", caption: "No red target detected" },
      { src: "/projects/tracker-detected.png", alt: "Red target marked with a green contour and yellow centroid", caption: "Target detected and centroid marked" },
      { src: "/projects/tracker-tracking.png", alt: "Red target at a new location with updated centroid coordinates", caption: "Tracking the target at a new position" },
    ],
    links: [],
  },
];

export type Project = (typeof projects)[number];
